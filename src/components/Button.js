import React from 'react';
//import './App.css';

function Button(props) {
  return (
    <button data-testid="button" onClick={props.onButtonClick}>{props.text}</button>
  );
}

Button.defaultProps = {
  text: 'Next 5'
}


export default Button;