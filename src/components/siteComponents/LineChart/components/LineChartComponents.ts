export const lineChartX = {
  grid: {
    // display: false,
    color: 'rgba(235, 235, 235, 0.6)', // changes the color of the axis grid lines
  },
  ticks: {
    color: 'rgb(235, 235, 235)', // changes the color of the axis labels
  },
  title: {
    display: true, // title of axis
    text: 'Date',
    color: 'rgb(235, 235, 235)',
  },
};

export const lineChartY = {
  grid: {
    display: true,
    color: 'rgb(75, 75, 75)',
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
};