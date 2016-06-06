var topDesserts = [ "Apple Crostada", "Goodberry's", "Chocolate Pie" ];

for( var index = 0; index < topDesserts.length; index++ ) {
	if( index === 0 ) {
		console.log( "My 1st dessert choice is " + topDesserts[index] );
	}

	else if( index === 1 ) {
		console.log( "My 2nd dessert choice is " + topDesserts[index] );
	}

	else {
		console.log( "My 3rd dessert choice is " + topDesserts[index] );
	}
}
