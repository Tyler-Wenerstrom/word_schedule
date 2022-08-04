var description = $(".description");
var value = $(this).siblings(".description").val();
var timeEl = $(this).parent().attr("id");
var currentHour = moment().format("H");
function getDate() {
  var today = moment().format("dddd, MMMM Do");
  $("#currentDay").text(today);
}
getTask();
getDate();
// getTask();

$(".time-block").each(function () {
  var getHourId = parseInt($(this).attr("id").split("-")[1]);
  $(this).removeClass("past");
  if (currentHour < getHourId) {
    $(this).addClass("future");
  } else if (currentHour == getHourId) {
    $(this).addClass("present");
  } else {
    $(this).addClass("past");
  }
});

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var value = $(this).siblings(".description").val();
  var timeEl = $(this).parent().attr("id");
  localStorage.setItem(timeEl, JSON.stringify(value));
});
function getTask() {
  $("#07").text(localStorage.getItem("hour-7"));
  $("#08").val(localStorage.getItem("hour-8"));
  $("#09").val(localStorage.getItem("hour-9"));
  $("#10").val(localStorage.getItem("hour-10"));
  $("#11").val(localStorage.getItem("hour-11"));
  $("#12").val(localStorage.getItem("hour-12"));
  $("#13").val(localStorage.getItem("hour-13"));
  $("#14").val(localStorage.getItem("hour-14"));
  $("#15").val(localStorage.getItem("hour-15"));
  $("#16").val(localStorage.getItem("hour-16"));
  $("#17").val(localStorage.getItem("hour-17"));
}
// console.log(getTask)
// // }
// let storedItems = localStorage.getItem('time')
// $('.description').innerHTML= storedItems;
//  };
