import React from 'react';
import { shallow } from 'enzyme';
import ReservationContainer from './ReservationContainer';

describe('ReservationContainer', () => {
  let reservations = [
    {id: 12, name: 'Trisha', date: '12/09', number: '4'},
    {id: 3, name: 'Heather', date: '12/11', number: '8'}
  ]
  it('should match snapshot as expected', () => {
    const wrapper = shallow(<ReservationContainer
      reservations={reservations}
    />)

    expect(wrapper).toMatchSnapshot();
  })
})
