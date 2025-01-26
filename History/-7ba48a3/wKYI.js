/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

	let numsWithNoDuplicates = []

	for (const elem of nums) {
		if (numsWithNoDuplicates.indexOf(elem) == -1) {
			console.log("index:", nums.indexOf(elem));
			numsWithNoDuplicates.push(elem)
		}
	}

	nums = numsWithNoDuplicates
	let k = nums.length

	console.log("k is ", k)
	console.log("nums is: ", nums)

	return k

};


let arr = [1, 2, 2, 3, 4, 4]
removeDuplicates(arr)
