/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

 /* Задания на урок:

    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"

    5) Фильмы должны быть отсортированы по алфавиту */




'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };

    let promoAdv = document.querySelectorAll('.promo__adv img');
    let genre = document.querySelector('.promo__genre');
    let promoBg = document.querySelector('.promo__bg');
    let listerBD = document.querySelector('.promo__interactive-list');
    let form = document.querySelector('.add');
    const input = form.querySelector('.adding__input');
    const checkbox = form.querySelector('[type="checkbox"]');

    genre.textContent = 'драмма';

    promoBg.style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat';


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = input.value;
        let favorite = checkbox.checked;                                    //если чекбокс отмечен true записываем в переменную 

        if(newFilm){

            if(favorite) {
                console.log("Добавляем любимый фильм");
            }

            if(newFilm.length > 21){                                        
                newFilm = newFilm.slice(0, 21) + '...';                    //обрезаем строку на 21символ и добавляем ...
            }

            movieDB.movies.push(newFilm) ;                                 //пушим содержимое инпута в массив
            sortItem(movieDB.movies);                                      

            addListFilms(movieDB.movies, listerBD);                        
        }

        e.target.reset();                                                  //очищаем форму
    });

    const removeAdv = function(arr){                                       //удаляем рекламные банеры
        arr.forEach( (img) => {
        img.remove();
        });
    }


    let sortItem = function(item) {
        item.sort();
    }


    function addListFilms(films, parant) {
        parant.innerHTML = '';                                             //очищаем весь старый списовк в верстке
        sortItem(films);                                                   //сортируем эл массива по убывванию

        films.forEach( (film, i) => {                                      //строим новую верству с элементами массива movieDB.movies
            parant.innerHTML += `  <li class="promo__interactive-item">${i + 1} ${film}
                                        <div class="delete"></div>
                                    </li> ` ;
        });

        document.querySelectorAll('.delete').forEach( (el, i) => {         //перебираем все элементы 'корзина'
            el.addEventListener('click', () => {                           //на кждый вешаем обработчик
                el.parentNode.remove();                                    //при нажатии удаляем родительскую ноду, так как сама корзина ниже
                films.splice(i, 1);                                        //удаляем из обьекта соответствующий элемент
                addListFilms(films, parant);
            });
        });
       
    }

    removeAdv(promoAdv);
    addListFilms(movieDB.movies, listerBD);
   
});
   

