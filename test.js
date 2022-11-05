// // Gets user input
const name = prompt("What is your name?");
const inputArray = [];
const size = 4;
for(let i=0; i<size; i++){
    inputArray[i] = prompt("What is your name?" + (i+1));
}
console.log(inputArray);

const number = name.length;
const fir = name.charAt(0);
const res = name.slice(-1);
println(`${fir}${number}${res}`);