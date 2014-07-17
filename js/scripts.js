$(document).ready(function() {
  var currentList;
  $("form#create-list").submit(function(event) {
    var inputtedList = $("input#list-item").val().toUpperCase();

    var newList = { list: inputtedList, tasks: [] };
    $('.list-items').append("<li><span class='list-name'>" + newList.list + "</span></li>");


    $('.list-name').last().click(function() {
      $('#header').text(newList.list);
      currentList = newList;
      $(".task-list").empty();
      currentList.tasks.forEach(function(task) {
        $('.task-list').append("<li>" + task.task + "</li>");
      });

    });


    event.preventDefault();
    $("input#list-item").val("");
  });


  $("form#create-task").submit(function(event) {
    var inputtedTask = $("input#task-item").val().toUpperCase();

    var newTaskItem = { task: inputtedTask };
    $('.task-list').append("<li>" + newTaskItem.task + "</li>");
    currentList.tasks.push(newTaskItem);


    event.preventDefault();
    $("input#task-item").val("");
  });

});



    // var inputtedTask = $("#task-item").val();
    // var tasks = {
    //   description: inputtedTask
    // };
    // $("#task-list").append("<li><span class='task-item'>" + tasks.description + " </span></li>");

    // $(".task-item").last().click(function() {
    //   $(this).addClass("task-change");
    // });
