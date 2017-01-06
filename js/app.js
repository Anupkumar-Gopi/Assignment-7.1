// function declaration to calculate Area of Circle
var r = prompt("Enter radius of circle")||0;
function calculateArea(r){
	return Math.round(Math.PI*(r**2)); //return area of circle	
}

// function call inside console.info
console.info("r=",r,"; area=",calculateArea(r)); // console output of area
console.info("Area of Circle is",calculateArea(r)); // console output of area