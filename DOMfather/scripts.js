// Using JavaScript, change the body's tag style so it has a font-family of the sans-serif font stack of your choice.
document.body.style.fontFamily = "helvetica, verdana, sans-serif";

//Using JavaScript, replace each of the spans with your own information.
var myName = "Erik Petersen";
var myTown = "Cary, NC";
var myMovie = "Tommy Boy";
var myFood = "Spaghetti";

document.getElementById( "fullname" ).innerHTML = myName;
document.getElementById( "hometown" ).innerHTML = myTown;
document.getElementById( "movie" ).innerHTML = myMovie;
document.getElementById( "food" ).innerHTML = myFood;

//Iterate through each li and change the class to listitem. Add a style tag that sets a rule
//for listitem to make the color red.
var listItems = document.getElementsByTagName( "li" );

function changeClass( elements ) {
  for( var index = 0; index < elements.length; index++ ) {
    elements[index].setAttribute( "class", "listitem" );
    // elements[index].style.color = "red";
  }
}

changeClass( listItems );
document.getElementsByClassName( "listitem" ).style.color = "red";

//Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var selfPic = document.createElement( "img" );
selfPic.setAttribute( "src", "assets/images/erik-headshot.jpg" );
selfPic.setAttribute( "alt", "Picture of Me" );
selfPic.setAttribute( "width", "20%");
selfPic.setAttribute( "height", "20%" );
document.body.appendChild( selfPic );
