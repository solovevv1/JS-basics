// ============================ ES6 =====================================================

/* function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  } */


 /*  const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace(); */


/* function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj(); */


  /* const magic = () => {
    return new Date();
  }; */


  /* const magic = () => new Date(); */


 /*  const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  // test your code
  console.log(myConcat([1, 2], [3, 4, 5])); */


  /* const increment = (number, value = 1) => number + value;

  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns 6 */


/*   const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  console.log(sum(1, 2, 3)); // 6 */


  /* let numbers = [-12, 160, 0, -3, 51];
let minNum = Math.min(...numbers);
console.log(minNum); //-12 */


/* const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 

arr2 = [...arr1];  // Change this line

console.log(arr2); */


/* const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today, tomorrow} = HIGH_TEMPERATURES; */


/*   const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
    
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  
  console.log(highToday); // should be 77
  console.log(highTomorrow); // should be 80 */


/*   const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST; */


 /*  let a = 8, b = 6;
[a, b] = [b, a]; */


/* function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source); */


/*   const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  const half = ({ max, min }) => (max + min) / 2.0; */


/*   const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);  */ 


/*   const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return {
      name,
      age,
      gender
    };
    // change code above this line
  };   */


/*   const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  }; */  


/*   class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  const carrot = new Vegetable("carrot");
  console.log(carrot.name); // => should be 'carrot' */
  
  
/*   class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this._fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  } */


 /*  export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
  export { uppercaseString, lowercaseString}; */


/*   import { uppercaseString, lowercaseString } from './string_functions.js';
// add code above this line

uppercaseString("hello");
lowercaseString("WORLD!"); */


/* import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!"); */


/* export default function subtract(x, y) {
    return x - y;
  } */


/*   import subtract from "./math_functions.js";  
  // Only change code above this line
  
  subtract(7,4); */


/* const makeServerRequest = new Promise((resolve, reject) => {

}); */  


/* const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        reject(new Error(`Не удалось загрузить изображение ${src}`));
      };
      img.src = src;
    });
  };
  
  // Использование Promise для загрузки картинки
  loadImage('https://example.com/image.jpg')
    .then((img) => {
      console.log('Картинка загружена успешно', img);
      // Теперь ты можешь сделать что-то с загруженной картинкой, например, показать ее на веб-странице
    })
    .catch((error) => {
      console.error('Ошибка загрузки картинки:', error);
      // Обрабатываем ошибку, например, показываем сообщение об ошибке пользователю
    }); */
  

/*  const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer represents a response from a server
        let responseFromServer;
          
        if(responseFromServer) {
          // Change this line
          resolve("We got the data");
        } else {  
          // Change this line
          reject("Data not received");
        }
      }); */    


   /*    const makeServerRequest = new Promise((resolve, reject) => {
        // responseFromServer is set to true to represent a successful response from a server
        let responseFromServer = true;
          
        if(responseFromServer) {
          resolve("We got the data");
        } else {  
          reject("Data not received");
        }
      });
      
      makeServerRequest.then(result => {
        console.log(result);
      }); */

      

/* const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
})
makeServerRequest.catch(error => {
  console.log(error);
}); */

