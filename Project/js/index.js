paper.install(window);
paper.setup('myCanvas');

const screenW = view.size.width;
const screenH = view.size.height;

//const lavenderTheme = () => {
//   document.querySelector('.background').className='background'
};

const violetTheme = () => {
   document.querySelector('.background').className='violetBackground'
};

let character = document.getElementById("character");

var moveCharacterRight = function (character) {
    document.querySelector(".character").innerHTML = "<img src="right.png">";
    character.item.position.x += 50px;
}

var moveFish = function (fish) {
    fish.item.position.x += fish.speed;
    if (fish.item.position.x < -100 ) {
        fish.item.position.x = screenW + 100;
    }
    if (fish.item.position.x > screenW + 100) {
        fish.item.position.x = -100;
    }
};

//call the addFish function and pass
//in the number of fish you would like to generate
//as an argument
const fishList = generateFishes(10);

view.onFrame = (event) => {
    // make a for loop that moves all 20 of the fish
    // in the fishList array
    moveFish(fishList[0]);
    moveFish(fishList[1]);
    moveFis

///const moveRight = (event) => {
///  if (event.keyCode === 39) {
///    console.log('Right key was pressed');
///    moveCharacterRight();
///}




document.querySelector('.rightButton').onclick = moveRight;
