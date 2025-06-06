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
var romanToInt = function (s) {

	console.log("s = ", s);
	

  let number = 0;
  let skipFlag = false;

  for (let i = s.length - 1; i >= 0; i--) {
    console.log("i is", i);

    if (skipFlag === false) {
      const currentChar = s[i];
      const charToTheRight = s[i - 1];

      console.log("currentChar", currentChar);
      console.log("charToTheLeft", charToTheRight);

      switch (currentChar) {
        case "I":
          number = number + 1;
          skipFlag = false;
          break;

        case "V":
          if (charToTheRight === "I") {
            number = number + 4;
            skipFlag = true;
            break;
          }
          number = number + 5;
          skipFlag = false;
          break;

        case "X":
          if (charToTheRight === "I") {
            number = number + 9;
            skipFlag = true;
            break;
          }
          number = number + 10;
          skipFlag = false;
          break;

        case "L":
          if (charToTheRight === "X") {
            number + 40;
            skipFlag = true;
            break;
          }
          number + 50;
          skipFlag = false;
          break;

        case "C":
          if (charToTheRight === "X") {
            number + 90;
            skipFlag = true;
            break;
          }
          number + 100;
          skipFlag = false;
          break;

        case "D":
          if (charToTheRight === "C") {
            number = number + 400;
            skipFlag = true;
            break;
          }
          number = number + 500;
          skipFlag = false;
          break;

        case "M":
          if (charToTheRight === "C") {
            number = number + 900;
            skipFlag = true;
            break;
          }
          number = number + 1000;
          skipFlag = false;
          break;

        default:
          break;
      }
    }
		skipFlag = false
  }

  return number;
};

console.log(romanToInt("MCMXCIV"));
