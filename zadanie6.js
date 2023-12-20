// Задание 6
let smallArray = [5, 5, 5, 5, 5, 5, 5, 5];
let allElementsEqual = smallArray.every(element => element === smallArray[0]);
console.log(allElementsEqual);

/* for false value:
let smallArray = [5, 5, 6, 5, 5, 5, 5, 5];
let allElementsEqual = smallArray.every(element => element === smallArray[0]);
console.log(allElementsEqual);
*/