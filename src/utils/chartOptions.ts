export const options = () => ({
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 1000,
    easing: 'easeOutQuart',
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(200, 200, 200, 0.3)',
      },
      ticks: {
        stepSize: 5,
        color: '#64748b',
      },
    },
  },
  interaction: {
    mode: 'nearest',
    intersect: false,
  },
})
