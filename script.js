
// const chartColors = {
//     red: 'rgb(255, 99, 132)',
//     orange: 'rgb(255, 159, 64)',
//     yellow: 'rgb(255, 205, 86)',
//     green: 'rgb(75, 192, 192)',
//     blue: 'rgb(54, 162, 235)',
//     purple: 'rgb(153, 102, 255)',
//     grey: 'rgb(201, 203, 207)'
//   };
  
//   var index = 0;
  
//   setInterval(myTimer, 1000);
//   setInterval(updateChart, 1000);
  
//   function myTimer() {
//     var d = new Date();
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
//   }
  
//   function updateChart() {


//     let n = Math.floor(Math.random() * 100);
//     let n2 = Math.floor(Math.random() * 50);


//     index++;
//     if (index > 20) {
//       lineChart.data.labels.shift();
//       lineChart.data.datasets[0].data.shift();
//       lineChart.data.datasets[1].data.shift();
//     }
//     lineChart.data.labels.push(index);
//     lineChart.data.datasets[0].data.push(n);
//     lineChart.data.datasets[1].data.push(n2);
//     lineChart.update();
//   }
  
//   const CHART = document.getElementById('lineChart');
//   var lineChart = new Chart(CHART, {
//     type: 'line',
//     data: {
//       labels: [],
//       datasets: [{
//         label: "Humidity",
//         fill: false,
//         lineTension: 0.2, // Đặt giá trị lineTension thành 0.2 để tạo đường cong
//         backgroundColor: "rgba(75,192,192,0.4)",
//         borderColor: "rgba(75,192,192,1)",
//         borderCapStyle: 'butt',
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJointStyle: 'miter',
//         data: []
//       },
//       {
//         label: "Temperature",
//         fill: false,
//         lineTension: 0.2, // Đặt giá trị lineTension thành 0.2 để tạo đường cong
//         backgroundColor: "rgba(255, 206, 86,0.4)",
//         borderColor: chartColors.orange,
//         borderCapStyle: 'butt',
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJointStyle: 'miter',
//         data: []
//       }]
//     },
//   });
  
//   function addData(chart, label, data) {
//     chart.data.labels.push(label);
//     chart.data.datasets.forEach((dataset) => {
//       dataset.data.push(data);
//     });
//     chart.update();
//   }
  
//   function removeData(chart) {
//     chart.data.labels.pop();
//     chart.data.datasets.forEach((dataset) => {
//       dataset.data.pop();
//     });
//     chart.update();
//   }
  
  