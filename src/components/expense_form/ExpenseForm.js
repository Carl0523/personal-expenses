import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // Listen to the changes of user inputs
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const titleChangeHandler = (event) => {
    setExpenseTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setExpenseAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setExpenseDate(event.target.value);
  };

  const submitHandler = (event) => {
    // 1. Prevent the default browser setting of submit => send request to the server and reload
    event.preventDefault();

    // Close the form
    setIsAddingExpense(false);

    // 2. Store the user inputs into object
    const enteredData = {
      title: expenseTitle,
      date: new Date(expenseDate),
      amount: parseInt(expenseAmount),
      id: Math.floor(Math.random() * 10).toString(),
    };

    //Add the new expense to Expense list
    props.onAddExpense(enteredData);

    //Clear the input
    setExpenseTitle("");
    setExpenseAmount("");
    setExpenseDate("");
  };

  const addHandler = () => {
    setIsAddingExpense(true);
  };

  const cancelHandler = () => {
    setIsAddingExpense(false);
  };

  //The content to display on the form section
  let formContent = (
    <Card className="expense-form">
      <button id="add-btn" onClick={addHandler}>
        Add Expense
      </button>
    </Card>
  );

  if (isAddingExpense) {
    formContent = (
      <Card className="expense-form">
        <h2 className="expense-form__title">New Expense</h2>
        <form onSubmit={submitHandler}>
          {/*  1. The input sections */}
          <div className="expense-form__inputs">
            {/* Input section for Expense Title */}
            <div className="expense-form__input">
              <label>Title</label>
              <input
                type="text"
                placeholder="Walmart"
                value={expenseTitle}
                onChange={titleChangeHandler}
                required
              />
            </div>

            {/* Input section for Expense amount */}
            <div className="expense-form__input">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                placeholder="20.00"
                value={expenseAmount}
                onChange={amountChangeHandler}
                required
              />
            </div>

            {/* Input section for Expense date */}
            <div className="expense-form__input">
              <label>Date</label>
              <input
                type="date"
                value={expenseDate}
                min="2019-07-15"
                max="2023-07-15"
                onChange={dateChangeHandler}
                required
              />
            </div>
          </div>

          {/* 2. The submit button */}
          <div className="expense-form__button">
            <button id="cancel-btn" onClick={cancelHandler}>
              Cancel
            </button>
            <button type="submit" id="submit-btn">
              Add Expense
            </button>
          </div>
        </form>
      </Card>
    );
  }

  return formContent;
}

export default ExpenseForm;
