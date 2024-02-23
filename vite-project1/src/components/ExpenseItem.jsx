import React from "react";
import "./ExpenseItem.css"

const ExpenseItem = ({ itemName = "item", price = 0, location = "Kolkata" }) => {
  return (
    <div>
      <p className="item">
              {itemName} { location } {price}
      </p>
    </div>
  );
};

export default ExpenseItem;
