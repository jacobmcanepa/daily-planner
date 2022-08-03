var DateTime = luxon.DateTime;
var dt = DateTime.now();
var currentWeekday = dt.toLocaleString({weekday: 'long'});
var currentMonth = dt.toLocaleString({month: 'long'});
var currentDay = dt.toLocaleString({day: 'numeric'});
var currentHour = parseInt(dt.toLocaleString(DateTime.TIME_24_SIMPLE));
var events = JSON.parse(localStorage.getItem("events")) || [];

var loadEvents = function() {
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === 9) {
      $("#textarea-9").val(events[i].value);
    }

    else if (events[i].id === 10) {
      $("#textarea-10").val(events[i].value);
    }

    else if (events[i].id === 11) {
      $("#textarea-11").val(events[i].value);
    }

    else if (events[i].id === 12) {
      $("#textarea-12").val(events[i].value);
    }

    else if (events[i].id === 13) {
      $("#textarea-13").val(events[i].value);
    }

    else if (events[i].id === 14) {
      $("#textarea-14").val(events[i].value);
    }

    else if (events[i].id === 15) {
      $("#textarea-15").val(events[i].value);
    }

    else if (events[i].id === 16) {
      $("#textarea-16").val(events[i].value);
    }

    else if (events[i].id === 17) {
      $("#textarea-17").val(events[i].value);
    }
  }
};

loadEvents();

$("#btn-9").on("click", function() {
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === 9) {
      events.splice(i, 1);
    }
  }

  var value = $("#textarea-9").val();

  var anEvent = {
    id: 9,
    value: value
  };

  events.push(anEvent);
  localStorage.setItem("events", JSON.stringify(events));
});

$("#btn-10").on("click", function() {
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === 10) {
      events.splice(i, 1);
    }
  }

  var value = $("#textarea-10").val();

  var anEvent = {
    id: 10,
    value: value
  };

  events.push(anEvent);
  localStorage.setItem("events", JSON.stringify(events));
});

$("#btn-11").on("click", function() {
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === 11) {
      events.splice(i, 1);
    }
  }

  var value = $("#textarea-11").val();

  var anEvent = {
    id: 11,
    value: value
  };

  events.push(anEvent);
  localStorage.setItem("events", JSON.stringify(events));
});

$("#btn-12").on("click", function() {
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === 12) {
      events.splice(i, 1);
    }
  }

  var value = $("#textarea-12").val();

  var anEvent = {
    id: 12,
    value: value
  };

  events.push(anEvent);
  localStorage.setItem("events", JSON.stringify(events));
});

$("#btn-13").on("click", function() {
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === 13) {
      events.splice(i, 1);
    }
  }

  var value = $("#textarea-13").val();

  var anEvent = {
    id: 13,
    value: value
  };

  events.push(anEvent);
  localStorage.setItem("events", JSON.stringify(events));
});

$("#btn-14").on("click", function() {
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === 14) {
      events.splice(i, 1);
    }
  }

  var value = $("#textarea-14").val();

  var anEvent = {
    id: 14,
    value: value
  };

  events.push(anEvent);
  localStorage.setItem("events", JSON.stringify(events));
});

$("#btn-15").on("click", function() {
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === 15) {
      events.splice(i, 1);
    }
  }

  var value = $("#textarea-15").val();

  var anEvent = {
    id: 15,
    value: value
  };

  events.push(anEvent);
  localStorage.setItem("events", JSON.stringify(events));
});

$("#btn-16").on("click", function() {
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === 16) {
      events.splice(i, 1);
    }
  }

  var value = $("#textarea-16").val();

  var anEvent = {
    id: 16,
    value: value
  };

  events.push(anEvent);
  localStorage.setItem("events", JSON.stringify(events));
});

$("#btn-17").on("click", function() {
  for (var i = 0; i < events.length; i++) {
    if (events[i].id === 17) {
      events.splice(i, 1);
    }
  }

  var value = $("#textarea-17").val();

  var anEvent = {
    id: 17,
    value: value
  };

  events.push(anEvent);
  localStorage.setItem("events", JSON.stringify(events));
});


$("#currentDay").append(currentWeekday + ", " + currentMonth + " " + currentDay);

setInterval(function() {
  $("#currentDay").empty();
  $("#currentDay").append(currentWeekday + ", " + currentMonth + " " + currentDay);
  console.log("updated date");
}, 60000);

