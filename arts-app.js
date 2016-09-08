'use strict';

// set array variables, grouped by tier
var artsArray = [
// tierOne == visual arts, music, performing arts
  // visual arts
  ['Galleries', 'Museums', 'Special Events'], // visual -> -- tierTwo (sub-array[0])
    ['Openings', 'Exhibitions', 'Gallery Walks'], // visual -> museums -- tierThree (sub-array[1])
    ['Events', 'Exhibitions', 'Classes'], // visual -> specialEvents -- tierThree (sub-array[2])
    ['Festivals', 'Workshops', 'Other Events'], // visual -> specialEvents -- tierThree (sub-array[3])

  // music
  ['Live Bands', 'Clubs', 'Classical'], // music -- tierTwo (sub-array[4])
    ['National Acts', 'Local Bands', 'Cover Bands'], // music -> liveBands -- tierThree (sub-array[5])
    ['DJs', 'Theme Dance Nights', 'Line Dancing'], // music -> clubs -- tierThree (sub-array[6])
    ['Orchestral', 'Vocal', 'Chamber'], // music -> classical -- tierThree (sub-array[7])

  // performing arts
  ['Theater', 'Dance', 'Films'], // performing -> theater -- tierTwo (sub-array[8])
    ['Plays', 'Musicals', 'Performance Art'], // performing -> theater -- tierThree (sub-array[9])
    ['Ballet', 'Ethnic', 'Modern'], // performing -> dance -- tierThree (sub-array[10])
    ['Festivals', 'Independent', 'Foreign'] // performing-> films -- tierThree (sub-array[11])
];

var storedArray = [];

//Get div elements by id
var main = document.getElementById('main');

var oneOne   = document.getElementById('1_1');
var oneTwo   = document.getElementById('1_2');
var oneThree = document.getElementById('1_3');

// add event listener for choosing catagories
oneOne.addEventListener('click', oneOneClickHandler);
oneTwo.addEventListener('click', oneTwoClickHandler);
oneThree.addEventListener('click', oneThreeClickHandler);

// click set to false so responses don't stack
var tierOneClicked = false;
// var tierTwoClicked = false;
// var tierThreeClicked = false;


// Visual Arts
// click handler
function oneOneClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
  // creates containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-1';
    main.appendChild(tierTwo);

  // creates individual divs Index [0]
    for (var i = 0; i < artsArray[0].length; i++) {
      var subCategory = document.createElement('div');
      subCategory.textContent = artsArray[0][i];
      tierTwo.classList.add('tier_2');
      tierTwo.appendChild(subCategory);

      // adds on click functions to the subcategories
      // Visual Arts -> galleries --- Index [1]
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-1';
          main.appendChild(tierThree);

          for (var j = 0; j < artsArray[1].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = artsArray[1][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[1][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[1][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(artsArray[1][2]);
              };
            }
          }
        };

      // Visual Arts -> Museums --- Index [2]
      } else if (i === 1) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-2';
          main.appendChild(tierThree);

          for (var j = 0; j < artsArray[2].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = artsArray[2][j];
            tierThree.classList.add('tier_2');
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[2][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[2][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(artsArray[2][2]);
              };
            }
          }
        };

      // Visual Arts -> Special Events --- Index [3]
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-3';
          main.appendChild(tierThree);

          for (var j = 0; j < artsArray[3].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = artsArray[3][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[3][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[3][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(artsArray[3][2]);
              };
            }
          }
        };
      }
    }
    tierOneClicked = true;
  }
}

// Music
// click handler
function oneTwoClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
  // creates containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-2';
    main.appendChild(tierTwo);

  // Music individual div  - Index [4]
    for (var i = 0; i < 3; i++) {
      var subCategory = document.createElement('div');
      subCategory.textContent = artsArray[4][i];
      tierTwo.classList.add('tier_2');
      tierTwo.appendChild(subCategory);

      // Music --> Live --- Index [5]
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-2';
          main.appendChild(tierThree);

          for (var j = 0; j < artsArray[5].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = artsArray[4][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[4][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[4][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(artsArray[4][2]);
              };
            }
          }
        };

      // Music --> Clubs --- Index [6]
      } else if (i === 1) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-3';
          main.appendChild(tierThree);

          for (var j = 0; j < artsArray[6].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = artsArray[6][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[6][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[6][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(artsArray[6][2]);
              };
            }
          }
        };

      // Music --> Classical --- Index [7]
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-4';
          main.appendChild(tierThree);

          for (var j = 0; j < artsArray[7].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = artsArray[7][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[7][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[7][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(artsArray[7][2]);
              };
            }
          }
        };
      }
    }
    tierOneClicked = true;
  }
}

// Perfoming Arts
// click handler
function oneThreeClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
// creates containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-3';
    main.appendChild(tierTwo);

  // Perfoming Arts div --- Index [8]
    for (var i = 0; i < 3; i++) {
      var subCategory = document.createElement('div');
      subCategory.textContent = artsArray[1][i];
      tierTwo.classList.add('tier_2');
      tierTwo.appendChild(subCategory);

      // Perfoming Arts --> Theater --- Index [9]
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-3';
          main.appendChild(tierThree);

          for (var j = 0; j < artsArray[9].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = artsArray[9][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[9][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[9][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(artsArray[9][2]);
              };
            }
          }
        };

      // Perfoming Arts --> Dance --- Index [10]
      } else if (i === 1) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-4';
          main.appendChild(tierThree);

          for (var j = 0; j < artsArray[10].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = artsArray[10][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[10][0]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(artsArray[10][1]);
              };
            }
          }
        };

      // Perfoming Arts --> Films --- Index [11]
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-5';
          main.appendChild(tierThree);

          for (var j = 0; j < artsArray[11].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = artsArray[11][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[11][0]);
              };
            } else if (j === 1) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[11][1]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(artsArray[11][2]);
              };
            }
          }
        };
      }
    }
    tierOneClicked = true;
  }
}

var results = document.getElementById('results');
results.addEventListener('click', resultsHandler);
function resultsHandler() {
  var storeArray = JSON.stringify(storedArray);
  localStorage.setItem('storedArray', storeArray);
};
