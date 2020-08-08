import React, {useState} from 'react';

function Filter(props) {

  return (
    <div>
      <label htmlFor="article-filter">Choose</label>
      <select id="article-filter" className="filter" value={props.source} onChange={props.onFilterChange}>
        <option value="All">Show all</option>
      { props.sourceList.map((val, idx) => 
        <option key={`opt${idx}`} value={val.source.name}>{val.source.name}</option>
      )}
    </select>
    </div>
    
  );
}

export default Filter;