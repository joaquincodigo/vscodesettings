/**
 * @param {number} n
 * @return {boolean}
 */

function isPalindrome(n) {
	/*
	Example:
		Number: [ 5 ][ 1 ][ 2 ][ 1 ][ 5 ]
		Digit:    0    1    2    3   (len array)
	
	Left Pointer: Digit 0
	Right Pointer: Digit (len array) 
	Pointers Moves: [(len array) / 2 ]
									Round down. Example:
									
									1 / 2 ==> 0
									2 / 2 ==> 1
									3 / 2 ==> 1 


	
	*/

	n_str = n.toString()

	left_pointer = n_str
	right_pointer = n_str.length
	pointers_moves = Math.floor(n_str.length / 2)
}

console.log(isPalindrome(1234321))
console.log("----------")
console.log(isPalindrome(122))