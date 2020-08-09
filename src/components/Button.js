import React from 'react';

function Button(props) {
  return (
    <button className="border-2 border-pinkish px-4 py-1 text-pinkish font-bold hover:bg-pinkish hover:text-white transition-colors duration-300" onClick={props.onButtonClick}>{props.text}</button>
  );
}

Button.defaultProps = {
  text: 'Show More'
}


export default Button;