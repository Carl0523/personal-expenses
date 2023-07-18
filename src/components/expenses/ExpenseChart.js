import Chart from "../expense_chart/Chart";

function ExpenseChart(props) {
  const months = [
    { month: "Jan", amount: 0 },
    { month: "Feb", amount: 0 },
    { month: "Mar", amount: 0 },
    { month: "Apr", amount: 0 },
    { month: "May", amount: 0 },
    { month: "Jun", amount: 0 },
    { month: "Jul", amount: 0 },
    { month: "Aug", amount: 0 },
    { month: "Sep", amount: 0 },
    { month: "Oct", amount: 0 },
    { month: "Nov", amount: 0 },
    { month: "Dec", amount: 0 },
  ];

  for (const expense of props.expenses) {
    const monthIndex = expense.date.getMonth();
    months[monthIndex].amount += expense.amount;
  }

  return <Chart dataPoints={months} />;
}

export default ExpenseChart;
