// problem -1

function cubeNumber(number){
  if(typeof number !== "number"){
    return "Please provide a positive number"
  }
  else{
    const cube = number * number * number;
    return cube;
  }
}

const number = 3;
console.log(cubeNumber(number));


// * problem-2


function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
      return "Please provide both strings";
  } else {
      if (string1.includes(string2)) {
          return true;
      } else {
          return false;
      }
  }
}

const string1 = "John Doe";
const string2 = "ohn";
const output = matchFinder(string1, string2);
console.log(output);


// problem - 3

function sortMaker(arr) {
  if (arr.some((item) => typeof item !== "number" || item < 0)) {
    return "Invalid Input";
  }

  if (arr[0] === arr[1]) {
    return "equal";
  }

  return arr.slice().sort((a, b) => b - a);
}

const arr = [4, -2];
const output2 = sortMaker(arr);
console.log(output2);



// problem - 4

function findAddress(obj) {
  let output = "";
  if (obj.hasOwnProperty("street")) {
    output += obj.street;
  } else {
    output += "__";
  }
  output += ",";
  if (obj.hasOwnProperty("house")) {
    output += obj.house;
  } else {
    output += "__";
  }
  output += ",";
  if (obj.hasOwnProperty("society")) {
    output += obj.society;
  } else {
    output += "__";
  }
  return output;
}

const obj = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};

console.log(findAddress({street:10,society:"Earth Perfect"}));


// * Problem - 5

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
      return "Empty Array";
  } else {
      let sum = 0;
      for (let item of changeArray) {
          sum += item;
          if (sum >= totalDue) {
              return true;
          }
      }
      return false;
  }
}

const changeArray = [1, 2, 5];
const totalDue = 10;

console.log(canPay(changeArray, totalDue));
