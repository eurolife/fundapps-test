import React, {useState} from 'react';

function Filter(props) {

  return (
    <div>
      <select className="filter" value="" onChange={props.onFilterChange}>
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