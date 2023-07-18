import React, { useState } from "react";
import ExpenseList from './ExpenseList'
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";

function Expenses(props) {

  //Control the state of filter year select box, default to [View All]
  const [chooseYear, setChooseYear] = useState("View All");

  /**
   * Pass in function for Expense Filter component
   * @param selectYear user selected year
   */
  const filterYearHandler = (selectYear) => {

    // Assign new year value to chooseYear
    setChooseYear(selectYear);
  };

  //This variable going to stores the filtered expenses list
  let filteredExpenses = props.expenses;

  //Filter out the expenses based on the year
  if (chooseYear !== "View All") {
    filteredExpenses = props.expenses.filter(
      (expense) => expense.date.getFullYear().toString() === chooseYear
    );
  }


  return (
    <Card className="expenses">
      <ExpensesFilter onFilterYear={filterYearHandler} selected={chooseYear} />
      <ExpenseChart expenses={filteredExpenses}/>
      <h2 id="heading">Summary</h2>
      <ExpenseList list={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
