import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)

  })

  it('should match snapshot as expected', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when updateState is called', () => {
    let reservations = [{name:'Trisha', date:'3/12'}, {name:'Heather', date:'11/30'}]
    wrapper.instance().updateState(reservations)
    expect(wrapper.state('reservations')).toEqual(reservations)
  })
})
