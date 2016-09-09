'use strict';

// Add user list to local storage
var array = JSON.parse(localStorage.getItem('storedArray'));

var list = document.getElementById('list');
var ul = document.createElement('ul');

try {
  for (var i = 0; i < array.length; i++) {
    var li = document.createElement('li');
    li.textContent = array[i];
    ul.appendChild(li);
    list.appendChild(ul);
  }
} catch(e) {
  console.log('Array is empty');
}

// Add functionality to user input list rating feature
var ratings = [];
var totalRating;
var avgRating;

var rateForm = document.getElementById('rating');
rateForm.addEventListener('submit', submitRating);

function submitRating() {
  totalRating = 0;
  event.preventDefault();
  ratings.push(Number(event.target.rating.value));
  for (var i = 0; i < ratings.length; i++) {
    totalRating += ratings[i];
    console.log('Total Rating:', totalRating);
    avgRating = totalRating / ratings.length;
    avgRating = (Math.round(avgRating * 2) / 2).toFixed(1);
    console.log('Average Rating:', avgRating);
  }
  var averageRating = document.getElementById('avg_rating');
  averageRating.textContent = 'Average Rating: ' + avgRating;
}

var clear = document.getElementById('clear');
clear.addEventListener('click', clearList);

function clearList() {
  localStorage.clear();
  location.reload();
}
