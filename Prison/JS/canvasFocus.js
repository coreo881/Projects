$(window).bind("load", function() {
   // code here

var can = document.getElementById('gameDiv');
var canvas1 = can.firstChild;
console.log(canvas1);

var ctx = canvas1.getContext('2d');
canvas1.tabIndex = 1;

canvas1.addEventListener('keydown', function(e){
    move = false;
    x = false;
    y = false;
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    switch(keycode){
        case 37:
            move = true;
            x = 'negative';
        break;
        case 38:
            move = true;
            y = 'negative';
        break;
        case 39:
            move = true;
            x = 'positive';
        break;
        case 40:
            move = true;
            y = 'positive';
        break;
    }
    //if(move){
    //    animation.move(x,y);
    //}
    e.preventDefault();
    return false;
    });
});