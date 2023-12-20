// Задание 2
let x = null  // вводим любое значение
if (!isNaN(x) && typeof x === 'number') {
	console.log(`${x} - число`);
}
else if (typeof x === 'string') {
	console.log(`${x} - строка`)
}
else if (typeof x === 'boolean') {
	console.log(`${x} - логический тип`)
}
else {
	console.log('Тип не определён')
};