let numberOffilms;


function start () {
    numberOffilms = prompt('сколко фильмов вы просмотрели?', '');

    while (numberOffilms == '' || numberOffilms == null || isNaN(numberOffilms)) {
        numberOffilms = +prompt('сколко фильмов вы просмотрели?', '');

    }
}
start();




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

    

function rememberMyFilms () {
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
}
// rememberMyFilms();



function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено доволно мало фильмов");
    
    } else if (personalMovieDB.count >=10 && personalMovieDB < 30) {
        console.log("Вы класический зрител");
    
    } else if (personalMovieDB.count >= 30 ) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
    
showMyDB(personalMovieDB.privet);



function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        const gener = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.generes[i - 1] = gener;
    }
}


writeYourGenres();