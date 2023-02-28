/* ------------------- 9. TS Classes ------------------- */
class Individual {
  //   name: string;
  //   age: number;
  //   occupation: string;
  //   exp: number;

  // Don't need to write explicitly in the above if you define the type like following
  constructor(
    public readonly name: string,
    readonly age: number,
    private occupation: string, // accessible within class
    protected exp: number  // accessible within class & subclasses
  ) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.exp = exp;
  }

  public getOccupation() {
    return `${this.name} is a ${this.occupation}`;
  }
}

const Riyad = new Individual("Riyad", 22, "St Engineer", 2);
console.log(Riyad.name);
console.log(Riyad.getOccupation());
// console.log(Riyad.occupation) - Property 'occupation' is private and only accessible within class 'Individual'
// console.log(Riyad.exp) - Property 'exp' is protected and only accessible within class 'Individual' and its subclasses

class Engineer extends Individual {
  constructor(
    name: string,
    age: number,
    occupation: string,
    exp: number,
    readonly lang: string
  ) {
    super(name, age, occupation, exp);
    this.lang = lang;
  }

  getExp() {
    return `I've ${this.exp} years of exp`;
  }
}


