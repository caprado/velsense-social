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
          label: 'Followers',
          backgroundColor: '#f87979bd',
          data: [5, 20, 12, 39, 44, 40, 39, 62, 48, 56, 41, 32]
        }
      ]
    })
  }
}
