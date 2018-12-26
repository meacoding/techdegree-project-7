Chart.defaults.global.legend.display = false;

//=================================
//  Line Charts
//=================================

const lineChartOptions = (a, b, c) => {
  let customOptions = {
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
            stepSize: a,
            suggestedMin: b,
            suggestedMax: c,
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
  };
  return customOptions;
};

const insertLineChart = document
  .getElementById("insert-line-chart")
  .getContext("2d");

const chartHourlyLine = document.getElementById("hourly");
const chartDailyLine = document.getElementById("daily");
const chartWeeklyLine = document.getElementById("weekly");
const chartMonthlyLine = document.getElementById("monthly");

let chartHourlyLineMake = () => {
  new Chart(insertLineChart, {
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
          data: [70, 125, 100, 80, 60, 110, 160, 90, 70, 125, 100, 80, 60, 110, 160, 90, 70, 125, 100, 80, 60, 110, 160, 90]
        }
      ]
    },
    options: lineChartOptions(50, 50, 200)
  });
  return chartHourlyLineMake;
};

chartHourlyLineMake();  //loads once initially on DOM load

chartHourlyLine.addEventListener("click", e => {
  const active = document.querySelectorAll(".active")[0];
  chartHourlyLineMake();
  active.classList.remove("active");
  chartHourlyLine.classList.add("active");
});

chartDailyLine.addEventListener("click", e => {
  const active = document.querySelectorAll(".active")[0];
  let chartDailyLineMake = new Chart(insertLineChart, {
    type: "line",
    data: {
      labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      datasets: [
        {
          label: "Daily",
          borderWidth: 2,
          data: [700, 1250, 1000, 800, 600, 1100, 1600]
        }
      ]
    },
    options: lineChartOptions(500, 500, 2000)
  });
  active.classList.remove("active");
  chartDailyLine.classList.add("active");
  return chartDailyLineMake;
});

chartWeeklyLine.addEventListener("click", e => {
  const active = document.querySelectorAll(".active")[0];
  let chartWeeklyLineMake = new Chart(insertLineChart, {
    type: "line",
    data: {
      labels: ["-10 WEEKS", "-9 WEEKS", "-8 WEEKS", "-7 WEEKS", "-6 WEEKS", "-5 WEEKS", "-4 WEEKS", "-3 WEEKS", "-2 WEEKS", "LAST WEEK"],
      datasets: [
        {
          label: "Weekly",
          borderWidth: 2,
          data: [7000, 12500, 10000, 8000, 6000, 11000, 16000, 8000, 17000, 19500]
        }
      ]
    },
    options: lineChartOptions(5000, 5000, 20000)
  });
  active.classList.remove("active");
  chartWeeklyLine.classList.add("active");
  return chartWeeklyLineMake;
});

chartMonthlyLine.addEventListener("click", e => {
  const active = document.querySelectorAll(".active")[0];
  let chartMonthlyLineMake = new Chart(insertLineChart, {
    type: "line",
    data: {
      labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",],
      datasets: [
        {
          label: "Monthly",
          borderWidth: 2,
          data: [70000, 125000, 100000, 80000, 60000, 110000, 160000, 70000, 125000, 100000, 80000, 60000]
        }
      ]
    },
    options: lineChartOptions(50000, 50000, 200000)
  });
  active.classList.remove("active");
  chartMonthlyLine.classList.add("active");
  return chartMonthlyLineMake;
});



//=================================
//  Daily - Bar Graph
//=================================
const chartDaily = document.getElementById("chart-daily").getContext("2d");
let chart = new Chart(chartDaily, {
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
        // console.log(chart.data.datasets[0]); // see what's inside the obj.
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
// console.log(chart3.data.datasets.data);

document.getElementById("js-legend").innerHTML = chart3.generateLegend();
