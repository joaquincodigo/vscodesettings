/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let n = nums.length
	numCounts = {}

	for (const elem of nums) {
		if (elem in numCounts) {
			numCounts.elem++
		}
		else {
			numCounts.elem = 1
		}
	}

	console.log(numCounts)
};

majorityElement()