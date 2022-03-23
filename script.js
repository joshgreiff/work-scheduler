

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

$("#8").siblings("textarea").val(localStorage.getItem("8")) 
$("#9").siblings("textarea").val(localStorage.getItem("9")) 
$("#10").siblings("textarea").val(localStorage.getItem("10")) 
$("#11").siblings("textarea").val(localStorage.getItem("11")) 
$("#12").siblings("textarea").val(localStorage.getItem("12")) 
$("#13").siblings("textarea").val(localStorage.getItem("13")) 
$("#14").siblings("textarea").val(localStorage.getItem("14")) 
$("#15").siblings("textarea").val(localStorage.getItem("15")) 
$("#16").siblings("textarea").val(localStorage.getItem("16")) 
$("#17").siblings("textarea").val(localStorage.getItem("17")) 



    var currentHour = moment().hour();
    // JSON.stringify(currentHour);
    
    $(".middleCol").each(function(){
        checkHour = $(this).siblings(".timeBox").attr("id")
        
            if(checkHour == currentHour){
                $(this).css("background-color","red")
            }
            else if (checkHour < currentHour){
                $(this).css("background-color","lightgray")
            }
            else if(checkHour > currentHour){
                $(this).css("background-color", "green")
            }
            
        
    });
    




// setInterval(checkTime, 1000)