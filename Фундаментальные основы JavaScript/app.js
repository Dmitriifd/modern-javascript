function firstFunc(arr, handler) {
    let res = 'New value: ';
    for (let i = 0; i < arr.length; i++) {
        res += handler(arr[i]);
    }

    return res;
}

const res1 = firstFunc(['hello', 'my', 'name', 'is', 'denis'], function (item) {
    return item[0].toUpperCase() + item.slice(1);
});

const res2 = firstFunc([10, 20, 30], function (item) {
    return item * 10 + ' ';
});

// console.log(res2);

const isAllNubers = [2, '3', 4, 5].every(function (num) {
    return typeof num === 'number';
});

// console.log(isAllNubers);

function every(arr, handler) {
    for (let i = 0; i < arr.length; i++) {
        if (!handler(arr[i])) {
            return false;
        }
    }

    return true;
}

const isNum = every([2, 4, 5], function (num) {
    return typeof num === 'number';
});

// console.log(isNum);

let prod1 = {
    price: 20,
    counts: 100,
    getTotalPrice() {
        return this.price * this.counts;
    },
};

let prod2 = {
    price: 10,
    counts: 50,
};

prod1.getTotalPrice.call(prod2);

let sizes = {
    width: 5, height: 10
}

let getSquare = function () {
    return this.width * this.height;
};

console.log(getSquare.call(sizes));

let element = {
    height: 25,
    getHeight: function () {
        return this.height;
    },
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight(); // undefined

// решение задач

// Перемножение аргументов
function multiply() {
    let res = 1;
    if (!arguments.length) {
        return 0;
    }
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            console.log(res *= arguments[i]);
        }
    }
    return res;
}

console.log(multiply(1, 2, 3, 4));

//console.log()
// Угадать число
function gameCheckNumber(num) {
    if (num < 0 || num > 10) {
        console.log('Функция принимает число от 1 до 10');
        return;
    }
    const random = Math.ceil(Math.random() * 10);
    console.log(random);
    if (random === num) {
        console.log('Победа');
    } else {
        console.log(`Вы не угадали ваше число ${num} а выпало число ${random}`);
    }
}

gameCheckNumber(5)

// Удалить первый элемент массива 
function changeCollection() {
    console.log(arguments);
    let res = [];
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].shift();
        console.log(arguments[i]);
        res.push(arguments[i])
    }
    console.log(res);
}

changeCollection([2, 3, 4], [5, 77, 83], [9, 3, 44]);

// 
const users = [{
    gender: 'male',
}, {
    gender: 'nomale',
}, {
    gender: 'one male',
},]
function filterUsers(arr, key, value) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i][key] === value) {
            res.push(arr[i])
        }
    }
    return res;
}

console.log(filterUsers(users, 'gender', 'male'));

// 
function firstFunc(arr, handler) {
    let res = 'New value: ';
    for (let i = 0; i < arr.length; i++) {
        res += handler(arr[i])
    }
    return res;
}

let res1 = firstFunc(['Hello', 'my', 'name'], function (item) {
    // console.log(item);
    return item[0].toUpperCase() + item.slice(1)
})
const res2 = firstFunc([10, 20, 30], function (item) {
    return item * 10 + ' ';
});
console.log(res2);

// Получить строку из массива
const arr = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2}, {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0}, {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

function getStringFromArray(arr) {
    const copyArr = arr.slice();
    const sordetArr = copyArr.sort((prev, next) => prev.index - next.index);
    const strFromArr = sordetArr.reduce((acc, current) => {
        return acc += current.char;
    }, '')
    // console.log(sordetArr);
    console.log(strFromArr);
    return strFromArr;
}

getStringFromArray(arr) 

//замыкания 