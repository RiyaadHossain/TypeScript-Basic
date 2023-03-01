/* ------------------- 9. TS Classes ------------------- */

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

/* ------------------- 10. Index Signature, typeof Assertion & Record utility ------------------- */

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

/* ------------------- 10. TS Generics ------------------- */

// 10.1 Basic Generic Usage
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

// 10.2 Advance Usage
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

// 10.3 Generics in Class
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

