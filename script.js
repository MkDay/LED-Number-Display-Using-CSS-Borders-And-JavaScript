
let topBox = document.querySelector('#top-box');

let bottomBox = document.querySelector('#bottom-box');

let on = 'Snow';
let off = 'transparent';


let zero = () => {
   topBox.style.borderTopColor = on;
   topBox.style.borderLeftColor = on;
   topBox.style.borderRightColor = on;
   topBox.style.borderBottomColor = off;
   
   bottomBox.style.borderTopColor = off;
   bottomBox.style.borderLeftColor = on;
   bottomBox.style.borderRightColor = on;
   bottomBox.style.borderBottomColor = on;
};

let one = () => {
   topBox.style.borderTopColor = off;
   topBox.style.borderLeftColor = off;
   topBox.style.borderRightColor = on;
   topBox.style.borderBottomColor = off;
   topBox.style.borderBottomColor = off;
   
   bottomBox.style.borderTopColor = off;
   bottomBox.style.borderLeftColor = off;
   bottomBox.style.borderRightColor = on;
   bottomBox.style.borderBottomColor = off;
};

let two = () => {
   topBox.style.borderTopColor = on;
   topBox.style.borderLeftColor = off;
   topBox.style.borderRightColor = on;
   topBox.style.borderBottomColor = on;
   
   bottomBox.style.borderTopColor = on;
   bottomBox.style.borderLeftColor = on;
   bottomBox.style.borderRightColor = off;
   bottomBox.style.borderBottomColor = on;
};

let three = () => {
   topBox.style.borderTopColor = on;
   topBox.style.borderLeftColor = off;
   topBox.style.borderRightColor = on;
   topBox.style.borderBottomColor = on;
   
   bottomBox.style.borderTopColor = on;
   bottomBox.style.borderLeftColor = off;
   bottomBox.style.borderRightColor = on;
   bottomBox.style.borderBottomColor = on;
};

let four = () => {
   topBox.style.borderTopColor = off;
   topBox.style.borderLeftColor = on;
   topBox.style.borderRightColor = on;
   topBox.style.borderBottomColor = on;
   
   bottomBox.style.borderTopColor = on;
   bottomBox.style.borderLeftColor = off;
   bottomBox.style.borderRightColor = on;
   bottomBox.style.borderBottomColor = off;
};

let five = () => {
   topBox.style.borderTopColor = on;
   topBox.style.borderLeftColor = on;
   topBox.style.borderRightColor = off;
   topBox.style.borderBottomColor = on;
  
   bottomBox.style.borderTopColor = on;
   bottomBox.style.borderLeftColor = off;
   bottomBox.style.borderRightColor = on;
   bottomBox.style.borderBottomColor = on;
};

let six = () => {
   topBox.style.borderTopColor = on;
   topBox.style.borderLeftColor = on;
   topBox.style.borderRightColor = off;
   topBox.style.borderBottomColor = on;
   
   bottomBox.style.borderTopColor = on;
   bottomBox.style.borderLeftColor = on;
   bottomBox.style.borderRightColor = on;
   bottomBox.style.borderBottomColor = on;
};

let seven = () => {
   topBox.style.borderTopColor = on;
   topBox.style.borderLeftColor = on;
   topBox.style.borderRightColor = on;
   topBox.style.borderBottomColor = off;
   
   bottomBox.style.borderTopColor = off;
   bottomBox.style.borderLeftColor = off;
   bottomBox.style.borderRightColor = on;
   bottomBox.style.borderBottomColor = off;
};

let eight = () => {
   topBox.style.borderTopColor = on;
   topBox.style.borderLeftColor = on;
   topBox.style.borderRightColor = on;
   topBox.style.borderBottomColor = on;
   
   bottomBox.style.borderTopColor = on;  
   bottomBox.style.borderLeftColor = on;
   bottomBox.style.borderRightColor = on;
   bottomBox.style.borderBottomColor = on;
};

let nine = () => {
   topBox.style.borderTopColor = on;
   topBox.style.borderLeftColor = on;
   topBox.style.borderRightColor = on;
   topBox.style.borderBottomColor = on;
   
   bottomBox.style.borderTopColor = on;
   bottomBox.style.borderLeftColor = off;
   bottomBox.style.borderRightColor = on;
   bottomBox.style.borderBottomColor = on;
};


function playNumbers() {
setTimeout(zero, 0);
setTimeout(one, 1000);
setTimeout(two, 2000);
setTimeout(three, 3000);
setTimeout(four, 4000);
setTimeout(five, 5000);
setTimeout(six, 6000);
setTimeout(seven, 7000);
setTimeout(eight, 8000);
setTimeout(nine, 9000);
}

playNumbers();
setInterval(playNumbers, 10000);
