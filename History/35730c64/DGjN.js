/*

Symbol       Value
I             1

V             5
IV - 4

X             10
IX - 9 

L             50
XL - 40

C             100
XC - 90 

D             500
CD - 400

M             1000
CM - 900

*/

/*

Symbol       Value
I             1

V             5
IV - 4

X             10
IX - 9 

XL - 40
L             50
XC - 90 
C             100
CD - 400
D             500
CM - 900
M             1000

1 9 9 4

M CM XC IV

1000 100 1000 10 100 1 5

*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

let number = 0

for (let i = 0; i < s.length; i++) {

	const currentChar = s[i];
	const charToTheLeft = s[i-1];
	console.log("currentChar", currentChar)
	console.log("chatToTheLeft", charToTheLeft)
	switch (currentChar) {
		case "I": 
	console.log("char is", currentChar);
	console.log("adding 1");
	
			number + 1 
			break;
	
		case "V":  
			if (charToTheLeft === "I") {
				number + 4	
				break;
			}
			number + 5
			break;

		case "X":  
			if (charToTheLeft === "I") {
				number + 9	
				break;
			}
			number + 10
			break;

		case "L":  
			if (charToTheLeft === "X") {
				number + 40	
				break;
			}
			number + 50 
			break;

		case "C":  
			if (charToTheLeft === "X") {
				number + 90	
				break;
			}
			number + 100 
			break;

		case "D":  
			if (charToTheLeft === "C") {
				number + 400 
				break;
			}
			number + 500 
			break;

		case "M":  
			if (charToTheLeft === "C") {
				number + 900 
				break;
			}
			number + 1000 
			break;

		default:
			break;
	}
}
    return number
};

console.log(romanToInt("III"))