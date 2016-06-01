// Erik Petersen 2016-06-01

function pluralize( noun, num ) {
	var pluralized;
	if( noun.toLowerCase() === "sheep" || noun.toLowerCase() === "geese" ) {
		pluralized = num + " " + noun;
	}

	else if( noun.toLowerCase() !== "sheep" || noun.toLowerCase() !== "geese") {
		if( num === 1 ) {
		pluralized = num + " " + noun;
		}

		else {
		pluralized = num + " " + noun + "s";
		}
	}

	return pluralized;
}

console.log( pluralize( "dog", 5 ) );
console.log( pluralize( "cat", 1 ) );
console.log( pluralize( "geese", 5) );
console.log( pluralize( "sheep", 9) );
