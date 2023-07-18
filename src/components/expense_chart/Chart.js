import ChartBar from "./ChartBar";
import './Chart.css'

function Chart(props) {

  let sum = 0;

  for (const dataPoint of props.dataPoints)
  {
    if (dataPoint.amount > 0)
    {
      sum += dataPoint.amount;
    }
  }

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.month}
          amount={dataPoint.amount}
          month={dataPoint.month}
          sum={sum}
        />
      ))}
    </div>
  );
}

export default Chart;
