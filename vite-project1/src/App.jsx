import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { itemName: "coffee", price: 200, location: "Delhi" },
    { itemName: "shirt", price: 500, location: "Kolkata" },
    { itemName: "Jeans", price: 1000, location: "Chennai" },
  ];

  return (
    <>
      <h1>My expenses here</h1>
      {expenses.map((e) => (
        <ExpenseItem
          itemName={e.itemName}
          price={e.price}
          location={e.location}
        />
      ))}
    </>
  );
}

export default App;
