import React from 'react';
import AddForm from '../containers/AddForm';

const AddBoard = ({active, handleAddMovie}) => {
  return (  
    <div className="addBoard">
      <AddForm 
        active={active} 
        handleAddMovie={handleAddMovie}
      />
    </div>
  );
}
 
export default AddBoard;