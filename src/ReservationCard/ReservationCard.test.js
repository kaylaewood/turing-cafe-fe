import React from 'react';
import { shallow } from 'enzyme';
import ReservationCard from './ReservationCard';

describe('ReservationCard', () => {
  let wrapper;
  let cancelReservationMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<ReservationCard
      id='1'
      name='Kayla'
      date='12/03'
      time='2:45'
      number='3'
      cancelReservation={cancelReservationMock}
    />)
  })

  it('should match snapshot as expected', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should invoke cancelReservation when button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(cancelReservationMock).toHaveBeenCalled();
  })
})
