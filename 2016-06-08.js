var favMovie = {
                title: "Tommy Boy",
                duration: 90,
                stars: ["Chris Farley", " David Spade", " Julie Warner", " Dan Aykroyd", " Bo Derek", " and others"] };

function displayMovie ( movie ) {
	console.log(movie.title + " lasts for " + movie.duration + " minutes." + "\n\nStars: " + movie.stars);
}

displayMovie( favMovie );
