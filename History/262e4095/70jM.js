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
		if (numCounts[key] > (n / 2)) return key
	}

};
console.log(
	majorityElement([1, 1, 1, 2, 3])
);