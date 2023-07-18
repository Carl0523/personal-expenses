import ExpenseItem from "../expense_item/ExpenseItem.js";
import emptyListImage from "../../images/empty_list3.png";
import './ExpenseList.css'

function ExpenseList(props) {
  // The content of expense list section
  let expensesContent = (
    <div className="empty-list">
      <img src={emptyListImage} alt="emptyList" />
      <h2>Empty Expense List</h2>
    </div>
  );

  // If the filter list is not empty render them out
  if (props.list.length > 0) {
    expensesContent = props.list.map((expense) => (
      <ExpenseItem expense={expense} key={expense.id} />
    ));
  }

  return expensesContent;
}

export default ExpenseList;
