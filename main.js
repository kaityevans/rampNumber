'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let rampNumArray = []
const rampNum = (num) => {
  let numArray = num.toString().split("");
  for (let i = 0; i < numArray.length - 1; i++) {
    if (numArray[i] > numArray[i + 1]) {
      return false
    }
  }
  rampNumArray.push(num)
  return true
}
console.log(rampNum(132))

const numOfRamps = (numLimit) => {
  let counter = 0
  for(let ii = 0; ii < numLimit; ii++){
    if(rampNum(ii)){
      counter++
    }
  }
  console.log(counter)
  return counter
}
numOfRamps(135)
//   //  Your code goes here
// go through each value in the string - for loop
// compare the value to the number preceeding it
// if the value is less than or equal to the other, it will sta
// determine which number is smaller and move the smaller number to the left


// numOfRampsBelow(99999) // => "2001 total ramp numbers are less than 99999"



// Given: A positive integer, n.

// Output: The number of total ramp numbers less than n.

// Example input: 123

// Example output: 65 total ramp numbers are less than 123



const getPrompt = () => {
  rl.question('Enter your string to count the characters: ', (str) => {
    rampNum(str);
    getPrompt();
  });
}

// Tests to be made
// "1234" should give "It Works!"
// "1124" should give "It Works!"
// "1032" should give "Not a Ramp Number!"
// "1528" should give "Not a Ramp Number!"

if (typeof describe === 'function') {
  describe('#rampNum()', () => {
    it('should determine if a number is a ramp number', () => {

      assert.equal(typeof rampNum, "function");
    });
  });

  describe('Results', () => {
    it('should determine how many ramp numbers exist', () => {
      assert.equal(numOfRamps(123), 65)
    })
  })

} else {
  getPrompt();
}