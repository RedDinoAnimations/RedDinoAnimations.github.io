function sayThatWasEasy() {
var thatWasEasy = new Audio("that_was_easy (2).mp3");
thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    
}