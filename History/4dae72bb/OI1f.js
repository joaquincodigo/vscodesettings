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

			if (sChars.indexOf(char) == -1) return false

			else {
				let indexToRemove = sChars.indexOf(char)
				sChars.splice(indexToRemove, 1)
			}

		}

		return (sChars == [])
	}
}



console.log("anagram nagarm TRUE >", isAnagram("anagram", "nagaram"));
console.log("rat car FALSE >", isAnagram("rat", "car"));