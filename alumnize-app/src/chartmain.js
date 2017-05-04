import Chart from 'chart.js'

const CHART = function() {
  return document.getElementById('lineChart').getContext("2d");
}
const PIE = function() {
  return document.getElementById('pieChart').getContext("2d");
}

let lineChart = function(el) {
  return new Chart(el,{
  type:'line',
  responsive: false,
  data:{
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes this year',
            lineTension:0.1,
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        },
        {
            label: '# of votes last year',
            fill:false,
            lineTension:0.5,
            data: [19, 15, 3, 8, 1, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 2
        }]
    },
  })
}

let pieChart = function(el) {
  new Chart(el, {
    type: 'pie',
    responsive: false,
    data:{
      labels: ['Teaching', 'Front End', 'Full Stack', 'Back End', 'Program Managers'],
      datasets: [
        {
          label:'Points',
          backgroundColor: ['#f1c40f','#e67e22','#16a085','#2980b9'],
          data: [10, 20, 55, 30, 10]
        }
      ]
    }
  });
}
export {Chart, pieChart, lineChart, PIE, CHART};
