// ================================ OOP ===============================

/* function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Saver", "brown"); */


/* function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
// Only change code below this line
let myHouse = new House(4);
myHouse instanceof House; */


// The following code adds all of the own properties of duck to the array ownProps:
/* let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); */


// Add the own properties of canary to the array ownProps.
/* function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
} */


/* function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
} */


/* function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line

Dog.prototype.isPrototypeOf(beagle); */


/* function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }

}; */


// Object.create(obj) creates a new object, and sets obj as the new object's prototype
/* function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype); */


/* function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!");
};
// Only change code above this line

let beagle = new Dog(); */


// the Immediately Invoked Function Expression (IIFE)
/* function makeNest() {
    console.log("A cozy nest is ready");
}
makeNest();

(function () {
    console.log("A cozy nest is ready")
})(); */