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

  renderCards = () => {
    return this.state.reservations.map(reservation => {
      return <ReservationCard
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        key={reservation.id}
      />
    })
  }

  render() {
    return (
      <section className='reservation-container'>
        {this.renderCards()}
      </section>
    )
  }
}

export default ReservationContainer;
