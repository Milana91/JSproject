"use strict";

const options = {
    name:'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();


// ДЕСТРУКТУРИЗАЦИЯ объекта. Вытаскиваем из объекта нужные свойства. 
// Это помогает когда есть много вложенностей объектов
const {border, bg} = options.colors;  // Из структуры options.colors вытаскиваем нужные свойства
console.log(border);

// добавление свойств в объект
let a = 'key';
options.colors[a] = 'value';

for (let key in options) {
    if (typeof(options[key]) === 'object') {
       // Перебор свойств объекта внутри объекта
        for (let elem in options[key]) {
            console.log(`Свойство ${elem} имеет значение ${options[key][elem]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}



console.log(options.name);


// Удаление свойства
/* delete options.name; */

console.log(options);


// Перебор свойств объекта
for (let key in options) {
    if (typeof(options[key]) === 'object') {
       // Перебор свойств объекта внутри объекта
        for (let elem in options[key]) {
            console.log(`Свойство ${elem} имеет значение ${options[key][elem]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

// Подсчет кол-ва свойств объекта
// можно закомменитровать все, кроме счетчика, внутри перебора
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
       // Перебор свойств объекта внутри объекта
        for (let elem in options[key]) {
            console.log(`Свойство ${elem} имеет значение ${options[key][elem]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);

// ЛУЧШИЙ СПОСОБ - использовать метод объекта. Object.keys() создает массив их свойств объекта в качестве ключей.
console.log(Object.keys(options).length);
