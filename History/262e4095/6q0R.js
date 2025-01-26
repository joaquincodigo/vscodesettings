/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
	let n = nums.length
	numCounts = {}

	for (let i = 0; i < nums.length; i++) {
		const elem = nums[i];

		if (elem in numCounts) {
			numCounts[elem]++
		}
		else {
			numCounts[elem] = 1
		}
	}

	console.log(numCounts);
	for (const key in numCounts) {
		console.log(numCounts[key]);
		// 	if (numCounts[numCounter] > (n / 2)) return numCounter
	}

};

majorityElement([1, 1, 1, 2, 3])