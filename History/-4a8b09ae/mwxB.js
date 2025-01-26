/**
 * @param {string} s
 * @return {number}
 */

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

var romanToInt = function (s) {

	let integer;

	for (let i = 0; i < s.length; i++) {
		const c = s[i];

		switch (c) {
			case 1:
				c = "I";
				break;
			case 2:
				dayName = "Tuesday";
				break;
			default:
				dayName = "Invalid day";
		}

	}

	return integer
};


console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))