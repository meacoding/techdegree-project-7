var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        datasets: [{
            label: "Weekly",
            borderWidth: 2,
            data: [700, 1250, 1000, 800, 600, 1100, 1600],
        }]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 30,
                right: 30,
                top: 30,
                bottom: 30,
                borderColor: 'rgba(167, 169, 228, 0.4)',
            }
        },
        elements: {
            line: {
                tension: 0,
                borderColor: 'rgb(167, 169, 228)',
            },
            point: {
                backgroundColor: 'rgb(255, 255, 255)',
                radius: 6,
                borderColor: 'rgb(116, 120, 191)',
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 500,
                    suggestedMax: 2000,
                    fontColor: 'rgb(162, 162, 162)'
                    
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'rgb(162, 162, 162)'
                }
            }],
            scaleLabel: {
                fontSize: 10
            }
        }
    }
});