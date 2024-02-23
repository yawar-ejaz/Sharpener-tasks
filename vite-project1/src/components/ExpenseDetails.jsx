import React from "react";
import "./ExpenseDetails.css";

const ExpenseDetails = ({
  itemName = "item",
  price = 0,
  location = "Kolkata",
}) => {
  return (
    <>
      {itemName} {location} {price}
    </>
  );
};

export default ExpenseDetails;
