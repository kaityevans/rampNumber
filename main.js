'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const rampNum = (str) => {
  console.log('BOOMS', str.length)
}


const getPrompt = () =>  {
  rl.question('Enter your string to count the characters: ', (str) => {
    rampNum(str);
    getPrompt();
  });
}

if (typeof describe === 'function') {
  describe('#rampNum()', () => {
    it('should be of type function', () => {
      
      assert.equal(typeof rampNum, "function");
    });
  });
} else {
  getPrompt();
}