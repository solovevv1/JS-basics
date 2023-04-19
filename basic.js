// =============== Functions ======================================
/* let fly = function(num) {
    for (let i = 0; i < num; i++) {
        console.log("Flying!");
    }
}
let superFly = fly;
superFly(2); */

/* var passengers = [ { name: "Jane Doloop", paid: true },
                   { name: "Dr. Evel", paid: true },
                   { name: "Sue Property", paid: false },
                   { name: "John Funcall", paid: true } ];

function processPassenger(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

function printPassenger(passenger) {
    if (passenger.name && passenger.paid) {
        return(console.log(passenger.name + " has paid"));
    } else {
        return(console.log(passenger.name + " has not paid"))
    }
}

let allCanFly = processPassenger(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly-list");
}

let allPaid = processPassenger(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid");
}

processPassenger(passengers, printPassenger) */


//----------------- Method SORT -------------------------------------------

var products = [ { name: "Grapefruit", calories: 170, color: "red",     sold: 8200 },
                 { name: "Orange",     calories: 160, color: "orange",  sold: 12101 },
                 { name: "Cola",       calories: 210, color: "caramel", sold: 25412 },
                 { name: "Diet Cola",  calories: 0,   color: "caramel", sold: 43922 },
                 { name: "Lemon",      calories: 200, color: "clear",   sold: 14983 },
                 { name: "Raspberry",  calories: 180, color: "pink",    sold: 9427 },
                 { name: "Root Beer",  calories: 200, color: "caramel", sold: 9909 },
                 { name: "Water",      calories: 0,   color: "clear",   sold: 62123 }
];
 
function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}
function printProducts (products) {
    for (let i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name +
                    ", Calories: " + products[i].calories +
                    ", Color: " + products[i].color +
                    ", Sold: " + products[i].sold);
    }
}
products.sort(compareSold);
printProducts(products);

// ================ Event Handling ======================================================

/* function pageLoadedHandler() {
    alert("I'm alive!");
}
window.onload = pageLoadedHandler; */


/* window.onload = init;
function init() {
    // let image = document.getElementById("zero");
    // image.onclick = showAnswer;

    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }        
}

function showAnswer(eventObj) {
    // let image = document.getElementById("zero");
    // image.src = "zero.jpg";

    let image = eventObj.target;
    let name = image.id;
    name = name + ".jpg";
    image.src = name;

    setTimeout(reblur, 3000, image);
}
function reblur(image) {
    let name = image.id;
    name = name + "blur.jpg";
    image.src = name;
} */

/* function timerHandler() {
    alert("Wait for 3 seconds!")
}
setTimeout (timerHandler, 3000); */

/* let tick = true;
function clock() {
    if (tick) {
        console.log("Tick");
        tick = false;
    } else {
        console.log("Tack");
        tick = true;
    }
}
// setInterval(clock, 1000); */



// ================ Arrays Funcitons Head First ==========================================

/* let scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];
    
    let highScore = 0;
    let output;
    for (let i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
        if (scores[i] > highScore) {
        highScore = scores[i];
        }
    }
    console.log("Bubbles tests: " + scores.length);
    console.log("Highest bubble score: " + highScore);

    let bestSolutions = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
        bestSolutions.push(i);
        }
    }
    console.log("Solutions with the highest score: " + bestSolutions); */

   /*  let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
                  34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
                  46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
        function printAndGetHighScore(scores) {
        let highScore = 0;
        let output;
          for (let i = 0; i < scores.length; i++) {
                output = "Bubble solution #" + i + " score: " + scores[i];
                console.log(output);
            if (scores[i] > highScore) {
                highScore = scores[i];
            }
          }
          return highScore;
        }
        function getBestResults(scores, highScore) {
        let bestSolutions = [];
          for (let i = 0; i < scores.length; i++) {
            if (scores[i] == highScore) {
                bestSolutions.push(i);
            }
          }
          return bestSolutions;
        }
        let highScore = printAndGetHighScore(scores);
        console.log("Bubbles tests: " + scores.length);
        console.log("Highest bubble score: " + highScore);
        let bestSolutions = getBestResults(scores, highScore);
        console.log("Solutions with the highest score: " + bestSolutions); */

/* let taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
    };

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

let worthAlook = prequal(taxi)

if (worthAlook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
} */

/* function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    } else {
        return "Invalid password! No secret for you";
    }
}
function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}
let superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit."
};

let secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret); */

