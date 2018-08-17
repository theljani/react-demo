jest.unmock('../Counter');
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

// Components
import Counter from '../Counter';
import InputFied from '../InputField';
import Button from '../Button';

describe('The counter compponent', () => {

  it('Should render properly', () => {
    
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should initialise state properly', () => {
    const wrapper = shallow(<Counter />);

    expect(wrapper.state().counter).toEqual(0);
  });

  it('Should increment by 1 when invoking onIncrement method', () => {
    const wrapper = shallow(<Counter />);
    const event = {
      preventDefault: () => {}
    };

    const instance = wrapper.instance();

    instance.onIncrement(event);
    expect(wrapper.state().counter).toBe(1);
  })

  it('Should increment by 1 when invoking onDecrement method', () => {
    const wrapper = shallow(<Counter />);
    const event = {
      preventDefault: () => {}
    };
    const instance = wrapper.instance();

    instance.onIncrement(event);
    instance.onIncrement(event);
    instance.onDecrement(event);
    expect(wrapper.state().counter).toBe(1);
  })

  it('Should contains an InputField component as a child', () => {
    const wrapper = mount(<Counter />); 
    const inputField = wrapper.find(InputFied);

    expect(inputField).toBeDefined();
    expect(inputField).toHaveLength(1);
  });

  it('Should contains an InputField component as a child and progarate props properly', () => {
    const wrapper = mount(<Counter />); 
    const inputField = wrapper.find(InputFied);
    expect(inputField).toBeDefined();
    expect(inputField.props()).toBeDefined();
    expect(inputField.props().value).toEqual(0);
    expect(inputField.props().value).toEqual(0);
    expect(inputField.props().name).toEqual('counter');
    expect(inputField.props().label).toEqual('Counter');
    expect(inputField.props().errors).toBeDefined();
    expect(inputField.props().errors).toHaveLength(0);
    expect(inputField.props().onChange).toBeDefined();
    expect(inputField.props().onBlur).toBeDefined();
    expect(inputField.props().onFocus).toBeDefined();
  });

  it('Should contains 2 Button components as children', () => {
    const counterComponent = mount(<Counter />);

    expect(counterComponent).toBeDefined();
    expect(counterComponent).toMatchSnapshot();

    const buttonComponents = counterComponent.find(<Button />);

    expect(buttonComponents).toBeDefined();

    console.log(buttonComponents.first());
  });
});

