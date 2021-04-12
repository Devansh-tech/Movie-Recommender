let sentiment;
let movies;
let comedy;
let superhero;
let crime;
let kid;
let romance;
let submitBtn;
let statusEl;
let result;

function setup() {
    noCanvas();
    // initialize sentiment
    sentiment = ml5.sentiment('movieReviews', modelReady);

    // setting html variables
    comedy = select("#comedy");
    superhero = select("#superhero");
    crime = select("#crime");
    kid = select("#kid");
    romance = select("#romance");
    submitBtn = select("#button");
    result = select("#result");

    // getting list of available movies
    movies = getmovies();

    // predicting the sentiment on mousePressed()
    submitBtn.mousePressed(getSentiment);
}

function getSentiment() {
    
}

function modelReady() {
    // model is ready
    statusEl = select("#model");
    statusEl.html('model loaded');
}

function getmovies() {
    movies = [];
    var SW = { name: "Star wars: The force awakens", score: [0, 10, 0, 0, 0] };
    movies.push(SW);
    var SW = { name: "Jurassic world", score: [2, 7, 0, 5, 2] };
    movies.push(SW);
    var SW = { name: "The lion king", score: [4, 0, 0, 10, 2] };
    movies.push(SW);
    var SW = { name: "Furious 7", score: [3, 5, 7, 0, 2] };
    movies.push(SW);
    var SW = { name: "Harry potter: Deathly hallows", score: [2, 7, 0, 7, 0] };
    movies.push(SW);
    var SW = { name: "Rush hour", score: [10, 0, 7, 3, 0] };
    movies.push(SW);
    var SW = { name: "Dark knight", score: [0, 10, 10, 5, 0] };
    movies.push(SW);
    var SW = { name: "Aquaman", score: [0, 10, 0, 7, 0] };
    movies.push(SW);
    var SW = { name: "LA LA Land", score: [5, 0, 0, 0, 10] };
    movies.push(SW);
    var SW = { name: "The Notebook", score: [0, 0, 0, 0, 10] };
    movies.push(SW);
    var SW = { name: "Incredibles 2", score: [8, 10, 0, 10, 0] };
    movies.push(SW);
    var SW = { name: "Shutter island", score: [0, 0, 10, 0, 0] };
    movies.push(SW);
    var SW = { name: "Zodiac", score: [0, 0, 10, 0, 0] };
    movies.push(SW);
    var SW = { name: "Zootopia", score: [10, 0, 0, 10, 0] };
    movies.push(SW);
    return movies;
}