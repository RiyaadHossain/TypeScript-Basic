/* ------------------- 1. Data Types ------------------- */

let _id; // Implicit Declearation
let fb_id: any; // Explicit Declearation
fb_id = true;
fb_id = 23423523;

const firstName = "Riyad";
const lastName: string = "Hossain";
let isLoading: boolean;
isLoading = false;

let roll: string | number = 423;
roll = "423";

let device: string | number | boolean; // Union Type
device = "Mobile";
device = 4323523;

const re: RegExp = /\w+/g;

/* ------------------- 2. Function ------------------- */
// 2.1 Optionl & Default param
const sum = (
  a: number,
  b: number,
  c?: string, // Optional param
  d: number = 0 // Default param
): number | string => {
  let result: string | number;
  result = a + b + d;
  if (c) {
    result = a + b + c;
  }
  return result;
};

// 2.2 Function Signature
type mathFunc = (a: number, b: number) => number;

const multiply: mathFunc = (num1, num2) => {
  return num1 * num2;
};

const subtract = (num1: number = 10, num2?: number) => {
  if (typeof num2 !== "undefined") {
    return num1 - num2;
  }
  return num1;
};

subtract(undefined, 5); // To avoid sending param use undefined

// 2.3 Rest param
const sumAll = (a: number, ...numbers: number[]): number => {
  return a + numbers.reduce((prev, curr) => prev + curr);
};

// 2.4 'never' return type
const errorMsg = (msg: string): never => {
  // By default return type is - never
  throw new Error(msg);
};

// 2.5 Custom type guard
const isNumber = (a: any): boolean => {
  return typeof a === "number" ? true : false;
};

// 2.6 Usage of 'never' return type
const showStr = (a: number | string): string => {
  if (typeof a === "number") return "Number";
  if (typeof a === "string") return "String";
  return errorMsg("This should not happen");
  // 'never' return type preventing to compile error as this func return type is 'string'
};

/* ------------------- 3. Array ------------------- */
const anyTypeString = [];
const anyTypeString2: any[] = [];

const stringArr = ["Hello", "how", "are", "you"];
const stringArr2: string[] = ["Hello", "how", "are", "you"];
// X - stringArr.push(34)

const strAndNum = ["Hi", 143];
const strAndNum2: (string | number)[] = ["Hi", 143];
// X - strAndNum2[0](boolean)

const mixedData = ["bye", true, 77];
const mixedData2: (string | boolean | number)[] = ["bye", true, 77];

/* ------------------- 4. Tuple ------------------- */
const myTuple: [string, number, boolean] = ["hello", 143, false];
// X - const myTuple: [string, number, boolean, number] = ['hello', 143, false]
let anArr = ["hello1", 234, true];

myTuple[1] = 777;

anArr = myTuple;
// X - myTuple = Array

/* ------------------- 5. Object & Type & Interface ------------------- */
let myObj = {};
myObj = anArr;

myObj = {
  name: "Riyad",
  age: 22,
};

const alAmin: {
  name: string;
  age: number;
  premeum?: boolean;
} = {
  name: "Jobayer",
  age: 26,
  premeum: true,
};

type Person = {
  name: string;
  age: number;
  premeum?: boolean;
};

/* 
We also can use 'interface' instead of 'type'. Syntax: interface Person {} interface is more preferrable on object & class. 
*/

let jobayer: Person = {
  name: "Jobayer",
  age: 26,
  premeum: true,
};

let sadik: Person = {
  name: "Sadik",
  age: 24,
};

/* type/interface in Function */
const greetPerson = (personObj: Person): string => {
  return `Hello ${personObj.name}`;
};

const personIsPremium = (personObj: Person): string => {
  let result: string;
  /*  
    X - result = personObj.premeum.toString() 
    'personObj.premeum' is possibly 'undefined' 
  */

  result = personObj.name + personObj.premeum;
  return result;
};

/* ------------------- 6. Enum ------------------- */
enum Alphabet {
  A = 1,
  B,
  C,
  D,
  E,
}

// If not assigned the first value- enum Alphabet { A , B, C, D, E }
console.log(Alphabet.C); // 0

// If assigned the first value
console.log(Alphabet.C); // 3

/* ------------------- 7. Alias & Literal Types ------------------- */
// 7.1 Type Alias
type numberOrString = number | string;
type stringOrNumArr = (string | number)[];

let job_id: numberOrString;

type Programmer = {
  name: string;
  age: number;
  devices: stringOrNumArr; // Can be used in another alias
};

// 7.2 Literal Type
let myName: "Riyad";
let userName: "Riyad" | "Jobayer" | "Sadik" | "Al-amin";
userName = "Jobayer";
