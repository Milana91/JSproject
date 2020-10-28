"use strict";

const arr = [1, 4, 65, 6, 32, 25, 31];
console.log(arr.sort(sortNumbers)); // сравнивает элементы как строки

// Сравним элементы как числа. Каждый раз происходит сравнение двух соседних элементов. 
// Если первый элемент окажется больше, то разность даст положительный результат и, следовательно, 
// элементы будут поменяны местами.
function sortNumbers(a, b) {
    return a - b;
}

// Перебор элементов массива
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
   console.log(`${item} имеет позицию ${index} в ${array}`);
  });
