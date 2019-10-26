import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, setStartDate, setEndDate } from '../actions/filters';

class ExpenseFilter extends React.Component {
  state = {
    focusedInput: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (focusedInput) => this.setState({ focusedInput });

  render() {
    return (
      <div>
        Search for:
        {' '}
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        Dates Filter:
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          displayFormat="DD/MM/YYYY"
          isOutsideRange={() => false}
          hideKeyboardShortcutsPanel
          showClearDates
          numberOfMonths={1}
        />
      </div>
    );
  }
}

// Maps estado do store para componente props
const mapStateToProps = ({ filters }) => ({
  filters,
});

export default connect(mapStateToProps)(ExpenseFilter);
