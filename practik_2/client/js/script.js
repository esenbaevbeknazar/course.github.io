const numberOffilms = prompt('сколко фильмов вы просмотрели?', '');

const personalMovieDB = {
    count: numberOffilms,
    movies: {},
    actors: {},
    generes: [],
    privet: false
};

// const a = prompt('ОДИН ИЗ ПОСЛЕДНИХ ПРОСМОТРЕННЫХ ФИЛЬМОВ?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько оцените его?','');


//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;

    for (let i = 0; i  < 2; i++ ){
        const a = prompt('ОДИН ИЗ ПОСЛЕДНИХ ПРОСМОТРЕННЫХ ФИЛЬМОВ?', ''),
              b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != ' ' && b != ' ' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('hi');
        } else  {
            console.log('error');
            i--;
        }
        

    }



    

    console.log(personalMovieDB);
