// let sum = (3 + 5);
// console.log(sum);

// let firstName = 'Sahil';
// let lastName = 'Singh';

// let greeting = 'Hello!'+ ' '  + firstName + ' ' + lastName;

// console.log(greeting);

// let a = true;
// let b = false;

// a||b
// console.log(a||b);

// a&&b;
// console.log(a&&b);

// let math = (3+5) * 11;

// console.log(math);
// //alert(math);

// '88' == 88;
// // alert('88' == 88);

//  '88'=== 88;
// //alert('88' === 88);

// 88 > 90
// console.log(88 > 90);

// 88 < 90;
// console.log(88 < 90);

// '2' == 2;

// console.log(2 =='2');
// 2 === '2'

// console.log(2 === '2');

// 10%3;
// console.log(10%3);

// let string = 'strings';
// let numberInteger = 123;
// let numberFloat =  1.230;
// let trueValue = true;
// let undefinedValue;

// console.log(typeof(string));

// console.log(typeof(numberInteger));

// console.log(typeof(numberFloat));

// console.log(typeof(trueValue));

// console.log(typeof(undefinedValue));

// function addNumber(a,b){
//     return a + b;
// }
// addNumber(25,5);
// console.log(addNumber(25,5));

// addNumber(17,25);
// console.log(addNumber(17,25));

// console.log('===Control Flow====');

// console.log('===Randomize the time variable====');
// let timeOfDay = Math.floor(Math.random(1)*24);
// console.log('===If Statement====');
// if(timeOfDay < 10){
//     console.log('Hola, good-morning!!');
// }else if(timeOfDay < 13){
//     console.log('Hola, buenas-tardes!!!');
// }else{
//     console.log('Hola, buenas noches!!');
// }

// let range = (a, b) => {
//  let newArr = [];
//  for (let i = a; i <=b; i++) {

//      newArr.push(i);

//  }
//  return newArr
// }
// console.log(range(1,10));

// let counter = 0;

// const sumNum = (arr) => {
//     for ( let i = 0; i < arr.length; i++ ) {
//         counter += arr[i];
//     }
//     return counter;

// }

// console.log(sumNum(range(1,10)));

// function isPotentialFriend(set1, set2) {
//     var length;
//     let counter = 0;
//         if (set1.length < set2.length) {
//             length = set1.length
//         }else{
//             length = set2.length
//         }
//         for( let i = 0; i < length; i++) {
//             if(set1.includes(set2[i])){
//                 console.log("Here is set one, ", set1);
//                 console.log("Here is set two, ", set2);
//                 console.log("Before Iteration",counter);
//                 counter++
//                 console.log( "After Iteration",counter);
//             }
//         }
//         if ((set1.length === 1 && set2.length === 1) && counter === 1){
//             console.log("Short Length", set1.length, set2.length)
//             return true;
//         }else if (counter >= 2  ) {
//             return true
//         }else {
//             return false
//         }
//     };

//      function isPotentialFriend([a], [set2]) {
//          let difference  = a.filter(item => set2.indexOf(item) !== -1);
//          if (difference >= 2 ){
//              return true
//          } else if (set1.length && set2.length && difference === 1) {
//              return true
//          } else {
//              return false
//          }
//      }

//  console.log( isPotentialFriend( ["sports", "music", "chess"],
//  ["coding", "music", "netflix", "chess"]));
//  console.log(isPotentialFriend(  ["cycling", "technology", "drawing", "doctor", "abc", "Xyz", "LSM"],
//  ["dancing", "drawing","doctor"]))

//  isPotentialFriend(
//     ["history"],
//     ["history"]
//   )

// var reverse = function (x) {
//     var minRange = Math.pow(-2, 31)
//     var maxRange = Math.pow(2, 31) - 1

//     var isNegative = false;
//     if (x < 0) {
//       isNegative = true;
//       x = (x - x - x);
//     }
//     var result = Number(x.toString().split('').reverse().join(''));
//     (isNegative) ? result = (result - result - result) : result;
//     if (result < minRange || result > maxRange) {
//       return 0
//     } else {
//       return result;
//     }

//   };

// console.log(reverse(01235654))

// function reverse(bool) {
// 	if (bool === true) {
// 		return false
// 	}else if (bool === false) {
// 		return true
// 	}else {
// 		return "boolean expected"

// 	}

// }

// console.log(reverse(0));

// function smallerNum(n1, n2) {

//  return Math.min(n1,n2);

// }
// console.log(smallerNum('1','2'));

// function redundant(str) {
// return () => str

// }

// console.log(redundant('Hello'))

// const evenArr = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0 ) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(evenArr([5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5]));

