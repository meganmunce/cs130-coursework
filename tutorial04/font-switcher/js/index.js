const makeBigger = () => {
   document.querySelector('.content').style.fontSize='50px';
};

const makeSmaller = () => {
   document.querySelector('.content').style.fontSize='15px';
};


document.querySelector('.a1').onclick = makeBigger;
document.querySelector('.a2').onclick = makeSmaller;
