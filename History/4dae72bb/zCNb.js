/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {

	if (s.length != t.length) return false

	else {
		let sChars = s.split("")

		for (const char of t) {
			// console.log("char", char);
			if (sChars.indexOf(char) == -1) return false

			else {
				let indexToRemove = sChars.indexOf(char)
				// console.log("indexToRemove", indexToRemove);
				sChars.splice(indexToRemove, 1)
				// console.log("sChars", sChars);
			}

		}

		return sChars.length == 0
		// if (sChars.length == 0) return true
		// else return false
	}
}



console.log("anagram nagarm TRUE >", isAnagram("anagram", "nagaram"));
console.log("rat car FALSE >", isAnagram("rat", "car"));