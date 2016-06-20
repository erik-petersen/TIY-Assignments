function notBad( str ) {
	var notIndex = str.indexOf( "not" );
	var badIndex = str.indexOf( "bad" );

	if( str.includes( "not") && notIndex < badIndex ) {
		return str.substring( 0, notIndex ) + "good";
	}

	else {
		return str;
	}
}

console.log( notBad("This dinner is not that bad!") );
console.log( notBad("This dinner is bad!") );
console.log( notBad("This dinner is bad not!") );
