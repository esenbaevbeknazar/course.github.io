

'use strict';




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privet: false,
    start: function () {
        personalMovieDB.count = prompt('сколко фильмов вы просмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('сколко фильмов вы просмотрели?', '');
    
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено доволно мало фильмов");
        
        } else if (personalMovieDB.count >=10 && personalMovieDB < 30) {
            console.log("Вы класический зрител");
        
        } else if (personalMovieDB.count >= 30 ) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
     showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privet){
            personalMovieDB.privet = false;
        } else {
            personalMovieDB.privet = true;
        }
    },
    writeYourGenres: function () {
        for(let i = 1; i < 2; i++){
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // if(genre === '' || genre == null) {
            //     console.log('вы ввели некорекные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genres = prompt(`Ваш любимый жанр под номером`).toLowerCase();

             if(genres === '' || genres == null) {
                console.log('вы ввели некорекные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
            
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }

};



