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
    this.updateReservations();
  }

  updateReservations = () => {
    getReservations()
    .then(data => {
      this.setState({
        reservations: data
      })
    })
  }

  submitReservation = (name, date, time, number) => {
    postReservation(name, date, time, number)
    .then(this.updateReservations())
  }

  cancelReservation = (id) => {
    console.log(id);
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => this.setState({
      reservations: data
    }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form
            submitReservation={this.submitReservation}
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
