import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component {
  formatDate(date) {
    const newDate = new Date(date);
    return (
      (newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate()) +
      '/' +
      (newDate.getMonth() < 10
        ? '0' + newDate.getMonth()
        : newDate.getMonth()) +
      '/' +
      newDate.getFullYear()
    );
  }
  render() {
    const contacts = this.props.contacts;
    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <Contact
            key=""
            avatar=""
            name="Nome"
            phone="Telefone"
            country="País"
            admissionDate="Admissão"
            company="Empresa"
            department="Departamento"
          />
          {contacts &&
            contacts.map(item => (
              <Contact
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                phone={item.phone}
                country={item.country}
                admissionDate={this.formatDate(item.admissionDate)}
                company={item.company}
                department={item.department}
              />
            ))}
        </section>
      </div>
    );
  }
}

export default Contacts;
