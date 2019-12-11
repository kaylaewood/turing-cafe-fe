import React, { Component } from 'react';
import './App.css';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import Form from '../Form/Form';
import { getReservations, postReservation } from '../apiCalls/apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
    .then(data => this.updateState(data))
  }

  updateState = (data) => {
    this.setState({
      reservations: data
    })
  }

  submitReservation = (name, date, time, number) => {
    postReservation(name, date, time, number)
    .then(getReservations()
      .then(data => this.updateState(data))
    )
  }

  cancelReservation = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => this.updateState(data))
  }

  sortReservations = (event) => {
    let numifyDate = (string) => {
      let stringArray = string.split('/');
      if (stringArray[1].length < 2) {
        return `${stringArray[0]}0${stringArray[1]}`
      }
      return parseInt(stringArray.join(''))
    }

    event.preventDefault();
    let sortedReservations = this.state.reservations.map(reservation => {
      return {
        id: reservation.id,
        name: reservation.name,
        date: reservation.date,
        time: reservation.time,
        number: reservation.number,
        dateNum: numifyDate(reservation.date)
      }
    })
    .sort((a, b) => {
      return a.dateNum - b.dateNum
    })
    .map(reservation => {
      return {
        id: reservation.id,
        name: reservation.name,
        date: reservation.date,
        time: reservation.time,
        number: reservation.number
      }
    })
    this.updateState(sortedReservations)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form
            submitReservation={this.submitReservation}
            sortReservations={this.sortReservations}
          />
        </div>
        <div className='resy-container'>
          <ReservationContainer
            reservations={this.state.reservations}
            cancelReservation={this.cancelReservation}
          />
        </div>
      </div>
    )
  }
}

export default App;
