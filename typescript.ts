// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = "brown";

//ES6 Template strings
let favouriteQuote: string = `I'm not old, i'm only ${age}`;

// Array
let pets: string[] = ["cat", "dog", "pig"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

// Object
let wizard: object = {
  a: "John"
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ["basketball", 5];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3
}
let sizeName: number = Size.Small;

// Any - !!!!!!! Be Careful
let whatever: any = "aghhhhhhh nooooooooooo!!!";
whatever = basket;

// void
let sing = (): string => {
  console.log("lalalallaalala");
  return "lala";
};

// never
// tests a function if it ever returns something
// a function that doesn't have an end or usually throws an error
let error = (): never => {
  throw Error("ooooops");
};

// interface & type
// interface creates a new name (preferred),
// types does not create a new name
interface RobotArmy {
  count: number;
  type: string;
  magic?: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("FIGHT");
};

fightRobotArmy({ count: 1, type: "dragon" });

let fightRobotArmy2 = (robots: {
  count: number;
  type: string;
  magic: string;
}) => {
  console.log("FIGHT");
};

// type assertions, type override
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as CatArmy;
dog.count;
