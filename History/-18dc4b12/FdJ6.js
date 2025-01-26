/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
	console.log();
	console.log("Lista: ", prices)

	// Get the smallest value and its index
	let min = prices[0]
	let index = 0
	for (let i = 0; i < prices.length; i++)
		if (prices[i] < min) {
			min = prices[i];
			index = i
		}

	// Find the higher value that follows min
	let max = min
	for (let i = index; i < prices.length; i++) {
		if (prices[i] > max) {
			max = prices[i]
		}
	}


	let profit = max - min
	console.log("min", min);
	console.log("max", max);
	console.log("profit", profit);
	if (profit > 0) {
		return profit
	}
	else {
		return 0
	}

};

maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([2, 4, 1])







