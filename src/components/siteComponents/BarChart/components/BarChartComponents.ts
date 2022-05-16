export const barChartX = {
  stacked: true,
  grid: {
    display: false,
    color: 'rgba(235, 235, 235, 0.6)', // changes the color of the axis grid lines
  },
  ticks: {
    color: 'rgb(235, 235, 235)', // changes the color of the axis labels
  },
  title: {
    display: false, // title of axis
    text: 'Asset',
    color: 'rgb(235, 235, 235)',
  }
};

export const barChartY = {
  stacked: true,
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
    text: 'Price',
    color: 'rgb(235, 235, 235)',
  }
};

export const barChartPlugin = {
  title: {
    display: false,
  },
  legend: {
    display: false,
  },
};