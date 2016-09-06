'use strict';

var sportsArray = [['Basketball', 'Football', 'Baseball'], ['College', 'Semi-Pro', 'Pro']];


var main = document.getElementById('main');
var tierOne = document.getElementById('tier_1');
var oneOne = document.getElementById('1_1');
var oneTwo = document.getElementById('1_2');
var oneThree = document.getElementById('1_3');

oneOne.addEventListener('click', oneOneClickHandler);
oneTwo.addEventListener('click', oneTwoClickHandler);
// oneThree.addEventListener('click', oneThreeClickHandler);

function oneOneClickHandler() {
  // creates containing div
  var tierTwoOne = document.createElement('div');
  tierTwoOne.id = 'tier_2-1';
  main.appendChild(tierTwoOne);

  // creates individual divs
  for (var i = 0; i < 3; i++) {
    var subCatOne = document.createElement('div');
    subCatOne.textContent = sportsArray[1][i];
    tierTwoOne.classList.add('tier_2');
    tierTwoOne.appendChild(subCatOne);
  }
}

function oneTwoClickHandler() {
  // creates containing div
  var tierTwoOne = document.createElement('div');
  tierTwoOne.id = 'tier_2-2';
  main.appendChild(tierTwoOne);

  // creates individual divs
  for (var i = 0; i < 3; i++) {
    var subCatOne = document.createElement('div');
    subCatOne.textContent = sportsArray[1][i];
    tierTwoOne.classList.add('tier_2');
    tierTwoOne.appendChild(subCatOne);
  }
}
