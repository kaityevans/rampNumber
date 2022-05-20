'use strict';



// test to be made
//"1234" should give "it works"
//"1124" shpuld give "it works"
//"1032" should give "it works"
//"1528" should give "it works"
let rampNumArray = []
const rampNum = (num) => {
  let numArray = num.toString().split("");
  for (let i = 0; i < numArray.lenght -1; i++){
    if (numArray[i] > numArray[i + 1] {
      return false
    })
  }
  rampNumArray.push(num)
  return true
}




console.log(rampNum(1234))

const numOfRamps = (numLimit) => {
  let counter =0
  for (let ii = 0; ii < numLimit; ii++){
    if(rampNum(ii)){
      counter++
    }
  }
}
numOfRamps(135)





  //for (let i = 0; i < 10000; i++ )
//const assert = require('assert');
//const readline = require('readline');
//const rl = readline.createInterface({
//  input: process.stdin,
//  output: process.stdout
//});



const rampNum = (str) => {
  console.log('BOOMS', str.length)
  //loop over string
  //determine if current item is less than or greater than the last item
  //if true 
    //count this  somehow

  //return  
}


const getPrompt = () =>  {
  rl.question('Enter your string to count the characters: ', (str) => {
    rampNum(str);
    getPrompt();
  });
}

if (typeof describe === 'function') {
  describe('#rampNum()', () => {
    it('should determine if a number is a ramp', () => {
      
      assert.equal(typeof rampNum, "function");
    });
  });
describe ('results', () => {
  it('should determine how many ramp numbers exist', () => {
    assert.equal()
  })
})
} 

else {
  getPrompt();
}