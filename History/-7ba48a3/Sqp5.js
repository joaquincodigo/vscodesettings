/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

	let numsWithNoDuplicates = []

	for (const elem of nums) {
		if (numsWithNoDuplicates.indexOf(elem) == -1) {
			numsWithNoDuplicates.push(elem)
		}
	}

	nums = numsWithNoDuplicates
	let k = nums.length

	console.log(k);
	console.log(nums);
	return k

};


let arr = [1, 1, 2]
removeDuplicates(arr)
