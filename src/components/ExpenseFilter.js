import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseFilter = (props) => (
  <div>
    Search for:
    {' '}
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
  </div>
);

// Maps estado do store para componente props
const mapStateToProps = ({ filters }) => ({
  filters,
});

export default connect(mapStateToProps)(ExpenseFilter);
