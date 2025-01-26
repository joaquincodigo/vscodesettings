/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
	console.log();
	console.log("Prices:", prices)

	let max_profit = 0
	for (let i = 0; i < prices.length; i++) { // Recorro la lista
		const price_first_day = prices[i];

		if (i != prices.length) { // Si no voy por el ultimo elemento
			for (let j = i + 1; j < prices.length; j++) {
				const price_last_day = prices[j];
				if ((price_last_day - price_first_day) > maxProfit) {
					maxProfit = price_last_day - price_first_day
				}
			}
		}

	}

	return max_profit
};

maxProfit([7, 1, 5, 3, 9, 4])
maxProfit([2, 4, 1])