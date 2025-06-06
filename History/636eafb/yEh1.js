/**
 * @param {number} n
 * @return {boolean}
 */

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1(where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

var isHappy = function (n) {

	let currentN = n.str
	let digits = currentN.split("")
	let total
	for (const d of digits) {
		total += parseInt(d) ** 2
	}
	console.log(total);
};

isHappy(22)