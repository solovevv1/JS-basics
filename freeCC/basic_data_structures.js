// Convert Celsius to Fahrenheit
/* function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
  
  convertCtoF(30); */


// Reverse a String  
/* function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello"); */


// Factorialize a Number
/* function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num-1)
  } 
}

factorialize(5); */


// Find the Longest Word in a String
/* function findLongestWordLength(str) {
  let stringArray = str.split(' ');
  let longWord = 0;
  for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i].length > longWord) {
        longWord = stringArray[i].length
      }
  }
  return longWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); */


// Return Largest Numbers in Arrays
/* function largestOfFour(arr) {
  return arr.map(subarr => subarr.reduce((a, b) => Math.max(a, b)));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); */


// Confirm the Ending
/* function confirmEnding(str, target) {
  // return str.slice(str.length - target.length) === target; 
  
  return str.endsWith(target);
}

confirmEnding("Bastian", "n"); */


// Repeat a String Repeat a String
/* function repeatStringNumTimes(str, num) {
  let storeString = "";
  for (let i = 0; i < num; i++) {
    storeString += str
  }
  return storeString;
  // return str.repeat(num)
}

repeatStringNumTimes("abc", 3); */


    // Truncate a String
/* function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
  // return str.length > num ? str.slice(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); */ 


    // Finders Keepers
/* function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i]
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0); */


// Boo who
/* function booWho(bool) {
  if (typeof bool == 'boolean') {
    return true;
  }
  return false;
}

booWho(null); */


// Title Case a Sentence
/* function titleCase(str) { 
  return str.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

titleCase("I'm a little tea pot"); */


// Slice and Splice
/* function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)]
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); */

/* function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
} */


// Where do I Belong
/* function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b); //min -> max

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}

getIndexToIns([40, 60], 50); */


// Mutations
/* function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]); */


// Chunky Monkey
/* function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); */

