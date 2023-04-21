// ======================= RegExs ===========================================

/* let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); */


/* let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding); */


/* let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // searching more than one regex
let result = petRegex.test(petString); */


/* let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // ignor case
let result = fccRegex.test(myString); */


/* let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); // extracting */


/* let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // more than one and ignore case
let result = twinkleStar.match(starRegex); // extracting */

/* let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // it matches the strings run, sun, fun, pun, nun, and bun
let result = unRegex.test(exampleStr); */


/* let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); */


/* let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); */


/* let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); */


/* let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // characters that you do not want to match
let result = quoteSample.match(myRegex); */


/* let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex); */


// let chewieRegex = /Aa*/; // Change this line
// let result = chewieQuote.match(chewieRegex);


/* let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // returns the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".
let result = text.match(myRegex); */

/* let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // search for patterns at the beginning of strings
let result = calRegex.test(rickyAndCal); */


/* let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; //  search for patterns at the end of strings
let result = lastRegex.test(caboose); */


/* let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // ( \w ) shortcut is equal to [A-Za-z0-9_]
let result = quoteSample.match(alphabetRegexV2).length; */

/* let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // the same as [^A-Za-z0-9_]
let result = quoteSample.match(nonAlphabetRegex).length; */


/* let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // equal to the character class [0-9]
let result = movieName.match(numRegex).length; */


/* let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // search for non-digits [^0-9]
let result = movieName.match(noNumRegex).length; */


/* // Usernames can only use alpha-numeric characters.
// The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// Username letters can be lowercase and uppercase.
// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/gi; // Change this line
let result = userCheck.test(username); */


/* let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // search for whitespace, tab, form feed, and new line characters
let result = sample.match(countWhiteSpace); */


/* let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Search for non-whitespace
let result = sample.match(countNonWhiteSpace); */


/* let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr); */


/* let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // specify the lower number of patterns with no upper limit
let result = haRegex.test(haStr); */


/* let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // specify a certain number of patterns
let result = timRegex.test(timStr); */


/* let favWord = "favorite";
let favRegex = /favou?rite/; // think of this symbol as saying the previous element is optional.
let result = favRegex.test(favWord); */


/* let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; //  match passwords that are greater than 5 characters long, and have two consecutive digits.
let result = pwRegex.test(sampleWord); */


/* let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/g; // Change this line
let result = myRegex.test(myString); */


/* let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; //match a string that consists of only the same number repeated exactly three times separated by single spaces.
let result = reRegex.test(repeatNum); */


/* let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // search for each word in the string one two three
let replaceText = "$3 $2 $1"; // replaceText variable to replace one two three with the string three two one
let result = str.replace(fixRegex, replaceText); */


/* let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; //select
let result = hello.replace(wsRegex, ""); // remove whitespace at the beginning and end of strings. */


