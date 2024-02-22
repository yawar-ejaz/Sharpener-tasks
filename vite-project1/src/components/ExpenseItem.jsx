import React from "react";

const ExpenseItem = ({ itemName = "item", price = 0 }) => {
  return (
    <div>
      <h2>
        {itemName} {price}
      </h2>
    </div>
  );
};

export default ExpenseItem;
