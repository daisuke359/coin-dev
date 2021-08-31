export const historyOptions = {
    lineHeightAnnotation: {
      always: true,
      hover: false,
      lineWeight: 1.5,
    },

    parsing: false,
  
    animation: {
      duration: 2000,
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
          type: "time",
          distribution: "linear",
        },
        y: {
            ticks: {
                beginAtZero: true
            }
        }
    },
  };