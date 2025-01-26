/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

	sArr = s.split(" ")
	sArr.forEach(w => {

	})

	return "RETURN"
};


console.log("abba > dog cat cat dog TRUE >>", wordPattern("abba", "dog cat cat dog"));
console.log("abba > dog cat cat fish FALSE >>", wordPattern("abba", "dog cat cat fish"));
console.log("abba > dog cat cat fish FALSE >>", wordPattern("abba", "dog cat cat fish"));
console.log("aaaa > dog cat cat fish FALSE >>", wordPattern("abba", "dog cat cat dog"));