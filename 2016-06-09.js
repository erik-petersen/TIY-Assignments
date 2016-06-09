function DrEvil( amount ) {

	if( amount < 1000000 ) {
	  return amount + " dollars";
	}

	else {
	  return amount + " dollars (pinky)";
	}

}

console.log( DrEvil( 10 ) );
console.log( DrEvil( 1000000 ) );
