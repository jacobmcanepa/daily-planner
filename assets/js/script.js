var DateTime = luxon.DateTime;
var dt = DateTime.now();
var currentWeekday = dt.toLocaleString({weekday: 'long'});
var currentMonth = dt.toLocaleString({month: 'long'});
var currentDay = dt.toLocaleString({day: 'numeric'});

$("#currentDay").append(currentWeekday + ", " + currentMonth + " " + currentDay);

setInterval(function() {
  $("#currentDay").empty();
  $("#currentDay").append(currentWeekday + ", " + currentMonth + " " + currentDay);
  console.log("updated date");
}, 60000);