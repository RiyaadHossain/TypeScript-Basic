"use strict";
/* ------------------- 1. Data Types ------------------- */
let _id; // Implicit Declearation
let fb_id; // Explicit Declearation
fb_id = true;
fb_id = 23423523;
const firstName = "Riyad";
const lastName = "Hossain";
let isLoading;
isLoading = false;
let roll = 423;
roll = "423";
let device; // Union Type
device = "Mobile";
device = 4323523;
const re = /\w+/g;
/* ------------------- 2. Function ------------------- */
const sum = (a, b) => {
    return a + b;
};
/* ------------------- 3. Array ------------------- */
const anyTypeString = [];
const anyTypeString2 = [];
const stringArr = ["Hello", "how", "are", "you"];
const stringArr2 = ["Hello", "how", "are", "you"];
// X - stringArr.push(34)
const strAndNum = ["Hi", 143];
const strAndNum2 = ["Hi", 143];
// X - strAndNum2[0](boolean)
const mixedData = ["bye", true, 77];
const mixedData2 = ["bye", true, 77];
/* ------------------- 4. Tuple ------------------- */
const myTuple = ['hello', 143, false];
// X - const myTuple: [string, number, boolean, number] = ['hello', 143, false]
let anArr = ['hello1', 234, true];
myTuple[1] = 777;
anArr = myTuple;
// X - myTuple = Array
