import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let submitReservationMock = jest.fn();

  it('should match snapshot as expected', () => {
    const wrapper = shallow(<Form
      submitReservation={submitReservationMock}
    />)

    expect(wrapper).toMatchSnapshot();
  })
})
