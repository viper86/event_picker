'use strict';

// Create multidimensional array for categories chosen, grouped by tier
var learningArray =
// tierOne = presentations/skill development/connect with others
  // presentations --> tierTwo
  [['academic', 'political', 'motivational'],
  // presentations --> academic --> tierThree
  ['university', 'other venue'],
  // presentations --> political --> tierThree
  ['rally', 'speech'],
  // presentations --> motivational --> tierThree
  ['famous', 'grassroots'],

  // skill development --> tierTwo
  ['personal', 'professional'],
  // skill development --> personal --> tierThree
  ['classes', 'one-on-one'],
  // skill development --> professional --> tierThree
  ['workshops', 'job fairs'],

  // connect with others --> tierTwo (= skill dev. --> tierTwo)
  // connect with others --> personal --> tierThree
  ['shared interests', 'casual socializing'],
  // connect with others --> professional --> tierThree
  ['networking', 'job search']
];

// Set storedArray to what is in local storage
var storedArray = JSON.parse(localStorage.getItem('storedArray'));;

// Check if information is in local storage
// If null, sets storedArray equal to empty array
if (!storedArray) {
  storedArray = [];
}

// Get div elements by id
var main     = document.getElementById('main');
var oneOne   = document.getElementById('1_1');
var oneTwo   = document.getElementById('1_2');
var oneThree = document.getElementById('1_3');

// Add event listener for 'click' on chosen category
oneOne.addEventListener('click', oneOneClickHandler);
oneTwo.addEventListener('click', oneTwoClickHandler);
oneThree.addEventListener('click', oneThreeClickHandler);

// Set clicked choice to false so that responses do not stack
var tierOneClicked   = false;
// var tierTwoClicked   = false;
// var tierThreeClicked = false;

// Create three clickHandler functions to populate elements for tierTwo
// presentations
function oneOneClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
  // Create containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2_1'
    main.appendChild(tierTwo);

//Create individual divs by looping through learningArray
    for (var i = 0; i < learningArray[0].length; i++) {
      var subCategory = document.createElement('div');
      var h3 = document.createElement('h3');
      h3.textContent = learningArray[0][i];
      tierTwo.classList.add ('tier_2');
      subCategory.appendChild(h3);
      tierTwo.appendChild(subCategory);

    // Add onclick functions to subcategories
      // presentations --> academic -->
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3_1';
          main.appendChild(tierThree);

          for (var j = 0; j < learningArray[1].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = learningArray[1][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(learningArray[1][0]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(learningArray[1][1]);
              };
            }
          }
        };

      // presentations --> political -->
      } else if (i === 1) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3_2';
          main.appendChild(tierThree);

          for (var j = 0; j < learningArray[2].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = learningArray[2][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(learningArray[2][0]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(learningArray[2][1]);
              };
            }
          }
        };

      // presentations --> motivational -->
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3_3';
          main.appendChild(tierThree);

          for (var j = 0; j < learningArray[3].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = learningArray[3][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(learningArray[3][0]);
              };
            } else {
              subCategory.onclick = function() {
                subCategory.push(learningArray[3][1]);
              };
            }
          }
        };
      }
    }
    tierOneClicked = true;
  }
}

// Create three clickHandler functions to populate elements for tierTwo
// skill development
function oneTwoClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
// Create containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2_2';
    main.appendChild(tierTwo);

// Create individual divs by looping through learningArray
    for (var i = 0; i < 2; i++) {
      var subCategory = document.createElement('div');
      var h3 = document.createElement('h3');
      h3.textContent = learningArray[4][i];
      tierTwo.classList.add('tier_2');
      subCategory.appendChild(h3);
      tierTwo.appendChild(subCategory);

  // Add onclick functions to subcategories
      // skill development --> personal -->
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3_2';
          main.appendChild(tierThree);

          for (var j = 0; j < learningArray[5].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = learningArray[5][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(learningArray[5][0]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(learningArray[5][1]);
              };
            }
          }
        };

      // skill development --> professional -->
      } else if (i === 1) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3_2';
          main.appendChild(tierThree);

          for (var j = 0; j < learningArray[6].length; j++) {
            var subCategory = document.createElement('div');
            var h3 = document.createElement('h3');
            h3.textContent = learningArray[6][j];
            tierThree.classList.add('tier_3');
            subCategory.appendChild(h3);
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                storedArray.push(learningArray[6][0]);
              };
            } else {
              subCategory.onclick = function() {
                storedArray.push(learningArray[6][1]);
              };
            }
          }
        };
      }
    }
    tierOneClicked = true;
  }
}

// Create three clickHandler functions to populate elements for tierTwo
// connect with others
function oneThreeClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
// Create containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-3';
    main.appendChild(tierTwo);

    // Create individual divs by looping through learningArray
        for (var i = 0; i < 2; i++) {
          var subCategory = document.createElement('div');
          var h3 = document.createElement('h3');
          h3.textContent = learningArray[4][i];
          tierTwo.classList.add('tier_2');
          subCategory.appendChild(h3);
          tierTwo.appendChild(subCategory);

      // Add onclick functions to subcategories
          // connect with others --> personal -->
          if (i === 0) {
            subCategory.onclick = function() {
              var tierThree = document.createElement('div');
              tierThree.id = 'tier_3_2';
              main.appendChild(tierThree);

              for (var j = 0; j < learningArray[7].length; j++) {
                var subCategory = document.createElement('div');
                var h3 = document.createElement('h3');
                h3.textContent = learningArray[7][j];
                tierThree.classList.add('tier_3');
                subCategory.appendChild(h3);
                tierThree.appendChild(subCategory);

                if (j === 0) {
                  subCategory.onclick = function() {
                    storedArray.push(learningArray[7][0]);
                  };
                } else {
                  subCategory.onclick = function() {
                    storedArray.push(learningArray[7][1]);
                  };
                }
              }
            };

          // skill development --> professional -->
          } else if (i === 1) {
            subCategory.onclick = function() {
              var tierThree = document.createElement('div');
              tierThree.id = 'tier_3_2';
              main.appendChild(tierThree);

              for (var j = 0; j < learningArray[8].length; j++) {
                var subCategory = document.createElement('div');
                var h3 = document.createElement('h3');
                h3.textContent = learningArray[8][j];
                tierThree.classList.add('tier_3');
                subCategory.appendChild(h3);
                tierThree.appendChild(subCategory);

                if (j === 0) {
                  subCategory.onclick = function() {
                    storedArray.push(learningArray[8][0]);
                  };
                } else {
                  subCategory.onclick = function() {
                    storedArray.push(learningArray[8][1]);
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

var newTree = document.getElementById('refresh');

newTree.addEventListener('click', newTreeHandler);

function newTreeHandler() {
  var storeArray = JSON.stringify(storedArray);
  localStorage.setItem('storedArray', storeArray);
  location.reload();
};
