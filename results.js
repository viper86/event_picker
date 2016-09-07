'use strict';

var array = JSON.parse(localStorage.getItem('storedArray'));

var list = document.getElementById('list');
var ul = document.createElement('ul');
for (var i = 0; i < array.length; i++) {
  var li = document.createElement('li');
  li.textContent = array[i];
  ul.appendChild(li);
  list.appendChild(ul);
}
