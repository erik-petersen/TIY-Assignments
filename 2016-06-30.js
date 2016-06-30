function frequent( str1, str2 ) {
	var numTimes = 0;
	var plurality;

	for( var index = 0; index < str2.length; index++ ) {
		if( str2.charAt(index) == str1 ) {
			numTimes++;
		}
	}

	if( numTimes < 2 ) {
		plurality = "time";
	}

	else {
		plurality = "times";
	}

	return str2 + " contains the letter " + '"' + str1 + '"' + " " + numTimes + " " + plurality;
}

console.log( frequent( "o", "victoria" ) );
console.log( frequent( "r", "supercalafragilisticexpealidocious" ) );
