function mixUp( string1, string2 ) {
	var newString1Append = string2.slice(0, 2);
	var newString1 = newString1Append + string1.slice(2);
	var newString2Append = string1.slice(0, 2);
	var newString2 = newString2Append + string2.slice(2);
	return newString1 + " " + newString2;
}

console.log( mixUp( "dog", "dinner" ) );
console.log( mixUp( "mix", "pog" ) );
