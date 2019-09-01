import React from 'react';

const EditExpense = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  console.log(props);
  return (
    <div>
      This is the edit expense for the item:
      {id}
    </div>
  );
};

export default EditExpense;
