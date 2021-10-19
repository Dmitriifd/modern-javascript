// >, <, >=, <=, ==, ===, !=, !==

let value;

value = 1 > 2;
value = 2 <= 2;
value = 1 == 1;
value = 1 == '1';
value = 1 === '1';
value = 1 != '1';
value = 1 !== '1';
value = 'a' > 'ab';
value = 'A'.charCodeAt();

// console.log(value);

// if (условие) {
//   // actions
// } else {
//   // else actions
// }

value = 10;

// if (value !== 10) {
//   console.log('value: 10');
// } else {
//   console.log('else');
// }

// value = 100;

// if (value) {
//   console.log('some actions', value);
// } else {
//   console.log('else', value);
// }

// || && !
// value = null;

// if (!value) {
//   console.log(value);
// }

// value = [1];

// if (value.length) {
//   console.log(value);
// } else {
//   console.log('array is empty');
// }

// value = null

// if (Array.isArray(value)) {
//   console.log(value);
// } else {
//   console.log('array is empty');
// }


// let user = {
//   name: null
// };

// if (user.hasOwnProperty('name')) {
//   console.log(user.name);
// } else {
//   console.log('else');
// }

// || &&
// value = 0 || 0 || null;

// let age = 10;

// if (age < 16 || age > 65) {
//   console.log('some actions');
// } else {
//   console.log('else');
// }

// let serverNickname = '';
// let nickname = serverNickname || 'default nickname';

// console.log(nickname);

// value = 1 && 2 && 3;

// productPrice = 10;

// if (productPrice >= 5 && productPrice <= 20) {
//   console.log('беру');
// } else {
//   console.log('else');
// }

// console.log(value);

value = 10;

if (value < 10) {
  console.log('value < 10', value);
} else if (value >= 10) {
  console.log('value >= 10', value);
} else {
  console.log('else');
}