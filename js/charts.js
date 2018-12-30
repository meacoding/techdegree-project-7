Chart.defaults.global.legend.display = false;

//=================================
//  Line Charts
//=================================

let insertLineChart = document
  .getElementById("insert-line-chart")
  .getContext("2d");

let lineChart = new Chart(insertLineChart, {
  type: "line",
  data: {
    labels: [
      "12am",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12pm",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11pm"
    ],
    datasets: [
      {
        label: "Hourly",
        borderWidth: 2,
        backgroundColor: "#E2E3F6",
        pointBackgroundColor: "rgb(251, 251, 251)",
        data: [
          70,
          125,
          100,
          80,
          60,
          110,
          160,
          90,
          70,
          125,
          100,
          80,
          60,
          110,
          160,
          90,
          70,
          125,
          100,
          80,
          60,
          110,
          160,
          90
        ]
      }
    ]
  },
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
        radius: 6,
        borderColor: "rgb(116, 120, 191)"
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
          }
        }
      ]
    }
  }
});

const chartHourlyLine = document.getElementById("hourly");
const chartDailyLine = document.getElementById("daily");
const chartWeeklyLine = document.getElementById("weekly");
const chartMonthlyLine = document.getElementById("monthly");

function removeData() {
  lineChart.data.labels;
  lineChart.data.datasets;
  lineChart.update();
}
function addData(label, data) {
  lineChart.data.labels = label;
  lineChart.data.datasets = [data];
  lineChart.update();
}

function updateYAxesSteps(a, b, c) {
  lineChart.options.scales.yAxes[0].ticks.stepSize = a;
  lineChart.options.scales.yAxes[0].ticks.suggestedMax = b;
  lineChart.options.scales.yAxes[0].ticks.suggestedMin = c;
  lineChart.update();
}

chartHourlyLine.addEventListener("click", e => {
  const active = document.querySelectorAll(".active")[0];
  const labels = [
    "12am",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12pm",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11pm"
  ];
  const data = {
    label: "Hourly",
    borderWidth: 2,
    data: [
      70,
      125,
      100,
      80,
      60,
      110,
      160,
      90,
      70,
      125,
      100,
      80,
      60,
      110,
      160,
      90,
      70,
      125,
      100,
      80,
      60,
      110,
      160,
      90
    ]
  };
  active.classList.remove("active");
  chartHourlyLine.classList.add("active");
  removeData();
  addData(labels, data);
  updateYAxesSteps(50, 50, 200);
});

chartDailyLine.addEventListener("click", e => {
  const active = document.querySelectorAll(".active")[0];
  const labels = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const data = {
    label: "Daily",
    borderWidth: 2,
    data: [700, 1250, 1000, 800, 600, 1100, 1600]
  };
  active.classList.remove("active");
  chartDailyLine.classList.add("active");
  removeData();
  addData(labels, data);
  updateYAxesSteps(500, 500, 2000);
});

chartWeeklyLine.addEventListener("click", e => {
  const active = document.querySelectorAll(".active")[0];
  const labels = [
    "-10 WEEKS",
    "-9 WEEKS",
    "-8 WEEKS",
    "-7 WEEKS",
    "-6 WEEKS",
    "-5 WEEKS",
    "-4 WEEKS",
    "-3 WEEKS",
    "-2 WEEKS",
    "LAST WEEK"
  ];
  const data = {
    label: "Weekly",
    borderWidth: 2,
    data: [7000, 12500, 10000, 8000, 6000, 11000, 16000, 8000, 17000, 19500]
  };
  active.classList.remove("active");
  chartWeeklyLine.classList.add("active");
  removeData();
  addData(labels, data);
  updateYAxesSteps(5000, 5000, 20000);
});

chartMonthlyLine.addEventListener("click", e => {
  const active = document.querySelectorAll(".active")[0];
  const labels = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];
  const data = {
    label: "Monthly",
    borderWidth: 2,
    data: [
      70000,
      125000,
      100000,
      80000,
      60000,
      110000,
      160000,
      70000,
      125000,
      100000,
      80000,
      60000
    ]
  };
  active.classList.remove("active");
  chartMonthlyLine.classList.add("active");
  removeData();
  addData(labels, data);
  updateYAxesSteps(50000, 50000, 200000);
});

//=================================
//  Bar Graph - Daily
//=================================
const chartDaily = document.getElementById("chart-daily").getContext("2d");

let chart = new Chart(chartDaily, {
  type: "bar",
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
Chart.defaults.global.elements.point;

//=================================
//  Doughnut Chart - Users
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

document.getElementById("js-legend").innerHTML = chart3.generateLegend();
