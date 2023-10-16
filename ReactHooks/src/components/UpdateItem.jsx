import React, { useState } from 'react';

const UpdateItem = ({ item, handleUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(item.item);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedItem(item.item);
  };

  const handleUpdateClick = () => {
    handleUpdate(item.userId, updatedItem);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUpdatedItem(e.target.value);
  };

  return (
    <div className='update-item'>
      {isEditing ? (
        <div>
          <input
            type='text'
            value={updatedItem}
            onChange={handleChange}
          />
          <button onClick={handleUpdateClick}>Update</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <span>{item.item}</span>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default UpdateItem;
