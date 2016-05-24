var sentence = [ "You will be a", "in", ", and married to", "with", "kids" ];
var numChildren = 3;
var namePartner = "Jen";
var location = "Nashville";
var jobTitle = "lead singer for a band";

console.log( "You will be a " + jobTitle + " in " + location + ", and married to " + namePartner + " with " + numChildren + " kids." );

sentence.splice( 1, 0, jobTitle );
sentence.splice( 3, 0, location );
sentence.splice( 5, 0, namePartner );
sentence.splice( 7, 0, numChildren );


console.log( sentence.join( " " ) );
