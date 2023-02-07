import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-title">{props.title}</div>
            <div className="expense-price">${props.price}</div>
        </div>
    );
};

export default ExpenseItem;