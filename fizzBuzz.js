// Erik Petersen Day 7 Homework Due 2016-05-25

/*
loop through the numbers 1 - 100.  If the number is a multiple of 3, write "Fizz" to the console.
If the number is a multiple of 5, write "Buzz" to the console.  And if the number is a multiple of
both 3 and 5, write "FizzBuzz" to the console.  Otherwise, write the number to the console.
*/

for( var num = 1; num <= 100; num++ ) {
  // num is a multiple of 3
	if( num % 3 === 0 ) {
    // num is a multiple of 3.  Now check if it is a multiple of 5.
		if( num % 5 === 0 ) {
			console.log( "FizzBuzz" );
		}

		else {
			console.log( "Fizz" );
		}
	}

  // num is not a multiple of 3.  Check if it is a multiple of 5.
	else if( num % 5 === 0 ) {
    // num is a multiple of 5.  Now check if it is a multiple of 3.
		if ( num % 3 === 0 ) {
			console.log( "FizzBuzz" );
		}

		else {
			console.log( "Buzz" );
		}
	}

  // num is not a multiple of 3 or 5 :(
	else {
		console.log( num );
	}
}
