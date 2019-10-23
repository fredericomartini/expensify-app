import React from 'react';
import moment from 'moment';
import uuidv4 from 'uuid/v4';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment().locale('pt-br'),
    focused: false,
    id: uuidv4(),
    error: undefined,
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmounChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({ focused });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState({ error: 'Please Provide description and amount!' });
    } else {
      this.setState({ error: '' });

      const {
        description, amount, createdAt, note,
      } = this.state;
      this.props.onSubmit({
        description,
        amount: parseFloat(amount),
        createdAt: createdAt.valueOf(),
        note,
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error && <div className="error">{this.state.error}</div>}
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmounChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat="DD/MM/YYYY"
            hideKeyboardShortcutsPanel
          />

          <textarea
            placeholder="Add a note for your expense (optional)"
            cols="35"
            rows="5"
            value={this.state.note}
            onChange={this.onNoteChange}
          />

          <button type="submit">Add Expense</button>
        </form>
      </div>
    );
  }
}
