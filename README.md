![This is an image](https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo-1024x576.png)

# TypeScirpt 
> TypeScript is a free and open source high-level programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.

1. [Data Types](#1-data-types)
2. James Monroe
3. John Quincy Adams

### 1. Data Types 
```
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
```

### 2. Function
```
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
```

### 3. Array
```
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
```

### 4. Tuple
```
const myTuple: [string, number, boolean] = ["hello", 143, false];
// X - const myTuple: [string, number, boolean, number] = ['hello', 143, false]
let anArr = ["hello1", 234, true];

myTuple[1] = 777;

anArr = myTuple;
// X - myTuple = Array
```

### 5. Object & Type & Interface
```
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
```

### 6. Enum
```
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
```

### 7. Alias & Literal Types
```
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
```

### 8. Type Assertion
```
type strType = string
type strOrNum = string | number
type tsType = 'TypeScript'

let ts: strType = 'TypeScript'
let ts2 = ts as strType // less specific
let typeScript = ts as tsType // more specific

let myStr = <strType>'Riyad'
let myStr2 = <number | string>'Riyad'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') return a + b
  return '' + a + b
}
let myVal: string = addOrConcat(2, 2, 'concat') as string // To prevent getting error

// The DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')
img.src
myImg.src

const year = document.getElementById("year") as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear
```

### 9. TS Classes 
```
// 9.1 Basic Class__________
class Individual {
  //   name: string;
  //   age: number;
  //   occupation: string;
  //   exp: number;

  // Don't need to write explicitly in the above if you define the type like following
  constructor(
    public readonly name: string,
    readonly age: number,
    protected exp: number, // accessible within class & subclasses
    private occupation: string // accessible within class
  ) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.exp = exp;
  }

  getOccupation() {
    return `${this.name} is a ${this.occupation}`;
  }
}

const Riyad = new Individual("Riyad", 22, 2, "St Engineer");
console.log(Riyad.name);
console.log(Riyad.getOccupation());
// console.log(Riyad.occupation) - Property 'occupation' is private and only accessible within class 'Individual'
// console.log(Riyad.exp) - Property 'exp' is protected and only accessible within class 'Individual' and its subclasses

// 9.2 Subclass_________
class Engineer extends Individual {
  constructor(
    name: string,
    age: number,
    occupation: string,
    exp: number,
    readonly lang: string = "TypeScript" // Default Value
  ) {
    super(name, age, exp, occupation);
    this.lang = lang;
  }

  getExp(): string {
    return `I've ${this.exp} years of exp`;
  }
}

const SadikEngeer = new Engineer("Sadik", 25, "Std Engeer", 2);

console.log(SadikEngeer.getExp());

// 9.3 Interface__________
interface Player {
  name: string;
  age: number;
  play(action: string): string;
}

class Cricketer implements Player {
  constructor(public name: string, public readonly age: number) {
    this.name = name;
    this.age = age;
  }

  play(action: string): string {
    return `${this.name} is ${action}`;
  }
}

const Mashrafee = new Cricketer("Mashrafee", 32);
console.log(Mashrafee.play("bowling")); // Mashrafee is bowling

// 9.5 Static____________
class People {
  static count: number = 0;
  static getCount(): number {
    return People.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++People.count; // accessable because of static type
  }
}

const John = new People("John");
const Steve = new People("Steve");
const Amy = new People("Amy");

console.log(John.id); // 1
console.log(Steve.id); // 2
console.log(Amy.id); // 3
console.log(People.count); // 3

// 9.6 Setter & Getter___________
class School {
  private students: string[];
  constructor() {
    this.students = [];
  }

  public get student(): string[] {
    return this.students;
  }

  public set student(data: string[]) {
    this.students = data;
  }
}

const MySchool = new School();
MySchool.student = ["Neil Young", "Led Zep"];
console.log(MySchool.student);
MySchool.student = [...MySchool.student, "ZZ Top"];
console.log(MySchool.student);
// MySchool.student = ['Van Halen', 5150] - must be string data
```

### 10. Index Signature, typeof Assertion & Record utility 
```
// 10.1 Index Signature & keyof Assertion______________
interface income {
  salary: number;
  sidehustle: number;
  passiveIncome: number;
}

const riyadIncome: income = {
  salary: 2000,
  sidehustle: 100,
  passiveIncome: 50,
};

const prop: string = "salary";
// console.log(riyadIncome[prop]) - Error

for (const key in riyadIncome) {
  console.log(`${key}: ${riyadIncome[key as keyof income]}`); // keyof Assertion (1st way)
}