var timeBlockColor = function() {
  var nine = parseInt($("#nine").text());
  var ten = parseInt($("#ten").text());
  var eleven = parseInt($("#eleven").text());
  var twelve = parseInt($("#twelve").text());
  var one = parseInt($("#one").text());
  var two = parseInt($("#two").text());
  var three = parseInt($("#three").text());
  var four = parseInt($("#four").text());
  var five = parseInt($("#five").text());

  // check if it's 9AM
  if (nine === currentHour) {
    $("#textarea-9").removeClass("future-bg past-bg");
    $("#textarea-9").addClass("current-bg");
  }

  else if (nine > currentHour) {
    $("#textarea-9").removeClass("current-bg past-bg");
    $("#textarea-9").addClass("future-bg");
  }

  else {
    $("#textarea-9").removeClass("current-bg future-bg");
    $("#textarea-9").addClass("past-bg");
  }

  // check if it's 10AM
  if (ten === currentHour) {
    $("#textarea-10").removeClass("future-bg past-bg");
    $("#textarea-10").addClass("current-bg");
  }
  
  else if (ten > currentHour) {
    $("#textarea-10").removeClass("current-bg past-bg");
    $("#textarea-10").addClass("future-bg");
  }
  
  else {
    $("#textarea-10").removeClass("current-bg future-bg");
    $("#textarea-10").addClass("past-bg");
  }

  // check if it's 11AM
  if (eleven === currentHour) {
    $("#textarea-11").removeClass("future-bg past-bg");
    $("#textarea-11").addClass("current-bg");
  }

  else if (eleven > currentHour) {
    $("#textarea-11").removeClass("current-bg past-bg");
    $("#textarea-11").addClass("future-bg");
  }

  else {
    $("#textarea-11").removeClass("current-bg future-bg");
    $("#textarea-11").addClass("past-bg")
  }

  // check if it's 12PM
  if (twelve === currentHour) {
    $("#textarea-12").removeClass("future-bg past-bg");
    $("#textarea-12").addClass("current-bg");
  }

  else if (twelve > currentHour) {
    $("#textarea-12").removeClass("current-bg past-bg");
    $("#textarea-12").addClass("future-bg");
  }

  else {
    $("#textarea-12").removeClass("current-bg future-bg");
    $("#textarea-12").addClass("past-bg")
  }

  // check if it's 1PM
  if ((one + 12) === currentHour) {
    $("#textarea-13").removeClass("future-bg past-bg");
    $("#textarea-13").addClass("current-bg");
  }

  else if ((one + 12) > currentHour) {
    $("#textarea-13").removeClass("current-bg past-bg");
    $("#textarea-13").addClass("future-bg");
  }

  else {
    $("#textarea-13").removeClass("current-bg future-bg");
    $("#textarea-13").addClass("past-bg")
  }

  // check if it's 2PM
  if ((two + 12) === currentHour) {
    $("#textarea-14").removeClass("future-bg past-bg");
    $("#textarea-14").addClass("current-bg");
  }

  else if ((two + 12) > currentHour) {
    $("#textarea-14").removeClass("current-bg past-bg");
    $("#textarea-14").addClass("future-bg");
  }

  else {
    $("#textarea-14").removeClass("current-bg future-bg");
    $("#textarea-14").addClass("past-bg")
  }

  // check if it's 3PM
  if ((three + 12) === currentHour) {
    $("#textarea-15").removeClass("future-bg past-bg");
    $("#textarea-15").addClass("current-bg");
  }

  else if ((three + 12) > currentHour) {
    $("#textarea-15").removeClass("current-bg past-bg");
    $("#textarea-15").addClass("future-bg");
  }

  else {
    $("#textarea-15").removeClass("current-bg future-bg");
    $("#textarea-15").addClass("past-bg")
  }

  // check if it's 4PM
  if ((four + 12) === currentHour) {
    $("#textarea-16").removeClass("future-bg past-bg");
    $("#textarea-16").addClass("current-bg");
  }

  else if ((four + 12) > currentHour) {
    $("#textarea-16").removeClass("current-bg past-bg");
    $("#textarea-16").addClass("future-bg");
  }

  else {
    $("#textarea-16").removeClass("current-bg future-bg");
    $("#textarea-16").addClass("past-bg")
  }

  // check if it's 5PM
  if ((five + 12) === currentHour) {
    $("#textarea-17").removeClass("future-bg past-bg");
    $("#textarea-17").addClass("current-bg");
  }

  else if ((five + 12) > currentHour) {
    $("#textarea-17").removeClass("current-bg past-bg");
    $("#textarea-17").addClass("future-bg");
  }

  else {
    $("#textarea-17").removeClass("current-bg future-bg");
    $("#textarea-17").addClass("past-bg")
  }
};

timeBlockColor();

setInterval(function() {
  timeBlockColor();
  console.log("time block updated");
}, 60000);





