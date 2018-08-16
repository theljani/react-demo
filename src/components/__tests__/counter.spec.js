jest.unmock('../Counter');
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

// Components
import Counter from '../Counter';



describe('The counter compponent', () => {

  it('Should render properly', () => {
    
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should Initialise state properly', () => {
    const wrapper = shallow(<Counter />);

    expect(wrapper.state().counter).toEqual(0);
  });

  it('Should increment by 1 when invoking onIncrement method', () => {
    const wrapper = shallow(<Counter />);
    const event = {
      preventDefault: () => {}
    };
    wrapper.instance().onIncrement(event);
    expect(wrapper.state().counter).toBe(1);
  })

  it('Should increment by 1 when invoking onDecrement method', () => {
    const wrapper = shallow(<Counter />);
    const event = {
      preventDefault: () => {}
    };
    wrapper.instance().onIncrement(event);
    wrapper.instance().onIncrement(event);
    wrapper.instance().onDecrement(event);
    expect(wrapper.state().counter).toBe(1);
  })

  it('Should contains an InputField component as a child', () => {
    const wrapper = mount(<Counter />);
    console.log(JSON.stringify(wrapper));
  });
});

