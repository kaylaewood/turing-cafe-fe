import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      reservation: {
        name: '',
        date: '',
        time: '',
        number: null
      }
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          value={this.state.reservation.name}
          placeholder='Name'
        />
        <input
          type='text'
          name='date'
          value={this.state.reservation.date}
          placeholder='Date (mm/dd)'
        />
        <input
          type='text'
          name='time'
          value={this.state.reservation.time}
          placeholder='Time'
        />
        <input
          type='text'
          name='number'
          value={this.state.reservation.number}
          placeholder='Number of Guests'
        />
        <button className='reserve-button'>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
