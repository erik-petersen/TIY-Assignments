function frequent( str1, str2 ) {
	var numTimes = 0;

	for( var index = 0; index < str2.length; index++ ) {
		if( str2.charAt(index) == "i" ) {
			numTimes++;
		}
	}

	return numTimes;
}

console.log( frequent( "i", "victoria" ) );
