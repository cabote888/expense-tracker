import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const changeTitleHandler = () => {
    setTitle("You are fags!");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-title">{title}</div>
      <div className="expense-price">${props.price}</div>
      <button onClick={changeTitleHandler}>Click Me!</button>
    </div>
  );
};

export default ExpenseItem;
