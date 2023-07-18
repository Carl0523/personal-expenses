import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const setOptionHandler = (event) => {
    props.onFilterYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <h2>Expenses by year</h2>
        <select value={props.selected} onChange={setOptionHandler}>
          <option value="View All">View All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
