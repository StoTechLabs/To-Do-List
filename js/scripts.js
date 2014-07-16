$(document).ready(function() {
  $("form#task").submit(function(event) {
    var inputtedTask = $("#task-item").val();
    var tasks = {
      description: inputtedTask
    };
    $("#task-list").append("<li><span class='task-item'>" + tasks.description + " </span></li>");

    $(".task-item").last().click(function() {
      $(this).addClass("task-change");
    });



    event.preventDefault();
  });

});
