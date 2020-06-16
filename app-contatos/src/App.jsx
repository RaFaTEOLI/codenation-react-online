import React from 'react';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import './App.scss';

const API = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchFilter: '',
      contacts: [],
      filteredContacts: [],
    };
  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ contacts: data, filteredContacts: data }));
  }
  handleChange = e => {
    this.setState({
      searchFilter: e.target.value,
    });
  };
  handleClickOrder(event, order) {
    console.log(order);
    let newContacts = [];

    newContacts = this.orderBy(this.state.contacts, order);

    this.setState({
      contacts: newContacts,
    });
  }
  orderBy(contacts, order) {
    return contacts.sort((a, b) =>
      a[order] > b[order]
        ? 1
        : a[order] === b[order]
        ? a.size > b.size
          ? 1
          : -1
        : -1
    );
  }
  render() {
    let filteredContacts = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.searchFilter.toLowerCase());
    });
    return (
      <React.Fragment>
        <Topbar />

        <div className="container">
          <Filters
            handleChange={this.handleChange}
            handleSelectChange={this.handleSelectChange}
            handleOrder={(event, order) => this.handleClickOrder(event, order)}
          />
        </div>

        <div className="container">
          <Contacts contacts={filteredContacts} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
