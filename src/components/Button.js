import React from 'react';
import PropTypes from 'prop-types';

const Button = ({label, btnClasses, onClick}) => {
  return(
    <button className={`btn ${btnClasses}`} onClick={onClick}>{label}</button>
  )
};

Button.proptypes = {
  label: PropTypes.string.isRequired,
  btnClasses: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;