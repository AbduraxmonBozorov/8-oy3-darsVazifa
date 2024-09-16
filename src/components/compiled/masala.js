"use strict";
// // 1
// interface Person {
//     name: string,
//     age:number,
//     isStudent: boolean
// }
// // 2
// const student: Person = {
//     name: "John Doe",
//     age: 25,
//     isStudent: false
// }
// // 3
// interface Book {
//     title: string,
//     author: string,
//     publishedYear: number
// }
// // 4
// const bokk1: Book = {
//     title: "The Great Gatsby",
//     author: "F.Scott Fitzgerald",
//     publishedYear: 1925
// }
// // -------------------------------------------------------
// // 2 Massivlar
// //  1
// let sonlar: number[] = [1,  2, 3, 4, 5];
// // 2
// function sumArr(arr: number[]):number{
//     let sum=0;
//     arr.forEach(item=>{
//         sum+=item
//     })
//     return sum
// }
// // console.log(sumArr(sonlar));
// // 3
// let str: string[] = ["apple", "banana", "cherry"];
// // 4
// function toUpperCase(txt: string[]):string[] {
//     let newArr:string[] = [];
//     txt.forEach(item=>{
//         newArr.push(item.toUpperCase())
//     })
//     return newArr
// }
// // console.log(toUpperCase(str));
// // ---------------------------------------------------===
// // 3. **Tuple**
// // 1
// let StudentRecord: [string, number, boolean] = ['Alice', 22, true];
// // 2
// let Coordinate: [number, number] =[10, 20]
// // -------------------------------------------------------
// //**Mashq 4:** `any` Tipidan Foydalanish
// let a: any = 'hello';
// let b: any = 22;
// let c: any = true;
// // 2
// let arr2: any = ["hello", 25, false, {name: 'John', age: 32}];
// function outPut(arr: any):void{
//     arr.forEach(element => {
//        console.log(element);
//     });
// }
// // outPut(arr2)
// // ---------------------------------------------------
// // **Mashq 5:** `unknown` Tipidan Foydalanish
// let d: unknown;
// // 1
// d="hello";
// if(typeof d === "string"){
//     console.log('string');
// }
// // 2
// let e:unknown;
// e=true;
// if(typeof e === "string"){
//     console.log(e);
// }else if(typeof e !== "string"){
//     console.log('String emas');
// }
// **Mashq 6:** `never` Tipidan Foydalanish
// 1
function errr(txt) {
    throw new Error(txt);
}
// errr();
// 2
function errorFunction() {
    while (true) {
        console.log("Error");
    }
}
// errorFunction()
// **Mashq 7:** Funksiyalarni Yozish
// 1
function addNumbers(num1, num2) {
    return num1 + num2;
}
// console.log(addNumbers(1,2));
// 2
function formatDate(txt) {
    let arr = txt.split(".");
    let result = `${arr[2]}-${arr[1]}-${arr[0]}`;
    return result;
}
// console.log(formatDate("16.09.2024"));
// **Mashq 8:** `Enum`dan Foydalanish
// 1
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
// 2
function printDay(a) {
    return a;
}
let person1 = {
    name: "John",
    age: 35,
    employeeId: 14,
    department: "Engineer"
};
// 3
let car1 = {
    make: "CHEVROLET",
    model: "Malibu 2",
    year: 2024,
    numberOfDoors: 4,
    isElectric: false
};
// 3
let person3 = {
    name: "Mak",
    age: 28,
    isStudent: true,
    address: {
        street: "Main St",
        city: "Springfield",
        postalCode: "12345"
    }
};
let student1 = {
    name: "John",
    age: 28,
    grades: [4, 5, 3, 4, 5],
    address: ["Main St", 15]
};
function avarageGrades(arr) {
    let sum = 0;
    arr.forEach(item => {
        sum += item;
    });
    return sum / arr.length;
}
//2 
function getStudentSummary(student) {
    return `${student.name} ${student.age} ${avarageGrades(student.grades)}`;
}
// console.log(getStudentSummary(student1));
// **Mashq 13:** Enum, Type Alias va Intersectionni Aralashtirib Ishlash
// 1
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["Pending"] = 0] = "Pending";
    orderStatus[orderStatus["Shipped"] = 1] = "Shipped";
    orderStatus[orderStatus["Delivered"] = 2] = "Delivered";
    orderStatus[orderStatus["Cancelled"] = 3] = "Cancelled";
})(orderStatus || (orderStatus = {}));
// 5
let customer1 = {
    orderId: 456,
    status: orderStatus.Shipped,
    totalAmount: 150.00,
    customerID: 789,
    name: "Sarah"
};
