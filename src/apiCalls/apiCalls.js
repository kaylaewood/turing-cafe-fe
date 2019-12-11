export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => response.json())
}

export const postReservation = (name, date, time, number) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      date: date,
      time: time,
      number: parseInt(number)
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const deleteReservation = (id) => {
  return (
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
  )
}