// const trianglePat = (arr) => {
//     let str = "*";
//     for  (let i = 1; i < arr; i++) {
//        console.log(str.repeat(i))
//     }
// }
// trianglePat(5);

// const div = document.createElement('div');

// // create a p object with some text content in it
// const p = document.createElement('p');
// p.textContent = 'Hi there';

// // put the p object inside the div object
// div.appendChild(p);

// // let's see how our div object looks like
// console.log(div);

// function charCount(myChar, str) {
//     let counter = 0;
//     console.log("THe target",myChar);
//     let splitStr = str.split("");
//     console.log("Split Array ",splitStr);
// 	for (let i = 0; i < splitStr.length; i++) {
// 		if (myChar === splitStr[i]) {
// 			counter++
// 		}
// 	}
// 	return counter;

// }

// console.log(charCount('b', 'big fat bubble'));

// function sortByLength(arr) {
// 	return arr.sort((a,b)=> {
// 		return a.length - b.length
//  	});

// };

// const str = (s) => {
//      console.log(s.split(" "));
// }

// str("big fat bubble");

// function bomb(str) {
//     console.log(str)
//     let split = str.split(" . ");
//     console.log(split);
// 	for (let i = 0; i< split.length; i++) {
// 		if (split[i].toLocaleLowerCase().includes('bomb')) {
// 			return "Duck!!!"
// 		}else {
// 	return "There is no bomb, relax."
// 		}
// 	}
// }

// console.log(bomb("There is a boMb."));

// const printPatterns = (a)=> {
// 	console.log(a);
// 	for (let i =1; i<=a; i++) {
// 		for (let k = 1; k <= (a-i); k++){
// 			document.write('&nbsp;');
// 		}

// 		for(let j = 1; j <=i; j++ ) {
// 	document.write(i)
// 		}
// 	document.write('<br/>');
// 	}
// }

// console.log(printPatterns(6));

// function sevenBoom(arr) {

// let ifSeven = arr.filter(num => num === 7)

// if (ifSeven.length > 0 ){
// 	return "Boom"
// }else {
// 	return "there is no 7 in the array"
// }
// }

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 	]))

// function doubleChar(str) {
// let split = str.split('');
// console.log(split);
// let newStr = [];
// for (let i = 0; i < split.length; i++) {
//  let double 	= split[i].repeat(2);
//  newStr.push(double);
//  console.log(newStr, "After operations")
// }
// return newStr.join("");

// }

// console.log(doubleChar('hello'))

// function getAbsSum(arr) {
// 	let counter = 0;
// 	for (let i = 0; i < arr.length; i++ ) {
// 		let value = Math.abs(arr[i]);
// 		console.log(value);
// 		counter += value
// 	}
// 	return counter;
// }

// console.log(getAbsSum([2, -1, 4, 8, 10]))

// function sortByLength(arr) {
// 	let newArr = arr.sort((a,b)=> {
// 	return	a.length - b.length
//    })
// 	return newArr
// }

// console.log(sortByLength(["Google", "Apple", "Microsoft"]));

// function largestSwap(num) {
// 	let newNum  = num.toString().split('').reverse().join('');
// 	console.log(Number(newNum))
// 	if (num > Number(newNum)){
// 		return true
// 	}else{
// 		return false;
// 	}

// }

// console.log(largestSwap(42));

// function remove_abc(str) {
// 	let regEx = /[a,b,c]/g;
// 	let newStr =  str.replace(regEx, '');
// 	console.log(newStr);
// 	if (newStr === '') {
// 		return null
// 	}else {
// 		return newStr;
// 	}
// }

// console.log(remove_abc("this might be hard"));

// function isAvgWhole(arr) {
//   console.log(arr);

//   let sum = arr.reduce((a, b) => {
//     return a + b;
//   }, 0);
//   console.log(sum);
//   let divider = arr.length;
//   console.log(divider);
//   console.log();
//   average = sum / divider;
//   console.log("SUm", sum, "DIVIDER", divider, average, "SUM, DIVIDER, Avegare");

//   return Number.isInteger(average);
// }

// console.log(isAvgWhole([1, 1, 1, 1]))

// //this function returns a new array with the two values from the first and the second inputs,
// function zipIt(women, men) {

// 		 if (women.length !== men.length) {
// 			return "sizes don't match"
// 		}else {
// 		return	women.map((woman, index)=>{woman, men[index]})
// 		}
// 		return newArr;

// 	}

function findLargestNums(arr) {
  console.log(arr);
  let bigArr = arr.map((num, i) => {
    return Math.max(...num);
  });
  console.log(bigArr);
  return bigArr;
}
console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ])
);

// 	function secondLargest(arr) {
// 		let sort = arr.sort((a,b)=> b - a)
// 		return sort[1];
// 	}
// 	console.log(secondLargest([10, 40, 30, 20, 50]));

