import React, { Component } from 'react';
import './ReservationContainer.css';
import ReservationCard from '../ReservationCard/ReservationCard'

const ReservationContainer = () => {
  return (
    <section className='reservation-container'>
      <h2>CONTAINER</h2>
      <ReservationCard />
    </section>
  )
}

export default ReservationContainer;
