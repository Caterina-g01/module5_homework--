// Задание 1
let userInput = prompt("Введите значение");
let numberValue = +userInput;
if (!isNaN(numberValue) && typeof numberValue === 'number')
	if (numberValue % 2 === 0) {
		console.log("Чётное число");
	}
	else {
		console.log("Нечётное число");
	}
else {
	console.log("Упс, вы ошиблись");
}