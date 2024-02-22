import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  return (
    <>
          <h1>My expenses here</h1>
          <ExpenseItem itemName='coffee' price={200}/>
          <ExpenseItem itemName='Shirt' price={500}/>
          <ExpenseItem itemName='Jeans' price={1000}/>
    </>
  )
}

export default App;