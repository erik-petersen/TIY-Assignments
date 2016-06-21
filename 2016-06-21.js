var condition = false;

while( condition === false ) {
	var num1 =  99;
	var num2 = 99;
	var num3 = 99;

	var product = num1 * num2 * num3;
	var productStr = product.toString();

	if( productStr.charAt(0) == productStr.charAt(-1) ) {
		if( productStr.charAt(1) == productStr.charAt(-2) ) {
			console.log( productStr);
			condition = true;
		}

		else {
		condition = false;
		}
	}

	else {
		condition = false;
	}


}
