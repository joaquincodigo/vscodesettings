/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {

	if (s.length != t.length) return false

	else {
		let helperArray = s.split("")
		for (const char of t) {
			if (helperArray.indexOf(char) != -1) {

			}
			let indexToRemove = helperArray.indexOf(char)
		}
	}

};

console.log("anagram nagarm TRUE >", isAnagram("anagram", "nagaram"));
console.log("rat car FALSE >", isAnagram("rat", "car"));