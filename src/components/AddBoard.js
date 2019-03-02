import React from 'react';
import AddForm from '../containers/AddForm';

const AddBoard = ({active}) => {
  return (  
    <div className="addBoard">
      <AddForm active={active} />
    </div>
  );
}
 
export default AddBoard;