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

  updateReservations = () => {
    getReservations()
    .then(data => {
      this.setState({
        reservations: data
      })
    })
  }

  componentDidMount() {
    this.updateReservations();
  }

  submitReservation = (name, date, time, number) => {
    postReservation(name, date, time, number)
    .then(this.updateReservations())
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
          />
        </div>
      </div>
    )
  }
}

export default App;
