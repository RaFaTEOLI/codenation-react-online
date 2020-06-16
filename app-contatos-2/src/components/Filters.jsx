import React from 'react';

import FilterButton from './FilterButton';

class Filters extends React.Component {
  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              onChange={this.props.handleChange}
              className="filters__search__input"
              placeholder="Pesquisar"
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <FilterButton
            text="Nome"
            name="name"
            handleOrder={event => this.props.handleOrder(event, 'name')}
          />
          <FilterButton
            text="País"
            name="country"
            handleOrder={event => this.props.handleOrder(event, 'country')}
          />
          <FilterButton
            text="Empresa"
            name="company"
            handleOrder={event => this.props.handleOrder(event, 'company')}
          />
          <FilterButton
            text="Departamento"
            name="department"
            handleOrder={event => this.props.handleOrder(event, 'department')}
          />
          <FilterButton
            text="Data de Admissão"
            name="admissionDate"
            handleOrder={event =>
              this.props.handleOrder(event, 'admissionDate')
            }
          />
        </section>
      </div>
    );
  }
}

export default Filters;
