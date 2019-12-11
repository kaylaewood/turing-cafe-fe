import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ id, name, date, time, number }) => {
  return(
    <div className='card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests: {number}</p>
    </div>
  )
}

export default ReservationCard;
