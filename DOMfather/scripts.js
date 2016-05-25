// Erik Petersen Homework 2016-05-25: "About Me"

// Change the body's tag style so it has a font-family of the sans-serif font stack
document.body.style.fontFamily = "helvetica, verdana, sans-serif";

//Replace each of the spans with my own information.
var myName = "Erik Petersen";
var myTown = "Cary, NC";
var myMovie = "Tommy Boy";
var myFood = "Spaghetti";

//Grab the elements with these IDs and insert values between the tags
document.getElementById( "fullname" ).innerHTML = myName;
document.getElementById( "hometown" ).innerHTML = myTown;
document.getElementById( "movie" ).innerHTML = myMovie;
document.getElementById( "food" ).innerHTML = myFood;

//Create an array to store the list of li elements
var listItems = document.getElementsByTagName( "li" );

//Create function to change the class name of elements
function changeClass( elements ) {
  for( var index = 0; index < elements.length; index++ ) {
    elements[index].setAttribute( "class", "listitem" );
  }
}

//Call changeClass
changeClass( listItems );

//Add a style tag that sets a rule for listitem to make the color red
for( var index = 0; index < listItems.length; index++ ) {
  listItems[index].style.color = "red";
}

//Create a new img element and set its src attribute to a picture of me and then append it to the page
var selfPic = document.createElement( "img" );
selfPic.setAttribute( "src", "assets/images/erik-headshot.jpg" );
selfPic.setAttribute( "alt", "Picture of Me" );
selfPic.setAttribute( "width", "20%");
selfPic.setAttribute( "height", "20%" );
document.body.appendChild( selfPic );
