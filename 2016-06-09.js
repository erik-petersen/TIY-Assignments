function DrEvil( amount ) {

	if( amount < 1000000 ) {
	  return amount + " dollars";
	}

	else {
	  return amount + " dollars (pinky)";
	}

}

DrEvil( 10 );
DrEvil( 1000000 );