/* let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,
    start: function() {
        this.started = true;
        },
    stop: function() {
        this.started = false;
        },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom");
                this.fuel = this.fuel - 1;
            } else {
                alert("Uh oh, out fo fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
            }
        },
    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }
};
// fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop(); */



// ================ CANVAS ============================================

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

// ctx.fillStyle = "Blue";
// ctx.fillRect(0, 0, 100, 100);
// for (let i = 0; i < 5; i++) {
//     ctx.fillRect(i * 10, i * 10, 10, 10);
// }

/* function circle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    ctx.stroke();
}
ctx.lineWidth = 4;
ctx.strokeStyle = "Blue";
circle(100, 100, 30); */

/* let position = 0;
setInterval(function () {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(position, 0, 50, 50);

    position++;
    if (position > 500) {
        position = 0;
    }
}, 30); */

/* let size = 0;
setInterval(function () {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(0, 0, size, size);

    size++;
    if (size > 500) {
        size = 0;
    }
}, 30); */

// ---------------Wild BEE-----------------------------------
/*   function circle(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
  };
  function drawBee(x, y) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Gold";

    circle(x, y, 8, true);
    circle(x, y, 8, false);
    circle(x - 5, y - 11, 5, false);
    circle(x + 5, y - 11, 5, false);
    circle(x - 2, y - 1, 2, false);
    circle(x + 2, y - 1, 2, false);
  };

  function update(coordinate) {
    let offset = Math.random() * 4 - 2;
    coordinate += offset;
     if (coordinate > 500) {
    coordinate = 500;
    }
     if (coordinate < 0) {
    coordinate = 0;
    }
     return coordinate;
    };

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let x = 250;
let y = 250;

setInterval(function () {
ctx.clearRect(0, 0, 500, 500);
drawBee(x, y);
x = update(x);
y = update(y);
 ctx.strokeRect(0, 0, 500, 500);
}, 50); */


// $("body").keydown(function (event) {
//     console.log(event.keyCode);
// });

/* let keyNames = {
    32: "space",
    37: "left",
    38: "up",
    39: "right",
    40: "down"
    };
    $("body").keydown(function (event) {
        console.log(keyNames[event.keyCode]);
    }); */


// ================ OOP ===============================================

/* let dog = {
    name: "Bobic",
    age: 3,
    isAwesome: true
}
console.log(dog.name);

dog.bark = function () {
    console.log("Woof! I am " + this.name + "!");
};
dog.bark(); */

/* function invest() {
    console.log(this.price + " is the price, " + this.buy);
};
let money = {
    price: "$100",
    buy: "buy it!",
    invest: invest
}
money.invest(); */


/* function Car(x, y) {
    this.x = x;
    this.y = y;
};

Car.prototype.draw = function () {
    let carHtml = '<img width=40% src="/tesla.png">';

this.carElement = $(carHtml);

this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y
});

$("body").append(this.carElement);
};

Car.prototype.moveRight = function () {
    this.x += 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

let tesla = new Car(5, 5);
let nissan = new Car(700, 5);
tesla.draw();
nissan.draw();
tesla.moveRight(); */




// ================ Interactive programming ============================

/* let timeUp = function () {
    alert("Time is up!");
};
setTimeout (timeUp, 3000); */

/* let counter = 1;
let printMessage = function () {
    console.log("You are looking at the screen " + counter + "sec already");
    counter++;
};
let intervalId = setInterval(printMessage, 1000);
clearInterval(intervalId); */

/* let leftOffset = 0;
let moveHeading = function () {
    $("#main-heading").offset({ left: leftOffset });

    leftOffset++;

    if (leftOffset > 200) {
        leftOffset = 0;
    }
};
setInterval (moveHeading, 30); */

/* let clickHandler = function (event) {
    console.log("Click! " + event.pageX + " " + event.pageY);
};
$("html").click(clickHandler); */

// ================ DOM jQuery===============================================

/* let headingElement = document.getElementById("main-heading");
console.log(headingElement.innerHTML); */

// let newHeadingText = prompt("Enter a new heading:");
// headingElement.innerHTML = newHeadingText;

// $("#main-heading").text(newHeadingText);

// $("body").append("<p>This is a new paragraph</p>");

/* for (let i = 0; i < 3; i++) {
    let hobby = prompt("Name one your hobby");
    $("body").append("<p>" + hobby + "</p>");
} */

// $("h1").fadeOut(3000);
// $("h1").text("This text will disappear soon").fadeOut(3000);
// $("h1").fadeOut(2000).fadeIn(2000);
// $("h1").slideUp(1000).slideDown(1000);

//================= FUNCTIONS =========================================

