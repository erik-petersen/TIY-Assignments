function fixStart( theString ) {
	var character = theString.charAt(0);
	var newString = "";
	for( var index = 0; index < theString.length; index++ ) {
		if( index === 0 ) {
			newString += theString[index]
		}

		else if( theString[index] === character && theString[index] !== 0 ) {
			newString += "*";
		}

		else {
			newString += theString[index];
		}
	}
	return newString;
}

fixStart( "babble" );
