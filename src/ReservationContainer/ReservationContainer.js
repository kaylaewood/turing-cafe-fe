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

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => {
      this.setState({
        reservations: data
      })
    })
  }

  <ReservationCard />

  render() {
    return (
      <section className='reservation-container'>
      </section>
    )
  }
}

export default ReservationContainer;
