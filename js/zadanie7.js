// Задание 7
let anotherArray = [1, 3, 6, 5, 2, 7, null, "hello", 9]
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < anotherArray.length; i++) {
	if (typeof anotherArray[i] === 'number' && !isNaN(anotherArray[i]))
		if (anotherArray[i] % 2 === 0) {
			evenCount++;
		}
		else {
			oddCount++;
		}
}
console.log("колличество чётных элементов: " + evenCount)
console.log("колличество нечётных элементов: " + oddCount)