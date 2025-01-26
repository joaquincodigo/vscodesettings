/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
	console.log();
	console.log("Prices:", prices)

	let maximum_profit = 0
	for (let i = 0; i < prices.length; i++) { // Recorro la lista
		const price_first_day = prices[i];
		// console.log("PRIMER DIA", price_first_day);
		if (i != prices.length) { // Si no voy por el ultimo elemento
			for (let j = i + 1; j < prices.length; j++) { // me fijo las ganancias con todos los elementos posterios
				const price_last_day = prices[j];
				// console.log("Dia posterior", price_last_day);
				if ((price_last_day - price_first_day) > maxProfit) { //si encuentro una ganancia mayor me quedo con ella
					maxProfit = price_last_day - price_first_day
				}
			}
		}
	}

	console.log(maxProfit);
	return maximum_profit
};

maxProfit([7, 1, 5, 3, 9, 4])
maxProfit([2, 4, 1])