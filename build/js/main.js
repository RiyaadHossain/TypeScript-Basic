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
const sum = (a, b, c, d = 0) => {
    let result;
    result = a + b + d;
    if (c) {
        result = a + b + c;
    }
    return result;
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
const myTuple = ["hello", 143, false];
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
const alAmin = {
    name: "Jobayer",
    age: 26,
    premeum: true,
};
/*
We also can use 'interface' instead of 'type'. Syntax: interface Person {} interface is more preferrable on class.
*/
let jobayer = {
    name: "Jobayer",
    age: 26,
    premeum: true,
};
let sadik = {
    name: "Sadik",
    age: 24,
};
/* type/interface in Function */
const greetPerson = (personObj) => {
    return `Hello ${personObj.name}`;
};
const personIsPremium = (personObj) => {
    let result;
    /*
      X - result = personObj.premeum.toString()
      'personObj.premeum' is possibly 'undefined'
    */
    result = personObj.name + personObj.premeum;
    return result;
};
/* ------------------- 6. Enum ------------------- */
var Alphabet;
(function (Alphabet) {
    Alphabet[Alphabet["A"] = 1] = "A";
    Alphabet[Alphabet["B"] = 2] = "B";
    Alphabet[Alphabet["C"] = 3] = "C";
    Alphabet[Alphabet["D"] = 4] = "D";
    Alphabet[Alphabet["E"] = 5] = "E";
})(Alphabet || (Alphabet = {}));
// If not assigned the first value- enum Alphabet { A , B, C, D, E }
console.log(Alphabet.C); // 0
// If assigned the first value
console.log(Alphabet.C); // 3
