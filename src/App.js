import React, {useState} from 'react';
import Expenses from "./components/expenses/Expenses.js";
import ExpenseForm from "./components/expense_form/ExpenseForm.js"

function App() {
  const expenseList = [
    {
      id: "e1",
      title: "Carl Yang",
      amount: 100,
      date: new Date(2023, 4, 23),
    },
    {
      id: "e2",
      title: "Katy Huang",
      amount: 100,
      date: new Date(2021, 2, 23),
    },
    {
      id: "e3",
      title: "Test",
      amount: 50,
      date: new Date(2021, 4, 23),
    },
  ];

  const [expenses, setExpenses] = useState(expenseList);

  const addExpenseHandler = newExpense =>
  {
    setExpenses((prevExpenses) => 
    (
      [newExpense, ...prevExpenses]
    ))
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
