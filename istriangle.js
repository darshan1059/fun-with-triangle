const inputs = document.querySelectorAll(".angle-input");
console.log(inputs);
const isTriangleButton = document.querySelector("#is-triangle-button");
const outputDiv = document.querySelector("#output");

isTriangleButton.addEventListener("click", isTriangle);

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), 
    Number(inputs[1].value), Number(inputs[2].value));

    if(sumOfAngles === 180){
        outputDiv.innerText = "Yay, The angles form a triangle";
    }
    else{
        outputDiv.innerText = "Oh no, The angles doesn't form a triangle";
    }
}


function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}
