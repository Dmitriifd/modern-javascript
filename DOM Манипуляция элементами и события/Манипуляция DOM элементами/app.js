// *Манипуляция DOM
const title = document.querySelector('h1');
// title.innerHTML = '<span>text</span>';
// title.textContent = '<span>new text</span>';
// title.appendChild('<span>appen</span>');
// title.insertAdjacentHTML('beforebegin', '<h2>title h2</h2>');
// title.insertAdjacentElement

// title.innerHTML += '<span>new text</span>';
// const span = title.querySelector('span');
// console.log(span);
// title.innerHTML += '<span>new text2</span>';
// span.innerHTML = 'asdasd';

// *Создание элемента
const span = document.createElement('span');
span.textContent = 'span created by createElement';
span.classList.add('myClass');
console.log(span);
title.appendChild(span);

// div.appendChild(span);
const fragment = document.createDocumentFragment();
const colors = ['black', 'yellow', 'orange'];
colors.forEach(color => {
  const item = document.createElement('div');
  item.classList.add(`bg-${color}`);
  item.style.background = color;
  item.textContent = color;
  fragment.appendChild(item);
});

document.body.appendChild(fragment);

// *Удаление элементов
// title.remove()
// title.parentElement.removeChild(title)
