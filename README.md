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
const sum = (
  a: number,
  b: number,
  c?: string,
  d: number = 0
): number | string => {
  let result: string | number;
  result = a + b + d;
  if (c) {
    result = a + b + c;
  }
  return result;
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
We also can use 'interface' instead of 'type'. Syntax: interface Person {} interface is more preferrable on class. 
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
