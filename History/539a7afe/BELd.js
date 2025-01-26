/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

};


console.log("abba > dog cat cat dog TRUE >>", wordPattern("abba", "dog cat cat dog"));
console.log("abba > dog cat cat fish FALSE >>", wordPattern("abba", "dog cat cat fish"));
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false