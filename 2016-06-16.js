function verbing( str ) {

	var subset = str.substr( -3 );

	if( str.length >= 3 && subset !== "ing" ) {
		return str += "ing";
	}

	else if( str.length >= 3 && subset === "ing" ) {
		return str += "ly";
	}

	else {
		return str;
	}
}

console.log( verbing( "swim" ) );
console.log( verbing( "swiming" ) );
console.log( verbing( "go" ) );
