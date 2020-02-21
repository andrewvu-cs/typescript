// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = "brown";
//ES6 Template strings
var favouriteQuote = "I'm not old, i'm only " + age;
// Array
var pets = ["cat", "dog", "pig"];
var pets2 = ["lion", "dragon", "lizard"];
// Object
var wizard = {
    a: "John"
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ["basketball", 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
// Any - !!!!!!! Be Careful
var whatever = "aghhhhhhh nooooooooooo!!!";
whatever = basket;
// void
var sing = function () {
    console.log("lalalallaalala");
    return "lala";
};
// never
// tests a function if it ever returns something
// a function that doesn't have an end or usually throws an error
var error = function () {
    throw Error("ooooops");
};
var fightRobotArmy = function (robots) {
    console.log("FIGHT");
};
fightRobotArmy({ count: 1, type: "dragon" });
var fightRobotArmy2 = function (robots) {
    console.log("FIGHT");
};
var dog = {};
dog.count;
//function
var fightRobotArmy3 = function (robots) {
    console.log('Fight');
};
var fightRobotArmy4 = function (robots) {
    console.log("FIGHT");
    return 5;
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAWWR');
console.log(lion.greet());
