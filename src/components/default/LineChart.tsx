// Imports
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(...registerables);

// styles
import './styles/Charts.scss';

const LineChart = ({ investmentValues }: any) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true, // probably hide this and add our own title
        text: 'Portfolio Over Time',
        color: 'white',
      },
    },
    scales: {
      x: {
        grid: {
          // display: false,
          color: 'rgba(235, 235, 235, 0.6)' // changes the color of the axis grid lines
        },
        ticks: {
          color: 'rgb(235, 235, 235)' // changes the color of the axis labels
        },
        title: {
          display: true, // title of axis
          text: 'Date',
          color: 'rgb(235, 235, 235)',
        },
      },
      y: {
        grid: {
          display: true,
          color: 'rgb(75, 75, 75)'
        },
        ticks: {
          color: 'rgb(235, 235, 235)',
          // maxRotation: 90, // rotate the ticks
          // minRotation: 90
        },
        title: {
          display: true, 
          text: 'Value',
          color: 'rgb(235, 235, 235)',
        },
      }
    },
  };

  const data = {
    labels: investmentValues.map(data => new Date(data.dateTime).toLocaleDateString()),
    datasets: [
      {
        label: 'Total',
        data: investmentValues.map(data => data.value),      
        borderColor: 'rgb(84, 182, 227)', // line color
        backgroundColor: 'rgb(255, 255, 255)', // line dot color
      },
    ],
  };

  return (
    <div className="chartWrapper">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;