
// Problem - 1

// ত োমাকে cubeNumber() নামে একটা function দে ওয়া হয়ে ছে । functionটা একটা positive input নাম্বার নি বে ।
// Task:
// 1. input নাম্বারটাকে cube করে result টা রি টার্ন করবে ফাংশন থে কে ।
// 2. Bonus: ইনপুট হি সে বে number টাইপ এর পরি বর্তে অন্য কি ছুদি লে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন
// করে দি বে ফাংশন থে কে ।
// Sample Input Sample Output
// 3 27
// 4 64
// Function signature/sample
// function cubeNumber(number) {
// }

function cubeNumber(number){
  if(typeof number !== "number"){
    return "Please provide a positive number"
  }
  else{
    const cube = number * number * number;
    return cube;
  }
}

const number = 4;
console.log(cubeNumber(number));


// * problem-2

// 1. ত োমাকে একটা function দে ওয়া হবে called “matchFinder()” যা ইনপুট হি সে বে দইুটা string নি বে ।
// Task:
// 1. যদি প্রথম স্ট্রি ংটির ক োন ো একটি অংশে র সাথে দ্বি তীয় স্ট্রি ংটির পুর োপুরি মি ল খুজে পাও সে ক্ষে ত্রে তুমি
// boolean রি টার্ন করবে এক্ষে ত্রে ত োমাকে true রি টার্ন করতে হবে ।
// 2. আর যদি পুর োপুরি মি ল খুজে না পাও সে ক্ষে ত্রে তুমি boolean false রি টার্ন করবে ।
// 3. Bonus: দটিু ইনপুট স্ট্রি ং দে ওয়া হল ো কি না সে টা validate করবে । যদি দইুটি বা যে ক োন ো একটি ইনপুট স্ট্রি ং
// না হয় সে ক্ষে ত্রে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন করে দি বে ।

// Sample Input Sample Output
// “John Doe”, “ohn” true
// “JavaScript”, “Code” false
// “Peter Parker”, “Pen” false
// “Peter Parker”,”pet” false
// Function definition
// function matchFinder(string1, string2) {
// }


// function matchFinder(string1, string2) {
//   if (typeof string1 !== "string" || typeof string2 !== "string") {
//       return "Please provide both strings";
//   } else {
//       if (string1.includes(string2)) {
//           return true;
//       } else {
//           return false;
//       }
//   }
// }

// const string1 = "John Doe";
// const string2 = "pen";
// const output = matchFinder(string1, string2);
// console.log(output);


// function sortMaker(arr) {
//   if (arr.length <= 0) {
//       return "Invalid Input";
//   } else {
//       const sorted = arr.slice().sort((a, b) => b - a);

//       if (sorted[0] === sorted[1]) {
//           return "equal";
//       } else {
//           return sorted;
//       }
//   }
// }

// const arr = [3, -4];
// const output = sortMaker(arr);
// console.log(output);

// function sortMaker(arr) {
//   if (!Array.isArray(arr) || arr.length <= 0) {
//       return "Invalid Input";
//   }

//   const sortedArr = arr.slice().sort((a, b) => b - a);

//   if (sortedArr[0] === sortedArr[1]) {
//       return "equal";
//   } else {
//       return sortedArr;
//   }
// }

function sortMaker(arr) {
  if (!arr.length >= 0) {
      return "Invalid Input";
  }
  
  const validNumbers = arr.filter(num => typeof num === 'number' && !isNaN(num));

  if (validNumbers.length !== arr.length) {
      return "Invalid Input";
  }

  const sorted = arr.slice().sort((a, b) => b - a);

  if (sorted[0] === sorted[1]) {
      return "equal";
  } else {
      return sorted;
  }
}

const arr = [4, 3]
console.log(sortMaker(arr));     // Output: [3, -4]
         // Output: Invalid Input
       // Output: Invalid Input



// // Test cases
// console.log(sortMaker([2, 3]));      // Output: [3, 2]
// console.log(sortMaker([4, 2]));      // Output: [4, 2]
// console.log(sortMaker([4, 4]));      // Output: equal
// console.log(sortMaker([1, 2]));      // Output: [2, 1]
// console.log(sortMaker([4, -2]));     // Output: Invalid Input
// console.log(sortMaker("not an array"));// Output: Invalid Input









// * Problem - 5

// Problem - 5
// তুমি দ োকানে একটা চি প্স কি নতে গে লা কি ছুখুচরা টাকার ন োট নি য়ে । একটা canPay() নামে function বানাও যে টা
// ২টা ইনপুট নে ইঃ একটা array, এবং আরে কটা number।
// 1. Array এর প্রত্যে ক টা element ত োমার খুচরা টাকা বঝু াই
// 1 taka
// 2 taka
// 5 taka
// 2. second input টা বঝু াই চি প্স এর দাম।
// Task:
// 1. যদি খুচরা টাকা গুল ো য োগ করে চি প্স এর দাম বা তার বে শি হয় তাহলে true রি টার্ন করবে
// 2. আর যদি ন োটগুল োর য োগফল চি প্স এর দামে র চে য়ে কম হয় সে ক্ষে ত্রে false রি টার্ন করবে ।
// 3. Bonus: ইনপুট এর প্রথম উপাদান empty অ্যারে কি না চে ক করবে । empty অ্যারে হলে মি নি ংফুল মে সে জ
// রি টার্ন করে দি বে ।

// Sample Input Sample Output
// [1,2,5], 10 false
// [1,5,5],10 true

// // Function definition:

// // function canPay(changeArray, totalDue) {
// }



// function canPay(array, number) {
//   if (array.length === 0) {
//       return "Empty Array";
//   } else {
//       let sum = 0;
//       for (let item of array) {
//           sum += item;
//           if (sum >= number) {
//               return true;
//           }
//       }
//       return false;
//   }
// }

// const array = [1, 5, 5];
// const number = 10;
// console.log(canPay(array, number));