/* let myFirstFunction = function () {
    console.log("Hello World!");
};
myFirstFunction(); */

/* let sayHello = function (name) {
    alert("Hello " + name + "!");
};
sayHello("Tom") */

/* let drawCats = function (howManyTimes) {
    for (i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^=");
    }
};
drawCats(5) */

/* let multipleTimes = function (howManyTimes, whatToDraw) {
    for (i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};
multipleTimes(5, ":-)") */

/* let double = function (number) {
    return number * 2;
};
console.log(double(2) + double(3)); */

/* let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};
let randomWords = ["business", "finance", "investment", "leadership"];
console.log(pickRandomWord(randomWords)); */

/* let fifthLetter = function (name) {
    if (name.length < 4) {
        return "short name";
    }  
        return "long name";
};
console.log(fifthLetter("Vlad")); */

/* function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
let result = add(multiply(36325, 9825), 777);
console.log(result) */

// ================ HANGMAN GAME =======================================

/*  Pick a random word
    WHILE the word has not been guessed {
        Show the player current progress
        Get a guess from the player
        IF the player wants to quict the game {
            Quit the game
        }
        ELSE IF the guess is not a single letter {
            Tell the player to pick a single letter
        } 
        ELSE {
            IF the guess is in the word {
                Update the player's progress with the guess
            }
        }
    }
Congratulate the player on guessing the word! */

/* let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
]
// Pick a random word
let word = words[Math.floor(Math.random() * words.length)];

// Set up the answer array
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
let remainingLetters = word.length;

// The game loop
while (remainingLetters > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));

    // Get a guess from the player
let guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
// Exit the game loop
break;
} else if (guess.length !== 1) {
alert("Please enter a single letter.");
} else {
// Update the game state with the guess
for (let j = 0; j < word.length; j++) {
if (word[j] === guess) {
answerArray[j] = guess;
remainingLetters--;
}
}
}
}
// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word); */


// ================ Loops ==============================================

/* let timesToSayHello = 5;
    for (let i = 0; i < timesToSayHello; i++) {
        console.log("Hello!")
} */

/* let animals = ["lion ", "zebra ", "snake ", "tiger ", "bear "];
    for (let i = 0; i < animals.length; i++) {
        console.log("There is " + animals[i] + "in the zoo.");
} */

/* let knowledge = ["HTML", "CSS", "JS", "React"];
    for (let i = 0; i < knowledge.length; i++) {
        alert("Learn " + knowledge[i]);
    } */

/* let name = "VLADIMIR";
    for (i = 0; i < name.length; i++) {
        console.log("There is " + name[i] + " letter in my name.")
    } */

/* for (let x = 3; x < 10000; x = x * 3) {
    console.log(x)
} */

/* let x = 3;
    while (x <= 10000) {
        console.log("Equals to " + x);
        x = x * 3;
    } */
    
/* let name = prompt ("What is your name?");
console.log("Hi, " + name); */

/* let likeReading = confirm("Do you like reading?");
if (likeReading) {
    console.log("Keep it up!")
} else {
    console.log("Well, you better know.")
} */


/* let sheepCount = 1;
while (sheepCount <= 10) {
    console.log("Sheep counted: " + sheepCount + "!");
    sheepCount++;
} 
console.log("hrrrrrrrrrrrrrrrr");


for (let sheepCount = 1; sheepCount <= 10; sheepCount++) {
    console.log("Sheep counted: " + sheepCount + "!");
}
console.log("zzzzzzzzzzzzzz") */



// ================ If constructions ====================================

/* let lemonChicken = false;
let riceCarry = false;
let grilledTuna = true;

if (lemonChicken) {
    console.log("I'm gonna eat that!")
} else if (riceCarry){
    console.log("I'll have that.")
} else if (grilledTuna) {
    console.log("Fine, let's go with that.")
} else {
    console.log("Well, let it be eggs.")
} */

/* let myName = "Vladimir";
console.log("Hi, " + myName);
if (myName.length > 8) {
    console.log("Your name is damn long!")
} else {
    console.log("I wouldn't say that Your name is so damn long!")
} */

/* if (condition) {
    console.log("Something");
} */


// ================ Objects =============================================

/* let myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
    };
console.log(myCrazyObject["some array"][2].number); */