const getValue = (obj: income, key: keyof income) => {
  console.log(`${key}: ${obj[key]}`);
};

Object.keys(riyadIncome).map((key) => {
  console.log(riyadIncome[key as keyof typeof riyadIncome]); // keyof Assertions (2nd way)
});

interface income2 {
  [index: string]: number; // To access dynamically
  salary: number;
  sidehustle: number;
  passiveIncome: number;
}

const riyadIncome2: income2 = {
  salary: 2000,
  sidehustle: 100,
  passiveIncome: 50,
};

const prop2: string = "salary";
console.log(riyadIncome2[prop2]);
console.log(riyadIncome2["hello"]); // Undefined

// 10.2 Record______________

// interface Incomes {
//     [key: string]: number
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;
/* Similar to-
type Incomes = {
    salary: number;
    sidehustle: number;
    bonus: number;
} */

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

const prop3: string = "bonus";
console.log(monthlyIncomes["bonus"]);
// console.log(monthlyIncomes[prop3]) Can't do that

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
```

### 11. TS Generics 
```
// 11.1 Basic Generic Usage
const myFunc = <T>(arg: T): T => {
  return arg;
};

interface ObjInterface<T> {
  value: T;
}

interface HasID {
  id: number;
}

const myObj2 = <T extends HasID>(arg: T): T => {
  return arg;
};

// console.log(myObj2({ name: "Riyad" })) - Have to provide id property as extending from HasID
console.log(myObj2({ id: 23, name: "Riyad" }));

// 11.2 Advance Usage
const getUserProp = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

const allEmails = getUserProp(usersArray, "email"); // It's showing suggetions based on its dynamic arguments

// 11.3 Generics in Class
class Country<T> {
  private resources: T;
  constructor(resources: T) {
    this.resources = resources;
  }

  get data(): T {
    return this.resources;
  }

  set data(arg: T) {
    this.resources = arg;
    return;
  }
}

const Bangladesh = new Country("DB"); // const Bangladesh: Country<string>
console.log(Bangladesh.data);
Bangladesh.data = "USA";
// Bangladesh.data = 12 - Type 'number' is not assignable to type 'string'

const myCountry = new Country<string | number>("Canada");
myCountry.data = 42;
console.log(myCountry.data);
```

### 12. Utility ------------------- */
```
// 12.1 Partial
interface student {
  name: string;
  roll: number;
  age: number;
  dept?: string;
}

const personalInfo: Partial<student> = { name: "Riyad", age: 22 };

const updateStInfo = (student: student, newInfo: Partial<student>): student => {
  return { ...student, ...newInfo };
};

const sadikInfo: student = {
  name: "Sadik",
  roll: 22,
  age: 24,
};

const sadikUpdated = updateStInfo(sadikInfo, { dept: "CSE" });

// 12.2 Required & Readonly
const storeStudent = (student: Required<student>): student => {
  return student;
};

const jkInfo: student = {
  name: "Sadik",
  roll: 22,
  age: 24,
};

const jk: Readonly<student> = storeStudent({ ...jkInfo, dept: "CSE" }); // For Required- have to pass optional prop
const jkAge = jk.age;
// jk.age = 22 - Cannot assign to 'age' because it is a read-only property

// 12.3 Record
const income: Record<string, number> = {
  sadik: 15000,
  jk: 20000,
  shorif: 50000,
};

type Hero = "Superman" | "Spiderman" | "Hulk";
type Power = "spider-net" | "stronger" | "much-power";

const superHeroes: Record<Hero, Power> = {
  Superman: "much-power",
  Spiderman: "spider-net",
  Hulk: "much-power",
};

// 12.4 Pick & Omit
type personalInfo = Pick<student, "name" | "age">;
type dept = Omit<student, "age" | "roll">;

const student1: personalInfo = { name: "someone", age: 23 };
const student2: dept = { name: "someone", dept: 'sth' };

// 12.5 Exclude & Extract
type serial = Exclude<Hero, "age">
type age = Extract<Power, "age" | "dept">

// 12.6 NonNullable
type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// 12.7 ReturnType
const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign> // can define types with the help of another func

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)

// 12.8 Parameters
type paramType = Parameters<typeof createNewAssign> // type paramType = [title: string, points: number]

const assignArgs: paramType = ["Generics", 100]
const tsAssign2: NewAssign = createNewAssign(...assignArgs)

// 12.9 Awaited
interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))
```