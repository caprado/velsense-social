// CommitChart.js
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Likes',
          backgroundColor: '#007bffbd',
          data: [5, 14, 33, 22, 32, 33, 35, 22, 35, 47, 55, 62]
        }
      ]
    })
  }
}
