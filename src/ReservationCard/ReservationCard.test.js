import React from 'react';
import { shallow } from 'enzyme';
import ReservationCard from './ReservationCard';

describe('ReservationCard', () => {
  it('should match snapshot as expected', () => {
    const wrapper = shallow(<ReservationCard
      id='1'
      name='Kayla'
      date='12/03'
      time='2:45'
      number='3'
    />)

    expect(wrapper).toMatchSnapshot();
  })
})
