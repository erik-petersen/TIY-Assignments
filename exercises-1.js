/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()
The sort method sorts the elements of an array and then returns the result.
Sorting is done by comparing unicode characters by default.  This makes numbers
lower than uppercase characters and uppercase characters lower than lowercase
characters.

Example:
var arr = [ "apples", "Bananas", 1 ];
arr.sort();

> [ 1, "Bananas", "apples" ]

// .concat()
The concat method is used to combine arrays with other arrays or values and return the
result.  It is like the "+" operator but is the preferred way of concatenating.  Also,
with numbers, the "+" operator will simply just add them.

Example:
var arr = [ "apples", "bananas" ];
var newArr = arr.concat( "pears", ["cherries", "peaches"] );
console.log( newArr );

> [ "apples", "bananas", "pears", "cherries", "peaches" ]

// .indexOf()
For arrays, the indexOf method is used to find the first index in an array that
a given element, called a search element, is found.  This is done using strict
equality to compare the two.

For strings, the indexOf method is used to find the index of the first occurance
of the specified value.  If no fromIndex value is specified, the search will begin
at 0.  Otherwise, it will begin at whatever position the fromIndex is.
// compliments of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Example:
var arr = [ "apples", "bananas" ];
arr.indexOf( "bananas" );

> 1

var arr = "apples";
arr.indexOf( "ples" );

> 2

// .split()
The split method takes a string and separates it into an array of substrings.
This separation is normally done using a separator that can be a comma, a period,
or even a letter.

Example:
var myString = "Erik Pet,ersen";
myString.split( "," );

> [ "Erik Pet", "ersen" ]

var myString = "Erik Petersen";
myString.split();

> [ "Erik Petersen "]

// .join()
The join method takes all the elements in an array and combines them into a
string.  If desired, a separator can be inserted between each element in the
array.

Example:
var arr = [ 1, 2, 3]
var myString = arr.join( " x " );
console.log( myString );

> 1 x 2 x 3

// .pop()
The pop method literally pops off the last element in an array.  The array is
then updated.  The pop method also returns the element that was popped.

Example:
var arr = [ "fishing", "line" ];
var popped = arr.pop();
console.log ( arr );
console.log( popped );

> [ "fishing" ]
> line

// .push()
The push method is used to add elements to the end of an array.  It then returns
the new length of the array.

Example:
var arr = [ "fishing", "line", "and" ];
arr.push( "bobbers" );
console.log( arr );
console.log ( arr.push() );

> [ "fishing", "line", "and", "bobber" ]
> 4

// .slice()
The slice method return a portion of an array into a new array.  The subset is
consecutive meaning that you cannot target specific elements.  It takes the
element from the specified starting index and continues to the ending index.

Example:
var musicalInstrumets = [ "piano", "drums", "violin", "trombone", "saxophone", "guitar" ];
var percussiveInstruments = musicalInstrumets.slice( 0, 2 );
console.log ( percussiveInstruments );

> [ "piano", "drums" ]


// .splice()
The splice method removes elements from an array and inserts methods into an
array.  This is done using a starting position, the number of elements to remove
starting from that position, and any elements to add.

Example:
var arr = [ "fishing", "line", "and", "bobber" ];
var removed = arr.splice( 1, 2, "head" );
console.log( arr );
console.log( removed );

> [ "fishing", "head", "bobber" ]
> [ "line", "and" ]

// .shift()
The shift method is just like the pop method except that instead of removing an
element from the end of the array and returning it, it removes the element from
the beginning of the array and returns it.

Example:
var arr = [ "fishy", "mint", "chocolate", "chip" ];
var shifted = arr.shift();
console.log( arr );
console.log( shifted );

> [ "mint", "chocolate", "chip" ]
> fishy

// .unshift()
The unshift is just like the push method except that instead of adding elements
to the end of an array, it adds elements to the beginning of the array.

Example:
var arr = [ "chocolate", "chip" ];
arr.unshift( "mint" );
console.log( arr );
console.log( arr.unshift() );

> [ "mint", "chocolate", "chip" ]
> 3

// .filter()
The filter method creates a new array with all elements that pass the test of
the function provided.

Example:
function isSmallerThan( num ) {
  return num <= 10;
}
var filteredArr = [ 1, 5, 50, 15, 11, 10, 21 ].filter( isSmallerThan );
console.log( filteredArr );

> [ 1, 5, 10 ]

// .map()
The map method takes an array, performs a function on every element in the array,
and returns the result.

Example:
var arr = [ 1.1, 1.5, 5.9 ];
var floorNum = arr.map( Math.floor );
console.log( floorNum );

> [ 1, 1, 5 ]
