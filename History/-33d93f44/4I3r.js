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
	right_pointer = n_str.length - 1 // indexes start at 0
	left_pointer_value = n_str[left_pointer]
	right_pointer_value = n_str[right_pointer]

	pointers_moves = Math.floor(n_str.length - 1 / 2) // indexes start at 0
	console.log(pointers_moves);
	function move_pointers() {
		left_pointer++
		right_pointer--
	}

	function are_pointers_values_equal() {
		return (left_pointer_value == right_pointer_value)
	}

	for (let i = 0; i < pointers_moves; i++) {

		if (!are_pointers_values_equal) {
			return false
		}
		else {
			move_pointers
		}
	}

	return true
}

console.log(isPalindrome(11221))
console.log("----------")