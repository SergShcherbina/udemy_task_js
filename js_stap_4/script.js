/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

    let personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start:  function () {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?').trim();
            while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?').trim()    ;
            }   
            if (personalMovieDB.count < 10) {
                alert('"Просмотрено довольно мало фильмов"');
            } else if ( personalMovieDB.count <= 30 ) {
                alert("Вы классический зритель");
            } else if ( 30 <  personalMovieDB.count  ) {
                alert("Вы киноман");
            } else {
                alert("Произошла ошибка");
            }       
        },
        showMyDB: function (variable) {
            if(variable == false) {
                console.log(personalMovieDB);
            }
        },
        writeYourGenres: function () {
            for(let i = 0; i <3 ; i++) {
                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`).trim().toLocaleLowerCase();
                if(personalMovieDB.genres[i] === null || personalMovieDB.genres[i] === '' ){
                    i--;
                }
            }
            personalMovieDB.genres.forEach( (el, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${el}`);
            });
            return personalMovieDB.genres;
        },
        detectPersonalLevel: function () {

            for (let i = 0; i <2; i++) {
        
                let askFilm = prompt('Один из последних просмотренных фильмов?').trim();
                let askGrade = prompt('На сколько оцените его?').trim();
                
                if(askFilm === '' || askGrade ==='' || askFilm === null || askGrade === null || askFilm.length >= 50 || askGrade.length >= 50) {
                    --i;
                    console.log('error');
                } else {
                    personalMovieDB.movies[askFilm] = askGrade; 
                    console.log('done');
                }
            }
        },
        toggleVisibleMyDB: function() {
            if(personalMovieDB.privat){
                 personalMovieDB.privat = false;
            } else  {
                 personalMovieDB.privat = true;
            }
        }
    };
    //personalMovieDB.start();
    //personalMovieDB.showMyDB(personalMovieDB.privat);
    //personalMovieDB.writeYourGenres();
    //personalMovieDB.detectPersonalLevel();
    //personalMovieDB.toggleVisibleMyDB();
