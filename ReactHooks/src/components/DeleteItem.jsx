import React from 'react';

const DeleteItem = ({ item, handleDelete }) => {
  const handleDeleteClick = () => {
    handleDelete(item.userId);
  };

  return (
    <div className='delete-item'>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default DeleteItem;
