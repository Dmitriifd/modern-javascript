const user = {
  firstName: 'Denis',
  age: 30,
  isAdmin: true,
  email: 'test@test.com',
  'user-address': {
    city: 'Kharkiv'
  },
  skills: ['html', 'css', 'js']
};

let value;
let prop = 'skills';

value = user.firstName;
value = user['isAdmin'];
value = user['user-address'];
value = user['user-address'].city;
value = user['user-address']['city'];
value = user[prop][0];

user.firstName = 'Den';

value = user.firstName;

user.info = 'Some info';

value = user.info;

user['user-address'].city = 'Kiev';
user['user-address'].country = 'Ukraine';

console.log(user.plan);
user.plan = {};
user.plan.basic = 'basic';

console.log(value);
console.log(user);
