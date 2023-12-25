//Создайте переменную, содержащую ваше имя, и выведите ее в консоль.

var mynane = "Даша";
console.log(mynane);

//Создайте массив чисел и напишите цикл для вывода каждого элемента.

const mass_namber = [5, 8, 17, 2];
for (const number of mass_namber) {

    console.log(number);
}

//Напишите функцию, которая принимает два числа и возвращает их сумму.

function sum(a, b) {
    const r = a + b;
    console.log(r);
}
sum(12, 3);

//Создайте функцию-конструктор для объекта "Студент" с полями "имя" и "возраст".

function Student(name, age) {
    this.name = name;
    this.age = age;

    console.log("Имя: ", this.name);
    console.log("Возраст: ", this.age);
}
Student("Иван", 12);

//Создайте объект "автомобиль" с полями "марка" и "год выпуска".

class Автомобиль {
    constructor(marka, year) {
        this.marka = marka;
        this.year = year;
    }
}
function avto(marka, year) {
    this.marka = marka;
    this.year = year;
    console.log("Марка: ", this.marka);
    console.log("Год выпуска: ", this.year);
}
avto("BMW", "2017");

//Добавьте новый элемент в середину массива и объясните, как это сделать.

//Создаем массив чисел
let num = [6, 2, 97, 24, 70];
//Создаем функцию
function del(arr, item) {
    //Делим массив пополам, узнаем расположение элемента в середине
    let i = Math.ceil(arr.length / 2);
    //Помещаем элемент в середину массива
    arr.splice(i, 0, item);
    //Возвращаем полученный массив
    return arr;
}
console.log(del(num, 100));

//Напишите функцию, возвращающую Promise, который разрешается через 1 секунду.

async function later(s) {
    return new Promise(function (resolve) {
        setTimeout(resolve, s);
        console.log("Выполнено");
    });
}
later(1000);

//Используя async/await, напишите код, который вызывает эту функцию и выводит результат в консоль.

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Выполнено"), 3000)
    });

    let z = await promise;

    console.log(z);
}
f();

