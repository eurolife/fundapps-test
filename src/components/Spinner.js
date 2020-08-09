import React from 'react';

const Spinner = () => {
  return (
    <div className="text-center mt-4">
      <div className="lds-roller mx-auto"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Spinner;