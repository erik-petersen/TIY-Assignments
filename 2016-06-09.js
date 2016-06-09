function drEvil( amount ) {
	if( amount < 1000000 ) {
	  return amount + " dollars";
	}

	else {
		return amount + " dollars (pinky)";
	}

}

drEvil( 10 );
drEvil( 1000000 );