/* let movies = {
    "В поисках Немо": {
        releaseDate: 2003,
        duration: 100,
        actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
        format: "DVD"
    },
    "Звездные войны: Эпизод VI — Возвращение джедая": {
        releaseDate: 1983,
        duration: 134,
        actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
        format: "DVD"
    },
    "Гарри Поттер и Кубок огня": {
        releaseDate: 2005,
        duration: 157,
        actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
        format: "Blu-ray"
    }
    };

    let findingNemo = movies["В поисках Немо"];
    console.log(findingNemo.format); */
    

/* let owedMoney = {};
owedMoney["Джимми"] = 5;
owedMoney["Анна"] = 7;
console.log(owedMoney["Элис"]);
owedMoney["Джимми"] += 3;
console.log(owedMoney["Джимми"]); */

// let vladimir = {name: "Vladimir", lastName: "Solovev", age: 34, bestNumbers: [4, 5, 7, 12] };

/* let anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
let dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
let kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

let friends = [anna, dave, kate];
console.log(friends[1])
// console.log(friends[2].name) */


/* let dinosaurs = [
    { name: "Тираннозавр рекс", period: "Верхнемеловой" },
    { name: "Стегозавр", period: "Верхнеюрский" },
    { name: "Платеозавр", period: "Триасовый" }
    ];
console.log(dinosaurs[1].period) */

/* let website = {};
website ["header"] = "Money";
website ["main"] = "How to make money";
website ["footer"] = "How to invest";
console.log(website); */

/* let website = {};
website.header = "Business";
website.main = "Finance";
website.footer = "Investment";
console.log(website); */



/* let cat = {
    "legs": 3,
    "name": "Bob",
    "color": "Gray"
} */
// console.log(cat["name"]);
// console.log(cat.name);
// console.log(Object.keys(cat));

/* let cat = {
    legs: 3,
    name: "Bob",
    color: "Gray"
} */


// ================ Arrays ==============================

/* console.log(Math.random());
console.log(Math.floor (Math.random() * 10));

let cities = ["Piter", "Cairo", "Istanbul", "Colombo"];
console.log(cities[Math.floor(Math.random() * 4)]);

let phrasrs = [
    "sounds great!",
    "go for it!",
    "you doing great!",
    "keep it up!",
    "you are the best",
    'brilliant'
];
console.log(phrasrs[Math.floor(Math.random() * phrasrs.length)]) */


// alert(cities[randomCity]);

/* let cities = ["Piter", "Cairo", "Istanbul", "Colombo"];

cities[cities.length -1];
// alert(cities[cities.length -1]);

cities.push("Los Angeles");
// alert(cities.length);

cities.unshift("Galle");
// alert(cities);
let lastCities = cities.pop();
// alert(lastCities);
cities.unshift("Los Angeles");
// alert(cities);
cities.shift();
// alert(cities);

let it = ['el1', 'el2', 'el3'];
let they = ['el4', 'el5', 'el6'];
let its = ['el7', 'el8', 'The end of the array'];
let itTheyIts = it.concat(they, its);
// alert(itTheyIts);
// alert(itTheyIts.indexOf('el5'));
// alert(itTheyIts.join());
// alert(itTheyIts.join(" ")); */
 
/* let landmarks = [];
landmarks.push("street");
landmarks.push("bakery");
landmarks.push("busstop");
landmarks.push("supermarket");
landmarks.push("crossroad");
landmarks.push("gym");
// console.log(landmarks);

landmarks.pop();
landmarks.pop();
landmarks.pop();
console.log(landmarks) */

// =============== Basics ==========================================================

/* let hadShower = true;
let hadBackpack = false;
hadBackpack && hadBackpack; */

/* let hasApple = true;
let hasOrange = false;
alert(hasApple || hasOrange); */

/* let isWeekend = true;
let needToShowerToday = !isWeekend;
alert(needToShowerToday); */

/* let isWeekend = false;
let hadShower = true;
let hasApple = false;
let hasOrange = true;
let goToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
alert(goToSchool); */

/* let height = 155;
let heightRestriciton = 150;
alert(height >= heightRestriciton); */

/* let height = 115;
let heightRestriciton = 120;
alert(height <= heightRestriciton); */

/* let mySecretNumber = 4;
let aGuess = 3;
alert(mySecretNumber === aGuess); */

/* let a = 5;
let b = "5";
alert(a == b); */

/* let ageEntry = 12;
let acompanied = true;
let boy = 12;
alert(boy >= ageEntry); */


// "asdfasdfasdfasdfasdfasdf".length;

/* let js = "JavaScript";
alert(js.length); */


/* const let
const min = 0;
const max = 100;
const attCount = 10; */

/* function getUserName() {
    const UserName = prompt("Hi friend");
    return UserName();
} */

// const UserName = getUserName();