/**
 * @param {number[]} prices
 * @return {number}
 */

var maximum_profit = function (prices) {
	let maximum_profit = 0
	for (let i = 0; i < prices.length; i++) { // Recorro la lista
		const price_first_day = prices[i];
		if (i != prices.length) { // Si no voy por el ultimo elemento
			for (let j = i + 1; j < prices.length; j++) { // me fijo las ganancias con todos los elementos posterios
				const price_last_day = prices[j];
				if ((price_last_day - price_first_day) > maximum_profit) { //si encuentro una ganancia mayor me quedo con ella
					maximum_profit = price_last_day - price_first_day
				}
			}
		}
	}
	return maximum_profit
};

maximum_profit([7, 1, 5, 3, 9, 4])
maximum_profit([2, 4, 1])