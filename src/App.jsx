import "./App.css"
import Expenses from "./components/Expenses";

const expenseData = [{
  title: "Interent Bill",
  price: "95.90",
  date: new Date(2021, 1, 1),
  id: 1,
},
{
  title: "Book",
  price: "7.90",
  date: new Date(2021, 12, 9),
  id: 2,
}, {
  title: "Gamepass",
  price: "15.99",
  date: new Date(2021, 22, 7),
  id: 3,
}, 
{
  title: "Prada Jacket",
  price: "300.90",
  date: new Date(2022, 3, 9),
  id: 4,
}]

function App() {

  return (
    <div className="App">
      <h1 className="app-title">Expense Tracker</h1>
      <Expenses items={expenseData} />
    </div>
  )
}

export default App
