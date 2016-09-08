'use strict';

// set array variables, grouped by tier
var artsArray = [
// tierOne == visual, music, performing
  // visual -- tierTwo
  [['Galleries', 'Museums', 'Special Events'],
    // visual -> galleries -- tierThree (sub-array[1])
    ['Openings', 'Exhibitions', 'Gallery Walks'],
    // visual -> museums -- tierThree (sub-array[2])
    ['Events', 'Exhibitions', 'Classes'],
    // visual -> specialEvents -- tierThree (sub-array[3])
    ['Festivals', 'Workshops', 'Other Events'],

  // music -- tierTwo
  ['Live Bands', 'Clubs', 'Classical'],
    // music -> liveBands -- tierThree (sub-array[4])
    ['National Acts', 'Local Bands', 'Cover Bands'],
    // music -> clubs -- tierThree (sub-array[5])
    ['DJs', 'Theme Dance Nights', 'third'],
    // music -> classical -- tierThree (sub-array[6])
    ['Orchestral', 'Vocal', 'Chamber'],

  // performing -- tierTwo
  ['Theater', 'Dance', 'Films']
    // performing -> theater -- tierThree (sub-array[7])
    ['Plays', 'Musicals', 'Performance Art'],
    // performing -> dance -- tierThree (sub-array[8])
    ['Ballet', 'Ethnic', 'Modern'],
    // performing-> films -- tierThree (sub-array[9])
    ['Festivals', 'Independent', 'Foreign'],
  ]
];
var storedArray = [];

//Get div elements by id
var main = document.getElementById('main');

var oneOne   = document.getElementById('1_1');
var oneTwo   = document.getElementById('1_2');
var oneThree = document.getElementById('1_3');

// add event listener for choosint catagories
oneOne.addEventListener('click', oneOneClickHandler);
oneTwo.addEventListener('click', oneTwoClickHandler);
oneThree.addEventListener('click', oneThreeClickHandler);

// click set to false so responses don't stack
var tierOneClicked = false;
// var tierTwoClicked = false;
// var tierThreeClicked = false;

// Clickhandler functions
// Visual arts
function oneOneClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
    // creates containing div
    var tierTwoOne = document.createElement('div');
    tierTwo.id = 'tier_2-1';
    main.appendChild(tierTwo);

  // creates individual divs
  for (var i = 0; i <artsArray[1].length; i++) {
    var subCategory = document.createElement('div');
    subCategory.textContent = artsArray[1][i];
    tierTwo.classList.add('tier_2');
    tierTwo.appendChild(subCategory);

      // Add onclick functions to subcategories
      // visual art --> galleries --> sub-array [1]
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3_1';
          main.appendChild(tierThree);

          for (var j = 0; j < artsArray[2].length; j++) {
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

      // visual art --> museums -- sub-array [2]
      } else if (i = 1) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div')
          tierThree.id = 'tier_3_2'
          main.appendChild(tierThree);

          for (var j = 0; j < artsArray[2].length, j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = artsArray[2][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(artsArray[3][0]);
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

      // visual art --> special events -- sub-array [3]
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3_3';
          main.appendChild(tierThree);

          for (var j = 0; j < artsArray[3].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = artsArray[3][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);

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


// music
function oneTwoClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
    // containing div
    var tierTwoOne = document.createElement('div');
    tierTwo.id = 'tier_2-2';
    main.appendChild(tierTwo);

    // individual divs
    for (var i = 0; i < 3; i++) {
      var subCategory = document.createElement('div');
      subCategory.textContent = artsArray[4][i];
      tierTwoOne.classList.add('tier_2');
      tierTwoOne.appendChild(subCategory);

      // music --> live bands -- sub-array [4]
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-2';
          main.appendChild(tierThree);

          for (var j = 0; j < artsArray[4].length; j++) {
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

        // music --> clubs --- sub-array [5]
        } else if (i === 1) {
          subCategory.onclick = function() {
            var tierThree = document.createElement('div');
            tierThree.id = 'tier_3-3';
            main.appendChild(tierThree);

            for (var j = 0; j < artsArray[5].length; j++) {
              var subCategory = document.createElement('div');
              subCategory.textContent = artsArray[5][j];
              tierThree.classList.add('tier_3');
              tierThree.appendChild(subCategory);

              if (j === 0) {
                subCategory.onclick = function() {
                  storedArray.push(artsArray[5][0]);
                };
              } else if (j === 1) {
                subCategory.onclick = function() {
                  storedArray.push(artsArray[5][1]);
                };
              } else {
                subCategory.onclick = function() {
                  storedArray.push(artsArray[5][2]);
                };
              }
            }
          };


      // music --> classical -- sub-array [6]
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-4';
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
      }
    }
    tierOneClicked = true;
  }
}

// performing arts
function oneThreeClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
  // containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-3';
    main.appendChild(tierTwo);

  // individual divs
    for (var i = 0; i < 3; i++) {
      var subCategory = document.createElement('div');
      subCategory.textContent = artsArray[1][i];
      tierTwo.classList.add('tier_2');
      tierTwo.appendChild(subCategory);

      // performing arts --> theater -- sub-array [7]
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-3';
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

        // performing arts --> dance --- sub-array [8]
        } else if (i === 1) {
          subCategory.onclick = function() {
            var tierThree = document.createElement('div');
            tierThree.id = 'tier_3-4';
            main.appendChild(tierThree);

            for (var j = 0; j < artsArray[8].length; j++) {
              var subCategory = document.createElement('div');
              subCategory.textContent = artsArray[8][j];
              tierThree.classList.add('tier_3');
              tierThree.appendChild(subCategory);

              if (j === 0) {
                subCategory.onclick = function() {
                  storedArray.push(artsArray[8][0]);
                };
              } else if {
                subCategory.onclick = function() {
                  storedArray.push(artsArray[8][1]);
                };
              } else {
                subCategory.onclick = function() {
                  storedArray.push(artsArray[8][2]);
                };
              }
            }
          };

      // performing arts --> film -- sub-array [9]
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-5';
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
      }
    }
    tierOneClicked = true;
  }
}


var results = document.getElementById('results');
results.addEventListener('click', resultsHandler);
function resultsHandler() {
  var storedArtsArray = JSON.stringify(storedArray);
  localStorage.setItem('storedArray', storedArtsArray);
};
