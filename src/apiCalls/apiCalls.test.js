import React from 'react';
import ReactDOM from 'react-dom';
import { getReservations } from './apiCalls';

describe('App', () => {
  let mockResponse = [{
      name: 'Trisha',
      date: '12/6',
      time: '3:45',
      number: '2'
    }, {
      name: 'Heather',
      date: '12/4',
      time: '3:00',
      number: '1'
    }
  ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockResponse)
        }
      })
    })
  })

  it('should be provided with the correct URL', () => {
    getReservations();
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations')
  })

  it('should return an array of reservations', () => {
    expect(getReservations()).resolves.toEqual(mockResponse)
  })

})
