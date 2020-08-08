import React from 'react';
import down from '../images/down.png';

function Filter(props) {
  const style = {
  backgroundImage: `url(${down})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px center',
  backgroundSize: '16px 16px',
  }

  return (
    <div className="md:text-right">
      <select className="filter rounded appearance-none bg-transparent pr-8 text-gray-800 text-sm border-2 border-gray-600 p-1" defaultValue="" onChange={props.onFilterChange} style={style}>
        <option disabled value="">Filter by Source</option>
        <option value="All">Show all</option>
      { props.sourceList.map((val, idx) => 
        <option key={`opt${idx}`} value={val.source.name}>{val.source.name}</option>
      )}
    </select>
    </div>
    
  );
}

export default Filter;