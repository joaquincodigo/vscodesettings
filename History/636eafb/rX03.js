/**
 * @param {number} n
 * @return {boolean}
 */

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

var isHappy = function (n) {

	while (n != 1) {
		const stringN = d.toString()
		for (const c of stringN) {
			let d = parseInt(c)
		}

		console.log(n)
	}
	// return true 
};

isHappy(22)