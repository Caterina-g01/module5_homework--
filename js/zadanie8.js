// Задание 8
let myFruits = new Map([
	['banana', "yellow"],
	['apple', "red"],
	['pineapple', "brown"],
	['orange', "orange"],
]);
let keys = Array.from(myFruits.keys());
keys.forEach(key => {
	console.log(`Ключ - ${key}, Значение - ${myFruits.get(key)}`);
})