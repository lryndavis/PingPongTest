$(function() {

var number = parseInt(prompt("Hello! What number would you like to ping-pong up to?"));

for(var index = 1; index <= number; index += 1) {
    if (index % 3 === 0 && index % 5 === 0) {
        $("#numList").append("<li>PING-PONG!</li>");
    } else if (index % 3 === 0) {
        $("#numList").append("<li>Ping</li>");
    } else if (index % 5 === 0) {
        $("#numList").append("<li>Pong</li>");
    } else {
        $("#numList").append("<li>" + index + "</li>");
    }
}

});

