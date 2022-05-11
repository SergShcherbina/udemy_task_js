/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

if (personalMovieDB.count < 10) {
    alert('"Просмотрено довольно мало фильмов"');
} else if ( personalMovieDB.count <= 30 ) {
    alert("Вы классический зритель");
} else if ( 30 <  personalMovieDB.count  ) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
} 

/* while (personalMovieDB.count < 10) {
    alert('"Просмотрено довольно мало фильмов"');
    break;
} 
while ( personalMovieDB.count <= 30 ) {
    alert("Вы классический зритель");
    break;
}
while ( 30 <  personalMovieDB.count  ) {
    alert("Вы киноман");
    break;
}
while (personalMovieDB.count != 'number' || personalMovieDB.count === false ) {
    alert("Произошла ошибка");
    break;
} */


for (let i = 0; i <2; i++) {

    let askFilm = prompt('Один из последних просмотренных фильмов?');
    let askGrade = +prompt('На сколько оцените его?');
    
    if(askFilm === '' || askGrade ==='' || askFilm === null || askGrade === null || askFilm.length >= 50 || askGrade.length >= 50) {
        --i;
    } else {
        personalMovieDB.movies[askFilm] = askGrade; 
    }
}

console.log(personalMovieDB);
