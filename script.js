

$(document).ready(function () {
    // TODO: Add a listener for click events on the save button. 
  $(".saveBtn").on("click", function(){
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 
    function timeTracker() {
      var timeNow = dayjs().hour();

      $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id").split("-")[1]);

        if (blockTime < timeNow) {
          $(this).addClass("past");
        } else if (blockTime === timeNow) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        
        }
      })
    };  

    timeTracker();

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. 

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    
    // TODO: Add code to display the current date in the header of the page.

    var now = dayjs().format('MMMM, D, YYYY, h:mm:ss');
    $("#currentDay").text(now);
   
    
  });
