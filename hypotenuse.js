const inputSides = document.querySelectorAll(".side-input");
const hypotenuseButton = document.querySelector("#hypotenuse-button");
const outputDiv = document.querySelector("#output");

hypotenuseButton.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(inputSides[0].value), Number(inputSides[1].value));
    const lengthOfHypotenuse = parseFloat(Math.sqrt(sumOfSquares)).toFixed(2);
    outputDiv.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;

}

function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
} 