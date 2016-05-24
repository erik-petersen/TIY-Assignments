// Erik Petersen Day 7 Homework Due 2016-05-25

// variable to store the sum of all multiples of 3 and 5
var sum = 0;

/*
loop through the numbers 0-1000 and find which numbers are multiples of 3 and 5.
If a number qualifies, add it to the variable sum
*/

for( var num = 0; num < 1000; num++ ) {
	if( num % 3 === 0 ) {
		sum += num;
	}

	else if( num % 5 === 0 ) {
		sum += num;
	}

	else {
		sum += 0;
	}
}

// display the value stored in the variable sum
console.log( "Sum of all the multiples of 3 or 5 below one thousand: " + sum );
