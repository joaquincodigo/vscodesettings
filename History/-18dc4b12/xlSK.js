/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

	let min = 0
	let max_profit = 0

	for (const price of prices) {
		if (price < min) {
			min = price
		}

		if ((price - min) > max_profit) {
			max_profit = 0
		}


	}

	console.log(maximum_profit);
	return max_profit
};

maxProfit([7, 1, 5, 3, 9, 4])
maxProfit([2, 4, 1])