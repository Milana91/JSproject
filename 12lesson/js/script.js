"use strict";

let countMovies = prompt('Сколько фильмов вы уже посмотрели?', 0);
let lastMovie = prompt('Один из последний просмотренных фильмов');
let ratingMovie = prompt('Насколько оцените его?');

let personalMovieDB = {
    count: countMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

personalMovieDB.movies[lastMovie] = ratingMovie;


console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
console.log(personalMovieDB.actors);
console.log(personalMovieDB.genres);
console.log(personalMovieDB.private);