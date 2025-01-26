/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
	console.log();
	console.log("Prices:", prices)

	let max_profit = 0
	for (let i = 0; i < prices.length; i++) {
		const first_day = prices[i];

		if (i != prices.length) {
			for (let j = i + 1; j < prices.length; j++) {
				const = last_day[j];
			}
		}

	}

	return max_profit
};

maxProfit([7, 1, 5, 3, 9, 4])
maxProfit([2, 4, 1])