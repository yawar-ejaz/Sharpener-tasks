import ExpenseItem from './components/ExpenseItem';

function App() {

  return (
    <>
      <h1>My expenses here</h1>
      <ExpenseItem itemName="coffee" price={200} location="Delhi"/>
      <ExpenseItem itemName="Shirt" price={500} location="Kolkata"/>
      <ExpenseItem itemName="Jeans" price={1000} location="Chennai"/>
    </>
  );
}

export default App;