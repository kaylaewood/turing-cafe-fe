import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let submitReservationMock = jest.fn();
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<Form
      submitReservation={submitReservationMock}
      />)
  })

  it('should match snapshot as expected', () => {

    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when handleChange is invoked', () => {
    const event = {
      target: {
        name: 'name',
        value: 'Robbie'
      }
    }

    wrapper.instance().handleChange(event);
    expect(wrapper.state('name')).toEqual('Robbie');
  })

  it('should invoke submitReservation when button is clicked with correct information', () => {
    wrapper.setState({
      name: 'Eric',
      date: '12/03',
      time: '1:30',
      number: '4'
    })
    wrapper.find('button').simulate('click');
    expect(submitReservationMock).toHaveBeenCalledWith('Eric', '12/03', '1:30', '4');
  })
})
