let btn = document.querySelector('.btn');
btn.addEventListener('click', inputNumber);
let box = document.querySelector('.box')

function inputNumber() {
    let userInput = parseInt(prompt('Enter Desired Squares'));

    if (userInput == isNaN) {
        alert("Please enter a number");
        return;
    } else if (userInput >= 1 && userInput <= 100){
        makeGrid(userInput)
    }
}

function makeGrid(integer) {
    box.textContent = "";
    let getNumber = integer * integer;

    for (i = 0; i < getNumber; i++) {
       let createDiv = document.createElement("div");
       box.appendChild(createDiv);
       createDiv.addEventListener('mouseover', () => {
        createDiv.classList.add('color');
       });
    };
    box.style.gridTemplateColumns= `repeat(${integer}, 1fr)`
}
