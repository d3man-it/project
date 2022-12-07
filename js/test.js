"use strict";

// 1 quest

function calculateVolumeAndArea(edge) {
    if (typeof(edge) == 'number' && Number.isInteger(edge) && edge > 0) {
        let str = `Объем куба: ${edge*edge*edge}, площадь всей поверхности: ${edge*edge*6}`;
        return str;
    }
    else {
        let str = 'При вычислении произошла ошибка';
        return str;
    }
}

console.log(calculateVolumeAndArea(5));
calculateVolumeAndArea(15);
calculateVolumeAndArea(15.5);
calculateVolumeAndArea('15');
calculateVolumeAndArea(-15);


// 2 quest

function getCoupeNumber(number) {
    if (Number.isInteger(number) && number > 0 && number <=36) {
        let str = Math.ceil (number / 4);
        return str;
    }
    else if (number === 0 || number > 36) {
        let str =  'Таких мест в вагоне не существует';
        return str;
    }
    else {
        let str =  'Ошибка. Проверьте правильность введенного номера места';
        return str;
    }
}

console.log(getCoupeNumber(0));

// 3 quest

function getTimeFromMinutes(time) {
    if (Number.isInteger(time) && time <= 600 && time >= 0) {
        let hour = Math.floor(time / 60);
        let minute = time - (hour * 60);
        let str = `Это ${hour} часа и ${minute} минут`;
        if (hour == 1) {
            str = `Это ${hour} час и ${minute} минут`;
        }
        if (hour >= 5 && hour <= 10 || hour === 0) {
            str = `Это ${hour} часов и ${minute} минут`;
        }
        return str;
    }
    else {
        let str = 'Ошибка, проверьте данные';
        return str;
    }
}

console.log (getTimeFromMinutes(0));

// 4 quest

function findMaxNumber(one, two, three, four) {
    if (typeof(one) == 'number' && typeof(two) == 'number' && typeof(three) == 'number' && typeof(four) == 'number') {
        if (one > two) {
            if (one > three) {
                if (one > four) {
                    return one;
                }
            }
        }
        if (two > one) {
            if (two > three) {
                if (two > four) {
                    return two;
                }
            }
        }
        if (three > one) {
            if (three > two) {
                if (three > four) {
                    return three;
                }
            }
        }
        if (four > one) {
            if (four > two) {
                if (four > three) {
                    return four;
                }
            }
        }
    }
    if (typeof(one) !== 'number' ||
        typeof(two) !== 'number' ||
        typeof(three) !== 'number' ||
        typeof(four) !== 'number') {
        return 0;
    }
}

console.log (findMaxNumber(1,20,2,'0'));

// 5 quest

function fib(number) {
    if (typeof(number) != 'number') {
        return "";
    }
    if (number === 0) {
        return "";
    }
    if (number == 1) {    
     return 0;
    }
    if (number == 2) { 
        let str = '0 1';
        return str;
    }
    if (number > 2) { 
        let a = 0;
        let b = 1;
        let c;
        let str = '0 1';
        for (let i = 0; i < number - 2; i++) {
            c = a + b;
            a = b;
           str += ' ' + c;
            b = c;
         }
        return str;
    }
}

console.log(fib(0));