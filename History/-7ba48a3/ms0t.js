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

	let k = numsWithNoDuplicates.length
	return k

};


let arr = [1, 2, 2, 3, 4, 4]
console.log(removeDuplicates(arr))
