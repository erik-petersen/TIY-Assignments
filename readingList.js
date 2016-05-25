// Erik Petersen Homework 2016-05-25: "Reading List"

/*
Create an array of objects, where each object describes a book and has properties for the title (a string),
author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of
books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it,
log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still
need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

// declare heading and TextNode elements and append them
document.body.style.fontFamily = "helvetica, verdana, sans-serif";
var headingElement = document.createElement( "h1" );
var headingText = document.createTextNode( "My Book List" );
headingElement.appendChild( headingText );
document.body.appendChild( headingElement );

// declare a list that stores all the books on my list, the author, and if I've read them or not
var myBookList = [
    { title: '"Basic Economics"', author: "Thomas Sowell", readStatus: true },
    { title: '"Professional Baking"', author: "Wayne Gisslen", readStatus: true },
    { title: '"Lord of the Flies"', author: "William Golding", readStatus: false },
    { title: '"Treasure Island"', author: "Robert Louis Stevenson", readStatus: true },
    { title: '"Eugene Onegin"', author: "Alexander Pushkin", readStatus: true }
];

/*
  declare a function to see if I've read a book or not and then display a message saying if I have or
  have not.  After that, display the book and the author.  Book and author and in a span tag, so they should
  appear on the same line as the read status.
*/
function addBookEntry( bookString, status, spanEntry, entry ) {
  var pText = "";
  // declare TextNode elements to state that I have and have not read the books...will be displayed before the spanEntry
  var read = document.createTextNode( "I've already read " );
  var notRead = document.createTextNode( "I still need to read ");
  var pElement = document.createElement( "p" );

  // if I've read the book, do this
  if( status === true ) {
    // pText = document.createTextNode( read.concat(bookString) ); ...this doesn't work because it's not a node
    spanEntry.appendChild( entry );
    document.body.appendChild( read );
    document.body.appendChild( spanEntry );
    // pElement.appendChild( pText ); ...though I needed this but I don't and am not sure why
    document.body.appendChild( pElement );
  }

  // if I haven't read the book, do this
  else {
    // pText = document.createTextNode( notRead.concat(bookString) ); ...this doesn't work because it's not a node
    spanEntry.appendChild( entry );
    document.body.appendChild( notRead );
    document.body.appendChild( spanEntry );
    // pElement.appendChild( pText ); ...though I needed this but I don't and am not sure why
    document.body.appendChild( pElement );
  }
} // end function addBookEntry()

// iterate through the book object, declare a textelement and textnode, and call addBookEntry().
for( var bookIndex = 0; bookIndex < myBookList.length; bookIndex++ ) {
  var spanEntry = document.createElement( "span" );
  var entry = document.createTextNode( myBookList[bookIndex].title + " by " + myBookList[bookIndex].author );
  addBookEntry( entry, myBookList[bookIndex].readStatus, spanEntry, entry );
}
