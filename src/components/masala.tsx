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
function errr(txt: string):never{
    throw new Error(txt)
}
// errr();

// 2
function errorFunction(): never{
    while(true){
        console.log("Error");
    }
}
// errorFunction()

// **Mashq 7:** Funksiyalarni Yozish

// 1
function addNumbers(num1:number, num2:number): number{
    return num1+num2;
}
// console.log(addNumbers(1,2));

// 2
function formatDate(txt:string): string{
    let arr=txt.split(".");
    let result=`${arr[2]}-${arr[1]}-${arr[0]}`
    return result
}
// console.log(formatDate("16.09.2024"));

// **Mashq 8:** `Enum`dan Foydalanish

// 1
enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// 2
function printDay(a: any): number{
    return a
}
// console.log(printDay(DaysOfWeek.Friday));

// **Mashq 9:** Intersection Tiplari

// 1
interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
    department: string;
}

type Worker1 = Person & Employee;

let person1: Worker1 = {
    name: "John",
    age: 35,
    employeeId: 14,
    department: "Engineer" 
};
// console.log(person1);

// **Mashq 10:** Interfeyslar
// 1
interface Vehicle {
    make: string,
    model: string,
    year: number
}

// 2
interface Car extends Vehicle {
    numberOfDoors: number,
    isElectric: boolean
}

// 3
let car1: Car = {
    make: "CHEVROLET",
    model: "Malibu 2",
    year: 2024,
    numberOfDoors: 4,
    isElectric: false
}

// **Mashq 11:** Type Alias

type Address = {
    street: string,
    city: string,
    postalCode: string
}

interface Person {
    name: string,
    age: number,
    isStudent: boolean,
}

// 2
type PersonWithAddress = Person & {address: Address}

// 3
let person3: PersonWithAddress = {
    name: "Mak",
    age: 28,
    isStudent: true,
    address: {
        street: "Main St",
        city: "Springfield",
        postalCode: "12345"
    }
}
// console.log(person3);

// **Mashq 12:** Obyekt, Funksiya va Tupleni Aralashtirib Ishlash
// 1
interface Student {
    name: string,
    age: number,
    grades: number[],
    address: [string, number]
}
let student1: Student = {
    name: "John",
    age: 28,
    grades: [4,5,3,4,5],
    address: ["Main St", 15]
}

function avarageGrades(arr: []): number{
    let sum=0;
    arr.forEach(item=>{
        sum+=item
    })
    return sum/arr.length
}

//2 
function getStudentSummary(student: any):string{
    return `${student.name} ${student.age} ${avarageGrades(student.grades)}`
}
// console.log(getStudentSummary(student1));

// **Mashq 13:** Enum, Type Alias va Intersectionni Aralashtirib Ishlash

// 1
enum orderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled
}

// 2
interface Order {
    orderId: number,
    status: orderStatus,
    totalAmount: number
}

// 3
interface Customer {
    customerID: number,
    name: string
}

// 4
type CustomerOrder = Order & Customer

// 5
let customer1: CustomerOrder = {
    orderId: 456,
    status: orderStatus.Shipped,
    totalAmount: 150.00,
    customerID: 789,
    name: "Sarah"
}