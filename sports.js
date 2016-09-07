'use strict';

var sportsArray = [['Basketball', 'Football', 'Soccer'],
                   ['College', 'Semi-Pro', 'Pro'],       // used for all 3 main categories
                   ['Beavers', 'Vikings', 'Ducks'],      // used for all college sports
                   ['Energy', 'Rainmakers', 'Chinooks'], // semi-pro basketball
                   ['Blazers', 'Fire', 'Storm'],         // pro basketball
                   ['Raiders', 'Stallions', 'Boltz'],    // semi-pro football
                   ['Seahawks', 'Steel', 'Shockwave'],   // pro football
                   ['Victory', 'Stars'],                 // semi-pro soccer
                   ['Timbers', 'Thorns', 'Sounders']];   // pro soccer

var main = document.getElementById('main');
// var tierOne = document.getElementById('tier_1');
var oneOne = document.getElementById('1_1');
var oneTwo = document.getElementById('1_2');
var oneThree = document.getElementById('1_3');

oneOne.addEventListener('click', oneOneClickHandler);
oneTwo.addEventListener('click', oneTwoClickHandler);
oneThree.addEventListener('click', oneThreeClickHandler);

// used to short circuit click handlers once clicked
var tierOneClicked = false;
// var tierTwoClicked = false;
// var tierThreeClicked = false;

// Baskbetball
// click handler
function oneOneClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
  // creates containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-1';
    main.appendChild(tierTwo);

  // creates individual divs
    for (var i = 0; i < sportsArray[1].length; i++) {
      var subCategory = document.createElement('div');
      subCategory.textContent = sportsArray[1][i];
      tierTwo.classList.add('tier_2');
      tierTwo.appendChild(subCategory);

      // adds on click functions to the subcategories
      // Basketball --> College --- Index [2]
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-1';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[2].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = sportsArray[2][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                localStorage.setItem('beavers', sportsArray[2][0]);
              }
            }
          }
        };

      // Basketball --> Semi-Pro --- Index [3]
      } else if (i === 1) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-2';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[3].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = sportsArray[3][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);
          }
        };

      // Basketball --> Pro --- Index [4]
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-3';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[4].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = sportsArray[4][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);
          }
        };
      }
    }
    tierOneClicked = true;
  }
}

// Football
// click handler
function oneTwoClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
  // creates containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-2';
    main.appendChild(tierTwo);

  // creates individual divs
    for (var i = 0; i < 3; i++) {
      var subCategory = document.createElement('div');
      subCategory.textContent = sportsArray[1][i];
      tierTwo.classList.add('tier_2');
      tierTwo.appendChild(subCategory);

      // Football --> College --- Index [2]
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-2';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[2].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = sportsArray[2][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);
          }
        };

      // Football --> Semi-pro --- Index [5]
      } else if (i === 1) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-3';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[5].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = sportsArray[5][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);
          }
        };

      // Football --> Pro --- Index [6]
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-4';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[6].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = sportsArray[6][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);
          }
        };
      }
    }
    tierOneClicked = true;
  }
}

// Soccer
// click handler
function oneThreeClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
  // creates containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-3';
    main.appendChild(tierTwo);

  // creates individual divs
    for (var i = 0; i < 3; i++) {
      var subCategory = document.createElement('div');
      subCategory.textContent = sportsArray[1][i];
      tierTwo.classList.add('tier_2');
      tierTwo.appendChild(subCategory);

      // Soccer --> College --- Index [2]
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-3';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[2].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = sportsArray[2][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);
          }
        };

      // Soccer --> Semi-pro --- Index [7]
      } else if (i === 1) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-4';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[7].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = sportsArray[7][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);
          }
        };

      // Soccer --> Pro --- Index [8]
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-5';
          main.appendChild(tierThree);

          for (var j = 0; j < sportsArray[8].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = sportsArray[8][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);
          }
        };
      }
    }
    tierOneClicked = true;
  }
}
