'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. First build this project in the terminal
// 2. Then attach it to the DOM
// 3. Work through the challenge together
// 4. As always whiteboard it and make a code plan
// 5. Translate from English to pseudo code then to JavaScript
// 6. When you finish work on the Further Practice Challenge
// 7. Test
// 8. Present to class
// 9. Turn in the URL to your repo, once for each person in your group


  const numOfRampsBelow = (num) => {
  //   //  Your code goes here
    
  // go through each value in the string - for loop
   
  // compare the value to the number preceeding it 

  // if the value is less than or equal to the other, it will stay

  // determine which number is smaller and move the smaller number to the left
  
  }

  // numOfRampsBelow(99999) // => "2001 total ramp numbers are less than 99999"



// Given: A positive integer, n.

// Output: The number of total ramp numbers less than n.

// Example input: 123

// Example output: 65 total ramp numbers are less than 123



const rampNum = (str) => {
  console.log('BOOMS', str)
  // loop over string
  for (let i = 0; i <= num; i++) {
    console.log(num[i])
 
  // determine if current item is less than or greater than the last item
    
      if(x < y || x > y){
        // if true 
        return true
      // count this somehow
      }
  

  // return count
  }
}


const getPrompt = () =>  {
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
} else {
  getPrompt();
}