/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

	console.log()
	console.log("Start!")

	let min = 0
	let max_profit = 0

	for (const price of prices) {
		console.log("Current Price:", price);
		if (price < min) {
			min = price
			console.log("Curren Min");
		}

		if ((price - min) > max_profit) {
			max_profit = price - min
		}
	}

	console.log(max_profit);
	return max_profit
};

maxProfit([7, 1, 5, 3, 9, 4])
maxProfit([2, 4, 1])