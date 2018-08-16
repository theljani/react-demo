

import React from 'react';
import PropTypes from 'prop-types';

const Input = ({label, name, type, value, onChange, onBlur, onFocus, errors}) => {
    return(
      <div className={"form-group " + (errors.length > 0 ? 'has-danger': '')}>
        <label className='form-control-label' htmlFor={name}>{label}</label>
        <input name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} 
        className={"form-control " + (errors.length > 0 ? 'form-control-danger': '')}/>
        {errors.length > 0 && <label>{errors[0]}</label>}
      </div>
    );
}

Input.proptypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  errors: PropTypes.array
};

export default Input;