// 	//find the max possible total for 5 out of 10 given numbers;

// 	function maxTotal(nums) {
// 		let counter = 0;
// 		let sorted = nums.sort((a,b) => b - a)
// 		for (let i=0; i < 5; i++) {
// 			counter+= sorted[i];
// 		}
// 		return counter;
// 	}

// //Write a function that takes a string as an argument and returns the left most digit in the string.
// 	function leftDigit(num) {
// 		let regex = /\d+/;
// 		 let match = parseInt(num.match(regex));
// 			return match;
// 		}

// 		//Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.

// 		function sortDescending(num) {
// 			split = num.toString().split("").sort((a,b)=> {return b-a}).join("");
// 				return Number(split);
// 			}

// 	//Create a function that takes an array that represent a Binary Tree and a value and return true if the value is in the tree and, false otherwise.

//   // Use .flat() method to flatten the arrays.
//   // could also have used the .includes() method to find the value instead of the for loop.

// 	function valueInTree(tree, val) {
//     let counter = 0;
//     let flat = tree.flat(Infinity);
//     console.log(flat);
//     for (let i = 0; i < flat.length; i++) {
//       console.log(flat[i], "In for Loop");
//       if (flat[i] === val) {
//         counter++;
//       }
//     }
//     if (counter > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// //console.log(valueInTree([3, [7, [1, null, null], [8, null, null]], [5, null, [4, null, null]]], 4));

// //Create a function that takes a number as an argument and returns the highest digit in that number.
// // ... remember the spear syntax. The methods of the Math object can be used on an array of strings awe well.

// function highestDigit(number) {
// 	let highest = number.toString().split("");
// 	let top = Math.max(...highest)
// 	return top;
// }

// console.log(highestDigit(7495037));

// //Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.
// //Examples
// //calculateDifference({ "baseball bat": 20 }, 5) ➞ 15

// function calculateDifference(obj, limit) {
// 	let counter = 0;
// 	let num = Object.values(obj);
// 	for (let i = 0; i < num.length; i++) {
// 		if (typeof num[i] === "number") {
// 			counter+=num[i]
// 		}
// 	}
// 	let difference = counter - limit;
// 	return difference
// }

// console.log(calculateDifference({ skate: 10, painting: 20 }, 19) );

// //Remove vowels from the string

// function removeVowels(str) {
// 	let regex = /[aeiou]/gi
//  return	str.replace(regex,"");
// }

// //find mirror numbers --- palindromes

// function isSymmetrical(num) {
// 	console.log(num);
// 	let split = num.toString().split("").join("") ;
// 	let splitReverse =  num.toString().split("").reverse().join("")
// 	console.log(split, splitReverse)
// 	if (splitReverse === split ) {
// 		return true
// 	}else {
// 		return false
// 	}
// }
// console.log(isSymmetrical(95559));

// //Create a function that takes two dates and returns the number of days between the first and second date.

// function getDays(date1, date2) {

// 	let aDay = 24*60*60*1000;
//     // get a day, 24 hrs * 60 minutes* 60 seconds* 1000 miliseconds

// 	return Math.abs((date1 - date2)/aDay);
// }

// //Create a function that returns the number of hashes and pluses in a string.

// function hashPlusCount(str) {
// 	let hash = 0;
// 	let plus = 0;
// 	let newArr = [];
// 	let split = str.split("");
//  	for (let i = 0; i < split.length; i++)	{
// 	 if (split[i] === "#") {
// 		 hash++
// 	 }else if (split[i] === "+"){
// 		 plus++
// 	 }else if(split === "") {
// 		 newArr.push(0,0)
// 	 }
//  }
// 	newArr.push(hash, plus);
// 	return newArr;
// }

// // //alternate
// // [str.split("").filter(x => x == "#").length,str.split("").filter(x => x == "+").length];

// //Create a function that takes an array of numbers and returns the mean (average) of all those numbers.

// function mean(arr) {

// 	let length = arr.length;
// 	console.log(length);
// 	let reduce = arr.reduce((a,b)=> {return a+b});
// 	console.log(reduce);
// 	let mean = reduce / length;
// 	return Number(mean.toFixed(2));
// }

// function isRepdigit(num) {
//   let counter = 0;
//   let number = num.toString().split("");
//   for (let i = 0; i < number.length; i++) {
//     if (Number(number.join("")) < 0) {
//       return false;
//     } else if (Number(number.join("")) === 0) {
//       return true;
//     } else if (number[0] !== number[i]) {
//       counter++;
//     }
//   }
//   if (counter > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(isRepdigit(6661))

