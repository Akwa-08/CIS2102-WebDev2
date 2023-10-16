import React from 'react';

const ClearList = ({ handleClear }) => {
  return (
    <div className='clear-button'>
      <button onClick={handleClear}>Clear List</button>
    </div>
  );
};

export default ClearList;
