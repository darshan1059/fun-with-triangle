const inputs = document.querySelectorAll(".area-input");
const checkAreaButton = document.querySelector("#check-area-button");
const outputDiv = document.querySelector("#output");

checkAreaButton.addEventListener("click", calculateArea);

function calculateArea(){
    const baseAndHeight = multiplyBaseAndHeight(inputs[0].value, inputs[1].value);
    const area = baseAndHeight / 2;
    outputDiv.innerText = " The area of triangle is " + area;
}

function multiplyBaseAndHeight(base, height) {
	const multipliedBaseAndHeight = base * height;
	return multipliedBaseAndHeight;
}