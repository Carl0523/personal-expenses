import Card from "./../UI/Card.js";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });

  return (
    <Card className="expense-date">
      <div id="expense-date-year">{year}</div>
      <div id="expense-date-month">{month}</div>
      <div id="expense-date-day">{day}</div>
    </Card>
  );
}

export default ExpenseDate;
