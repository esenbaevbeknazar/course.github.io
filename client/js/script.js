const numberOffilms = prompt('сколко фильмов вы просмотрели?', '');

const personalMovieDB = {
    count: numberOffilms,
    movies: {},
    actors: {},
    generes: [],
    privet: false
};

const a = prompt('ОДИН ИЗ ПОСЛЕДНИХ ПРОСМОТРЕННЫХ ФИЛЬМОВ?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');


      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

    

    console.log(personalMovieDB);
