import ExpenseDate from "./ExpenseDate.js";
import Card from './../UI/Card.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import "./ExpenseItem.css";

function ExpenseItem(props) {


  return (
    <Card className="expense-item">
      <div className="expense-date-title">
        {/* Expense Date item that display a calendar-like item */}
        <ExpenseDate date={props.expense.date} />
        <h2>{props.expense.title}</h2>
      </div>
      <div className="price-xmark">
        <div className="expense-price">$ {props.expense.amount.toFixed(2)}</div>
        <FontAwesomeIcon icon={faTrash} color="black"></FontAwesomeIcon>
      </div>
    </Card>
  );
}

export default ExpenseItem;
