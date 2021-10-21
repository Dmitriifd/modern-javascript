function firstFunc(arr, handler) {
  let res = 'New value: ';
  for (let i = 0; i < arr.length; i++) {
    res += handler(arr[i]);
  }

  return res;
}

const res1 = firstFunc(['hello', 'my', 'name', 'is', 'denis'], function(item) {
  return item[0].toUpperCase() + item.slice(1);
});

const res2 = firstFunc([10, 20, 30], function(item) {
  return item * 10 + ' ';
});

// console.log(res2);

const isAllNubers = [2, '3', 4, 5].every(function(num) {
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

const isNum = every([2, 4, 5], function(num) {
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

let sizes = { width: 5, height: 10 },
  getSquare = function() {
    return this.width * this.height;
  };

getSquare.call(sizes);

let element = {
  height: 25,
  getHeight: function() {
    return this.height;
  },
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight(); // undefined
