import React from 'react';

class FilterButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }
  handleClick() {
    console.log('clicou');
    this.setState({ selected: !this.state.selected });
  }
  render() {
    let btn_class = this.state.selected
      ? 'filters__item is-selected'
      : 'filters__item';
    return (
      <button
        className={btn_class}
        onClick={() => {
          this.handleClick();
          this.props.handleOrder();
        }}
      >
        {this.props.text}
        <i className="fas fa-sort-down" />
      </button>
    );
  }
}

export default FilterButton;
