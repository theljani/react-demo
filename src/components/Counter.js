


import React from 'react';
import { connect } from 'react-redux';

import Input from './InputField';
import Button from './Button';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      errors: []
    };

    this.onChange = this.onChange.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onCounterBlur = this.onCounterBlur.bind(this);
  }

  onChange = (event) => {
    event.persist();
    this.setState(prevState => ({
      [event.target.name]: event.target.value
    }));
  }

  onIncrement = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      counter: parseInt(prevState.counter) + 1
    }));
  }

  onDecrement = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      counter: parseInt(prevState.counter) - 1
    }));
  }

  onCounterBlur = (event) => {
    event.persist();
    if(!event.target.value) {
      debugger
      this.setState(prevState =>({
        errors: ['Counter value is mandatory']
      }));
    }
  }


  render() {
    return (
      <div className="container">
        <div className="form-group">
          <div className="col-md-12">
            <div className='row'>
              <div className="offset-md-2 col-md-8">
                <Input
                  name="counter"
                  label="Counter"
                  type="text"
                  value={this.state.counter}
                  onChange={this.onChange}
                  onFocus ={() => {}}
                  onBlur={this.onCounterBlur}
                  errors={this.state.errors} />
                <br />
                <p>Current counter is: {this.state.counter}</p>
              </div>
              <div className="offset-md-2 col-md-8">
                <Button label="Increment" btnClasses="btn-primary" onClick={this.onIncrement} />
                {' '}
                <Button label="Decrement" btnClasses="btn-warning" onClick={this.onDecrement} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Counter;