Chart.defaults.global.legend.display = false;

//=================================
//  Weekly - Line Chart
//=================================

var chartWeekly = document.getElementById('chart-weekly').getContext('2d');
var chart = new Chart(chartWeekly, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        datasets: [{
            label: "Weekly",
            borderWidth: 2,
            data: [700, 1250, 1000, 800, 600, 1100, 1600]
        }]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
        responsive: true,
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
                    suggestedMin: 500,
                    suggestedMax: 2000,
                    fontColor: '#888',
                    fontFamily: '"Cutive Mono", monospace',
                    fontSize: 14
                },
                gridLines: {
                    drawTicks: false,
                    // offsetGridLines: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: '#888',
                    fontFamily: '"Cutive Mono", monospace',
                    fontSize: 14
                },
                gridLines: {
                    drawTicks: false,
                    // offsetGridLines: true
                }
            }]
        }
    }
});


//=================================
//  Daily - Bar Graph
//=================================

var chartDaily = document.getElementById('chart-daily').getContext('2d');
var chart = new Chart(chartDaily, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: "Daily",
            borderWidth: 2,
            data: [700, 1250, 1000, 800, 600, 1100, 1600]
        }]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
        responsive: true,
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
                    suggestedMin: 500,
                    suggestedMax: 2000,
                    fontColor: '#888',
                    fontFamily: '"Cutive Mono", monospace',
                    fontSize: 14
                },
                gridLines: {
                    drawTicks: false,
                    // offsetGridLines: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: '#888',
                    fontFamily: '"Cutive Mono", monospace',
                    fontSize: 14
                },
                gridLines: {
                    drawTicks: false,
                    // offsetGridLines: true
                }
            }]
        }
    }
});

//=================================
//  Users - Pie Chart
//=================================

var chartUsers = document.getElementById('chart-users').getContext('2d');
var chart = new Chart(chartUsers, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: "Daily",
            borderWidth: 2,
            data: [700, 1250, 1000, 800, 600, 1100, 1600]
        }]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
        responsive: true,
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
                    suggestedMin: 500,
                    suggestedMax: 2000,
                    fontColor: '#888',
                    fontFamily: '"Cutive Mono", monospace',
                    fontSize: 14
                },
                gridLines: {
                    drawTicks: false,
                    // offsetGridLines: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: '#888',
                    fontFamily: '"Cutive Mono", monospace',
                    fontSize: 14
                },
                gridLines: {
                    drawTicks: false,
                    // offsetGridLines: true
                }
            }]
        }
    }
});