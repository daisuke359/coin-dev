export const historyOptions = {
    animation: {
      duration: 2000,
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
   hover: {
      mode: 'nearest',
      intersect: true
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