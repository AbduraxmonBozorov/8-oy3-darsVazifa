"use strict";
// 2
const student = {
    name: "John Doe",
    age: 25,
    isStudent: false
};
// 4
const bokk1 = {
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald",
    publishedYear: 1925
};
// -------------------------------------------------------
// 2 Massivlar
//  1
let sonlar = [1, 2, 3, 4, 5];
// 2
function sumArr(arr) {
    let sum = 0;
    arr.forEach(item => {
        sum += item;
    });
    return sum;
}
// console.log(sumArr(sonlar));
// 3
let str = ["apple", "banana", "cherry"];
// 4
function toUpperCase(txt) {
    let newArr = [];
    txt.forEach(item => {
        newArr.push(item.toUpperCase());
    });
    return newArr;
}
// console.log(toUpperCase(str));
// ---------------------------------------------------===
// 3. **Tuple**
// 1
let StudentRecord = ['Alice', 22, true];
// 2
let Coordinate = [10, 20];
// -------------------------------------------------------
//**Mashq 4:** `any` Tipidan Foydalanish
let a = 'hello';
let b = 22;
let c = true;
// 2
let arr2 = ["hello", 25, false, { name: 'John', age: 32 }];
function outPut(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}
// outPut(arr2)
