/*
thank you https://www.thepolyglotdeveloper.com/2015/01/fibonacci-sequence-printed-javascript/,
for your help
*/

var firstNum = 0;
var secondNum = 2;
var evenFibonacci = 0;

for( var i = 2; i <= 32; i++ ) {
  evenFibonacci = firstNum + secondNum;
  firstNum = secondNum;
  secondNum = evenFibonacci;
  console.log( evenFibonacci );
}

/*
1 time around:
evenFibonacci = 2
firstNum = 2
secondNum = 2

2nd time
evenFibonacci = 4
firstNum = 2
secondNum = 4

3rd time
evenFibonacci = 6
firstNum = 4
secondNum = 6

4th time
evenFibonacci = 10
firstNum = 6
secondNum = 10

5th time
evenFibonacci = 16
firstNum = 10
secondNum = 16
*/