// //count number of digits
// function count(n) {
//   let newArr = [];
//   let num = n.toString().split("");

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] !== "-") {
//       newArr.push(num[i]);
//     }
//   }
//   return newArr.length;
// }

// console.log(count(-314890));

// // find tetrahedral numbers when n is given

// function tetra(n) {
// 	return (n * (n + 1) * (n + 2)) / 6;
// }

// function inkLevels(inks) {
// let newArr = Object.values(inks);
// return Math.min(...newArr)
// }

// console.log(inkLevels(
// 	{
// 	"cyan": 23,
// 	"magenta": 12,
// 	"yellow": 10
//   }
//   ))

//   //A snail goes up the stairs. Every step, he must go up the step, then go across to the next step. He wants to reach the top of the tower.

// //Write a function that returns the distance the snail must travel to the top of the tower given the height and length of each step and the height of the tower.

// function totalDistance(height, length, tower) {
// 	let numSteps = (tower / height);
// 	console.log(numSteps)
// 	let distance = ((height * numSteps ) + ( numSteps * length));
// 	console.log(distance);
// 	return Number(distance.toFixed(1));
// 	}

// console.log(totalDistance(0.2, 0.4, 100.0));

// //Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.
// function getDecimalPlaces(num) {
// 	let split = num.split("");
// 	console.log(split);
// 	 if (num.includes(".")) {
// 		let newArr = split.slice(split.indexOf("."));
// 		 return  (newArr.length - 1)
// 	 }else {
// 		 return 0
// 	 }
// }

// console.log(getDecimalPlaces("21.215464564"));

// //Create a function that determines whether an input value is omnipresent for a given array.

// function isOmnipresent(arr, val) {
//   console.log(arr, val, "Hello!");
//   let newArr = arr.filter((x) => {
//     console.log(x);
//     return x.includes(val);
//   });
//   console.log(newArr);
//   if (arr.length === newArr.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// 	console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))

function leader(arr) {
  let newArr = [];
  console.log(arr);
  let big = Math.max(...arr);
  newArr = arr.slice(arr.indexOf(big));
  return newArr;
}

let cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (let i = 0; i < cities.length; i++) {}

const capital = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let input = arr[i].toLowerCase();
    let upp = input[0].toUpperCase();
    console.log(upp);
    let final = input.replace(input[0], upp);
    console.log(final);
    newArr.push(final);
  }
  return newArr;
};
console.log(capital(["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"]));

// let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                 'GNF576746573fhdg4737dh4;Greenfield',
//                 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                 'SYB4f65hf75f736463;Stalybridge',
//                 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// const station = (arr) => {
//   let newArr =[]
//   for (let i = 0; i < arr.length; i ++) {
//     let input  = arr[i];
//     let first = input.slice(0,3);
//     console.log(first);
//     let semi = input.slice((input.indexOf(";")+1));
//     console.log(semi)
//     let final = `${first} : ${semi}`
//     console.log(final);
//     newArr.push(final);
//   }
//   return newArr;
// }

// console.log(station(['MAN675847583748sjt567654;Manchester Piccadilly',
//                 'GNF576746573fhdg4737dh4;Greenfield',
//                 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                 'SYB4f65hf75f736463;Stalybridge',
//                 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield']))

// const fixArr  = (arr) => {
//   let qf = arr.pop();
//   console.log(qf);
// let  newArr = [];
// let myStr = "";
//   for (let i = 0; i < arr.length; i++) {
//    newArr.push(arr[i], `(${arr[i].indexOf(arr[i])})`)
//    console.log(newArr);
//    myStr = newArr.join("-");

//   }
//   return myStr;

// }

// console.log(fixArr([ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ]))

// function lineLength(x, y) {
//   let finalX = Math.pow((x[0] - x[1]),2);
//   let finalY = Math.pow((y[0] - y[1]),2);
//   console.log(finalX, finalY)
//   let distance = Math.sqrt((finalX) + (finalY));
//   let final  = Number(distance.toFixed(2));
//   return final;
// }

// console.log(lineLength([15, 7], [22, 11]));

// function shiftToLeft(x, y) {
//   console.log(x);
//   let a = y ** y;
//   console.log(a);
//   let shift = x * a;

//   console.log(shift);
//   return shift;
// }

// console.log(shiftToLeft([46, 6]));


// create a functions that sorts according to one of the properties of an object.

function sortDrinkByPrice(drinks) {
	let sorted  = drinks.sort((a,b)=> {
		return a.price-b.price
	})
		return sorted;	
}

// Converting between two data types

function toArray(num) {
	let split = num.toString().split("").map(a => Number(a));
	return (split);	
}

function toNumber(arr) {
	let join = arr.join("")
	return Number(join);
}