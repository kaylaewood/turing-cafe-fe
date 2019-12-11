import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          name='date'
          value={this.state.date}
          placeholder='Date (mm/dd)'
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          name='time'
          value={this.state.time}
          placeholder='Time'
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          name='number'
          value={this.state.number}
          placeholder='Number of Guests'
          onChange={event => this.handleChange(event)}
        />
        <button className='reserve-button' onClick={() => this.props.submitReservation(this.state.name, this.state.date, this.state.time, this.state.number)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
