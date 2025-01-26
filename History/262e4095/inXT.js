/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
	let n = nums.length
	numCounts = {}

	for (let i = 0; i < nums.length; i++) {
		const elem = array[i];

		if (elem in numCounts) {
			numCounts.elem++
		}
		else {
			numCounts.elem = 1
		}

	}

	console.log(numCounts)
};

majorityElement([1, 1, 1, 2, 3])