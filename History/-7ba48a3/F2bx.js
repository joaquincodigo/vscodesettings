/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

	let numsWithNoDuplicates = []

	for (const elem of nums) {
		if (nums.indexOf(elem) == -1) {
			numsWithNoDuplicates.push(elem)
		}
	}

	nums = numsWithNoDuplicates
	let k = nums.length
	return k

};


let arr = [1, 2, 2, 3, 4, 4]
console.log("K is ", removeDuplicates(arr))
console.log("nums is: ", nums)

