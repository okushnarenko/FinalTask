function addTask() {
    var inputField1 = $('#username-input')
    var inputField2 = $('#message');
    var d = new Date();    
    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
    var liElement = '<li class="list-group-item">' + '<strong>' + inputField1.val() + '</strong>' + '<p>'+ '<small>' + datestring + '</small>' + '</p>' + inputField2.val() + '</li>';
    $('#message-list').append(liElement);
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


