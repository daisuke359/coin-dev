export const historyOptions = {
  interaction: {
    intersect: false
  },
  tooltips: {
    mode: 'x',
    intersect: false
  },
  // hover: {
  //   mode: 'index',
  //   intersect: false
  // },
  animation: {
    duration: 2000,
  },
  maintainAspectRatio: true,
  responsive: true,
  scales: {
    x: {
        type: "time",
        distribution: "linear",
        grid: {
          display: false,
        }
      },
      y: {
          ticks: {
              beginAtZero: true
          },
          grid: {
            display: false,
          }
      }
  },
};