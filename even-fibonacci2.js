// Erik Petersen Day 7 Homework Due 2016-05-25

var firstNum = 0;
var secondNum = 2; // secondNum will store the current fibonacci number within the iteration
var evenFibonacci = 0; // equals firstNum + secondNum (2 4 6 10: 10 is current evenFibonacci, 4 is current firstNum)

for( var sum = 0; secondNum <= 4000000; sum += evenFibonacci ) {
	evenFibonacci = firstNum + secondNum;
	firstNum = secondNum;
	secondNum = evenFibonacci;
}

// display the sum of all even-valued Fibonacci terms up to 4 million
console.log ( "Sum of even-valued Fibonacci terms up to 4 million: " + sum );























//this works
var firstNum = 0;
var secondNum = 2; // secondNum will be used to store the current fibonacci and link it to the next iteration
var evenFibonacci = 0; // equals firstNum + secondNum (2 4 6 10: 10 is current evenFibonacci, 4 is current firstNum)
var sum = 0; // this is the sum of all numbers in the even fibonacci sequence

for( var num = 0; evenFibonacci < 4000000; num++ ) {
	evenFibonacci = firstNum + secondNum;
	console.log( evenFibonacci );
	firstNum = secondNum;
	secondNum = evenFibonacci;
	if( evenFibonacci < 10 ) {
		sum += evenFibonacci;
		console.log( "sum:" + sum );
	}

	else {
		sum += 0;
		break;
	}
}

// display the total of all even numbers in the fibonacci sequence between 0 and ?
console.log ( "sum: " + sum );




console.log( "fib: " + evenFibonacci );
