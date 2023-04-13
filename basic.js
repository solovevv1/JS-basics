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

/* var myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
    };
console.log(myCrazyObject["some array"][2].number); */

/* var movies = {
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
    

/* var owedMoney = {};
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

/* var hadShower = true;
var hadBackpack = false;
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