import React, { Component } from 'react';
import './ReservationContainer.css';
import ReservationCard from '../ReservationCard/ReservationCard'

class ReservationContainer extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  render() {
    return (
      <section className='reservation-container'>
      <ReservationCard />
      </section>
    )
  }
}

export default ReservationContainer;
