import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByNumericValues } from '../reducers/filters';


class Dropfilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };

    this.colChange = this.colChange.bind(this);
    this.compChange = this.compChange.bind(this);
    this.vChange = this.vChange.bind(this);
   // this.handleSubmit = this.handleSubmit.bind(this);
  }

  colChange(event) {
    this.setState({ column: event.target.value });
  }

  compChange(event) {
    this.setState({ comparison: event.target.value });
  }

  vChange(event) {
    this.setState({ value: event.target.value });
  }

  columnOptions() {
    const { numericValuesFilter } = this.props;
    const selectedFilterColumns = numericValuesFilter.map((filter) => filter.column);
    let columns = [
      'coluna',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    columns = columns.filter((column) => !selectedFilterColumns.includes(column));
    return columns.map((column) => <option value={column} key={column}>{column}</option>);
  }

  render() {
    const tsc = this.state.comparison;
    return (
      <form>
        <label htmlFor="column"> Selecione a coluna:
          <select data-testid="column-filter" value={this.state.column} onChange={this.colChange}>
            {this.columnOptions()}
          </select>
        </label>
        <label htmlFor="comparison"> Selecione a comparação:
          <select data-testid="comparison-filter" value={tsc} onChange={this.compChange}>
            <option>selecione:</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input type="number" data-testid="value-filter" onChange={this.vChange} />
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => { this.props.handleSubmit(this.state); }}
        >Filtrar</button></form>
    );
  }
}

const mapStateToProps = (state) => ({
  numericValuesFilter: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (values) => dispatch(filterByNumericValues(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropfilters);

Dropfilters.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  numericValuesFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
};
