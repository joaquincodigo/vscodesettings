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

	let n_str = n.toString()

	let left_pointer = 0
	let right_pointer = n_str.length - 1 // indexes start at 0
	let left_pointer_value = n_str[left_pointer]
	let right_pointer_value = n_str[right_pointer]

	let pointers_moves = Math.floor((n_str.length) / 2)

	let move_pointers = () => { left_pointer++; right_pointer-- }
	let are_pointers_values_equal = () => (left_pointer_value == right_pointer_value)

	for (let i = 0; i < pointers_moves; i++) {

		if (are_pointers_values_equal()) {
			move_pointers()
		}
		else {
			return false
		}

		return true
	}

}



console.log(isPalindrome(121), " Must be TRUE")
console.log(isPalindrome(1234), " Must be FALSE")
console.log(isPalindrome(21), " Must be FALSE")
console.log(isPalindrome(1), " Must be TRUE")

console.log("----------")