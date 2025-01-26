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

			if (helperArray.indexOf(char) == -1) return false

			let indexToRemove = helperArray.indexOf(char)
			helperArray.splice(indexToRemove, 1)

		}
	}
}

};

console.log("anagram nagarm TRUE >", isAnagram("anagram", "nagaram"));
console.log("rat car FALSE >", isAnagram("rat", "car"));