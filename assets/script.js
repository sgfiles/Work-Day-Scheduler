$(document).ready(function() {
//Everything else goes in here
$('.saveBtn').on('click', function () {
    console.log("test")
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id')
  
    console.log(time);
})

var currentHour = moment().hours();
console.log(currentHour)

function dateTime() {
    current = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $('#currentDay').text(current);
    setTimeout(function () {dateTime(); }, 1000);
}
dateTime()


$('#9 .description').val(localStorage.getItem("9"));
$('#10 .description').val(localStorage.getItem("10"));
$('#11 .description').val(localStorage.getItem("11"));
$('#12 .description').val(localStorage.getItem("12"));
$('#13 .description').val(localStorage.getItem("13"));
$('#14 .description').val(localStorage.getItem("14"));
$('#15 .description').val(localStorage.getItem("15"));
$('#16 .description').val(localStorage.getItem("16"));
$('#17 .description').val(localStorage.getItem("17"));


function colorTime() {
    $('time-block').each(function () {
        var calendarTime = $(this).attr("id");
        console.log(calendarTime)

        if(calendarTime < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
            console.log("past time")
            console.log("currentHour")




        }else if (calendarTime == currentHour){
             $(this).removeClass("future");
             $(this).removeClass("past");
             $(this).addClass("present");
             console.log("current time")
             console.log("currentHour")
                  
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
            console.log("future time")

        }

    })
}
colorTime()
})
localStorage.setItem("description", "9")
document.getElementById("class").innerHTML = localStorage.getItem("description")