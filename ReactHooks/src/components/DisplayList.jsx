import React from 'react';
import UpdateItem from './UpdateItem';
import DeleteItem from './DeleteItem';

const DisplayList = ({ items, handleUpdate, handleDelete }) => {
  return (
    <div className='item-list'>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.userId}>
            <UpdateItem item={item} handleUpdate={handleUpdate} />
            <DeleteItem item={item} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayList;
