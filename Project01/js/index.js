

const checkKey = (e) => {
    var character = document.querySelector(".character");
    var leftValue = parseInt(document.querySelector(".character").style.left, 10);
    console.log(leftValue)
    var topValue = parseInt(document.querySelector(".character").style.top, 10);
    console.log(leftValue)
    var k = e.keyCode;
    if (k == '39'){
        console.log("Right key was pressed");
        document.querySelector(".game").innerHTML = '<img src="right.png" class="character animate">';
        document.querySelector(".character").style.left = `${leftValue + 10}`;
      }
    else if (k =='37') {
        console.log("Left key was pressed");
        document.querySelector(".game").innerHTML = '<img src="left.png" class="character animate">';
        document.querySelector(".character").style.left = `${topValue + 10}`;
    }
};

document.addEventListener('keydown', checkKey)
