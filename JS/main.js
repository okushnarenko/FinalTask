function addTask() {
    var inputField1 = $('#username-input')
    var inputField2 = $('#message');
    var showTime = $(myTime);
    var liElement = '<li class="list-group-item">' + inputField1.val() + ' ' + '<p>' + showTime.val('') + '</p>' + '<br>' + inputField2.val() + '</li>';
    $('#message-list').append(liElement);
    showTime.val('');
    inputField1.val('');
    inputField2.val('');
    inputField2.focus();
};

$('#add-task').click(addTask);

$('#message').keypress(function (event) {
    if (event.which == 13) {
        addTask();
    }
});

function myTime() {
    var d = new Date();
    d.setHours(15);
    document.getElementById("showTime").innerHTML = d;
  }