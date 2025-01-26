/**
 * @param {number} n
 * @return {boolean}
 */

function isPalindrome(n) {
	/*
	Example:
		Number: [ 5 ][ 1 ][ 2 ][ 1 ][ 5 ]
		Digit:    0    1    2    3   (len string)
	
	Left Pointer: Digit 0
	Right Pointer: Digit (len string) 
	Pointers Moves: [(len array) / 2 ]
									Round down. Example:
									
									1 / 2 ==> 0
									2 / 2 ==> 1
									3 / 2 ==> 1 


	
	*/

	n_str = n.toString()

	left_pointer = 0
	right_pointer = n_str.length

	left_pointer_value = n_str[left_pointer]
	right_pointer_value = n_str[right_pointer]

	pointers_moves = Math.floor(n_str.length / 2)

	function move_pointers() {
		left_pointer++
		right_pointer--
	}

	function are_pointers_values_equal() {

		left_pointer_value = n_str[left_pointer]
		right_pointer_value = n_str[right_pointer]
	}

	for (let i = 0; i < pointers_moves; i++) {

	}



}

console.log(isPalindrome(1234321))
console.log("----------")
console.log(isPalindrome(122))