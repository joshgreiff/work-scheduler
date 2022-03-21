

var displayDate = function(){
    var currentDate = moment().format("dddd, MMMM Do YYYY")
    var dayEl = document.getElementById("currentDay")

    dayEl.append(currentDate)
}


window.addEventListener('load', displayDate)

$("button").on("click", function(){
    var task = $(this).siblings("textarea").val()
    console.log(task)

    var taskTime = $(this).siblings(".timeBox").attr("id")
    console.log(taskTime)

    localStorage.setItem(taskTime, task)

    window.alert("Task Saved!")
})

$("#8am").siblings("textarea").val(localStorage.getItem("8am")) 
$("#9am").siblings("textarea").val(localStorage.getItem("9am")) 
$("#10am").siblings("textarea").val(localStorage.getItem("10am")) 
$("#11am").siblings("textarea").val(localStorage.getItem("11am")) 
$("#12pm").siblings("textarea").val(localStorage.getItem("12pm")) 
$("#1pm").siblings("textarea").val(localStorage.getItem("1pm")) 
$("#2pm").siblings("textarea").val(localStorage.getItem("2pm")) 
$("#3pm").siblings("textarea").val(localStorage.getItem("3pm")) 
$("#4pm").siblings("textarea").val(localStorage.getItem("4pm")) 
$("#5pm").siblings("textarea").val(localStorage.getItem("5pm")) 