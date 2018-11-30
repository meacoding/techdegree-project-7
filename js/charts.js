Chart.defaults.global.legend.display = false;

//=================================
//  Weekly - Line Chart
//=================================

var chartWeekly = document.getElementById("chart-weekly").getContext("2d");
var chart = new Chart(chartWeekly, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    datasets: [
      {
        label: "Weekly",
        borderWidth: 2,
        data: [700, 1250, 1000, 800, 600, 1100, 1600]
      }
    ]
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
        borderColor: "rgba(167, 169, 228, 0.4)"
      }
    },
    elements: {
      line: {
        tension: 0,
        borderColor: "rgb(167, 169, 228)"
      },
      point: {
        backgroundColor: "rgb(255, 255, 255)",
        radius: 6,
        borderColor: "rgb(116, 120, 191)"
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 500,
            suggestedMin: 500,
            suggestedMax: 2000,
            fontColor: "#888",
            fontFamily: '"Cutive Mono", monospace',
            fontSize: 14
          },
          gridLines: {
            drawTicks: false
            // offsetGridLines: true
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "#888",
            fontFamily: '"Cutive Mono", monospace',
            fontSize: 14
          },
          gridLines: {
            drawTicks: false
            // offsetGridLines: true
          }
        }
      ]
    }
  }
});

//=================================
//  Daily - Bar Graph
//=================================
var chartDaily = document.getElementById("chart-daily").getContext("2d");
var chart = new Chart(chartDaily, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "Daily",
        borderWidth: 2,
        data: [70, 125, 100, 80, 60, 110, 160],
        backgroundColor: "#7377BF"
      }
    ]
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
        borderColor: "rgba(167, 169, 228, 0.4)",
        barThickness: 30
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 50,
            suggestedMin: 50,
            suggestedMax: 200,
            fontColor: "#888",
            fontFamily: '"Cutive Mono", monospace',
            fontSize: 14
          },
          gridLines: {
            drawTicks: false
            // offsetGridLines: true
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "#888",
            fontFamily: '"Cutive Mono", monospace',
            fontSize: 14
          },
          gridLines: {
            drawTicks: false
            // offsetGridLines: true
          },
          barThickness: 30
        }
      ]
    }
  }
});

//=================================
//  Users - Doughnut Chart
//=================================

var chartUsers = document.getElementById("chart-users").getContext("2d");
var chart3 = new Chart(chartUsers, {
  type: "doughnut",

  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [
      {
        data: [160, 122, 423],
        backgroundColor: ["#81C98F", "#74B1BF", "#7377BF"],
        borderWidth: 0,
        label: ["Phones", "Tablets", "Desktop"]
      }
    ]
  },

  options: {
    legend: {
      display: false,
      position: "right",
      labels: {
        boxWidth: 26
      }
    },
    rotation: -90,
    maintainAspectRatio: false,
    responsive: true,
    layout: {
      padding: {
        left: 30,
        right: 30,
        top: 30,
        bottom: 30,
        borderColor: "rgba(167, 169, 228, 0.4)"
      }
    },
    legendCallback: function(chart) {
      let text = [];
      text.push("<ul>");
      for (let i = 0; i < chart.data.datasets[0].backgroundColor.length; i++) {
        console.log(chart.data.datasets[0]); // see what's inside the obj.
        text.push("<li>");
        text.push(
          '<div style="background-color:' +
            chart.data.datasets[0].backgroundColor[i] +
            '">' +
            "</div><div>" +
            chart.data.datasets[0].label[i] +
            "</div>"
        );
        text.push("</li>");
      }
      text.push("</ul>");
      return text.join("");
    }
  }
});
console.log(chart3.data.datasets.data);

document.getElementById("js-legend").innerHTML = chart3.generateLegend();
