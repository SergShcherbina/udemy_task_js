
//произвести подсчет кол-ва студентов
//произвести подсчет общего прогресса 
//вычислить в процентном соотношении средний прогресс

let student = {
    js: [{
        name: 'Jhon',
        progress: 100
    },  {
        name:'Serg',
        progress: 60
    }],

    html : {
        basic: [{
            name: 'Peter',
            progress: 20
        },  {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

///////////перебор с помощью итераций //////////////
/* function getTotalPtogressByIteration (data) {
    let students = 0;
    let total = 0;

    for(let course of Object.values(data)) {
        if(Array.isArray(course)) {                      //проверяем или является массивом
            students += course.length;                    //подсчитываем студентов, кол-во одинаково с количеством элементов в массиве тесть length

            for(let i = 0; i < course.length; i++){      
                total += course[i].progress;             //перебираем цыклом каждый элемент массива и через точечную нотацию стучимся к свойству объекта 
            }
        } else {                                          
            for(let subCourse of Object.values(course)) {
                if(Array.isArray(subCourse)) {                      
                    students += subCourse.length;                    
        
                    for(let i = 0; i < subCourse.length; i++){      
                        total += subCourse[i].progress;  
                    }
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalPtogressByIteration (student)); */



////////////с помощью рекурсии /////////////

function getTotalPtogressByRecursion(data) {
    if(Array.isArray(data)){                         //если аргумент data массив 
        let total = 0;

        for(let i = 0; i < data.length; i++) {       //перебираем и высчитываем общий прогресс
            total += data[i].progress;
        }

        return [total, data.length];                 //возвращаем массив [общий прогресс, кличество учеников]

    } else {                                         
        let total = [0, 0];

        for(let subData of Object.values(data)) {    // перебираем свойства обьекта 
            const subDataArr = getTotalPtogressByRecursion(subData);        //если в свойства обьекта массив, вызываем функцию и выполняются операции описанные выше
            total[0] += subDataArr[0];               // получ результат [total, data.length] записываются в subDataArr -> total -> result
            total[1] += subDataArr[1];
        }

        return total;

    }

}
const result = getTotalPtogressByRecursion(student);

console.log(result[0] / result[1]);                  //делим прогрессс на количиство учеников и получаем % ср прогресс усвоенного материала
