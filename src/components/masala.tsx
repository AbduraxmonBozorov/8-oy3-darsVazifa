// 1
interface Person {
    name: string,
    age:number,
    isStudent: boolean
}

// 2
const student: Person = {
    name: "John Doe",
    age: 25,
    isStudent: false
}

// 3
interface Book {
    title: string,
    author: string,
    publishedYear: number
}

// 4

const bokk1: Book = {
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald",
    publishedYear: 1925
}

// -------------------------------------------------------

// 2 Massivlar
//  1
let sonlar: number[] = [1,  2, 3, 4, 5];

// 2
function sumArr(arr: number[]):number{
    let sum=0;
    arr.forEach(item=>{
        sum+=item
    })

    return sum
}
// console.log(sumArr(sonlar));

// 3
let str: string[] = ["apple", "banana", "cherry"];

// 4
function toUpperCase(txt: string[]):string[] {
    let newArr:string[] = [];
    txt.forEach(item=>{
        newArr.push(item.toUpperCase())
    })
    return newArr
}
// console.log(toUpperCase(str));

// ---------------------------------------------------===
// 3. **Tuple**

// 1
let StudentRecord: [string, number, boolean] = ['Alice', 22, true];

// 2
let Coordinate: [number, number] =[10, 20]

// -------------------------------------------------------

//**Mashq 4:** `any` Tipidan Foydalanish

let a: any = 'hello';
let b: any = 22;
let c: any = true;

// 2
let arr2: any = ["hello", 25, false, {name: 'John', age: 32}];

function outPut(arr: any):void{
    arr.forEach(element => {
       console.log(element);
    });
}
// outPut(arr2)

