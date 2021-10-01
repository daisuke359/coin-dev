

export const historyOptions = {
  plugins: {
    tooltip: {
      mode: 'x',
      intersect: false,
      titleFont: {
        size: 20
      },
      padding: 15,
      bodyFont: {
        size: 20
      },
      callbacks: {
        label: function(context) {
          var label = "";
          if (context.parsed.y !== null) {
            label = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'CAD' }).format(context.parsed.y);
          }
          return label;
        }
      }
    }
  },
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