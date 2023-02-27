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
const sum = (a: number, b: number): number => {
  return a + b;
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
const myTuple: [string, number, boolean] = ['hello', 143, false]
// X - const myTuple: [string, number, boolean, number] = ['hello', 143, false]
let anArr = ['hello1', 234, true]

myTuple[1] = 777

anArr = myTuple
// X - myTuple = Array