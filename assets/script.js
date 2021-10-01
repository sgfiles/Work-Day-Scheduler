$(document).ready(function() {
//Everything else goes in here
$('.saveBtn').on('click', function () {
    console.log("test")
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id')
    console.log(value);
    console.log(time);
})

var currentHour = moment().hours();
console.log(currentHour)


})