var lineLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

var lineData = {
    labels: lineLabels,
    datasets: [{
        label: '初めてのグラフ用データセット',
        borderColor: 'rgb(255, 100, 130)',
        backgroundColor: 'rgb(150, 50, 60)',
        data: [0, 10, 15, 3, 20, 60, 10],
    }]
};

var lineConfig = {
    type: 'line',
    lineData,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig,
);


// //棒グラフ
// const barLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
// const barData = {
//     labels: barLabels,
//     datasets: [65,59,80,81]
//     data: data,
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     },
//   };