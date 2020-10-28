"use strict";

// Копирование объектов. Так как объекты имеет ссылочный тип, при попытке присвоить новой переменной 
// значение объекта, мы в итоге передаем ссылку, а не копируем его.
// Для копирования необходимо перебрать все свойства объекта и передать их в новый объект.
// Создаем поверхностную копию объекта. Для вложенный свойств передача будет по - прежнему производиться по ссылке

let someObj = {
    name: 'Lori',
    age: 18,
    city: 'Moscow'
}

const copyObj = (myObj) => {
    let newObj = {};
    let key;     
    for (key in myObj) {
        newObj[key] = myObj[key];
    }
    return newObj;
};

const newCopyObj = copyObj(someObj);

console.log(newCopyObj);

// Object assign. Слияние объектов

    const add = {
        a: 17,
        e: 20
    }

    console.log(Object.assign(someObj, add));  // Какой объект, куда помещаем.

    // Создаем копию объекта
    const cloneObj = Object.assign({}, add);

    console.log(cloneObj);

    // Копирование массива
    const oldArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const newArray = oldArray.slice();

    newArray[1] = 'wqfjjf';

    console.log(oldArray);
    console.log(newArray);

    // оператор spread для массивов
    const video = ['youtube', 'vimeo', 'rutube'],
          blogs = ['wordpress', 'livejournal', 'blogger'],
          internet = [...video, ...blogs, 'vk', 'facebook'];

    console.log(internet);
    
    // Разбиваем массив на отдельные элементы

    function log(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }

    const num = [2, 5, 7];

    log(...num); 

    //

    const array = ['a', 'b'];
    const arrayNew = [...array];

    const q = {
        one: 1,
        two: 2
    };

    const newObj = {...q};

    console.log(newObj);