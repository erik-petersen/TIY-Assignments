var topDesserts = [ "Apple Crostada", "Goodberry's", "Chocolate Pie" ];

for( var index = 0; index < topDesserts.length; index++ ) {
	if( index === 0 ) {
		console.log( "My 1st dessert choice is ".concat( topDesserts[index] ) );
	}

	else if( index === 1 || index === 2 ) {
		console.log( "My " + (index + 1) + "nd dessert choice is ".concat( topDesserts[index] ) );
	}

	else {
		console.log( "My " + (index + 1) + "th dessert choice is ".concat( topDesserts[index] ) );
	}
}
