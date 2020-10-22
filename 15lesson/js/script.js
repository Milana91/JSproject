"use strict";

let countMovies = +prompt('Сколько фильмов вы уже посмотрели?', 0);

let lastMovie;
let ratingMovie;

let personalMovieDB = {
    count: countMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i=0; i < 2; i++) 
{
    lastMovie = prompt('Один из последний просмотренных фильмов');

    if (!lastMovie || 
        (lastMovie.length > 50) || 
        (lastMovie == null))
        {
            continue;
        }
    else 
        {
            ratingMovie = prompt('Насколько оцените его?');
            if (!ratingMovie || 
                (ratingMovie.length > 50) || 
                (ratingMovie == null))
                {
                    continue;
                }
            else 
                {
                    personalMovieDB.movies[lastMovie] = ratingMovie;
                }
        }
}

if (personalMovieDB.count < 10)
{
    alert('Просмотрено довольно мало фильмов');
}
else if((personalMovieDB.count) >= 10 && (personalMovieDB.count < 30))
{
    alert('Вы классический зритель');
}
else if (personalMovieDB.count > 30)
{
    alert ('Вы киноман');
}

else 
{
    alert('Произошла ошибка');
}


console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
console.log(personalMovieDB.actors);
console.log(personalMovieDB.genres);
console.log(personalMovieDB.private);