'use strict';

// Create multidimensional array for categories chosen, grouped by tier
var learningArray = [
// tierOne = presentations/skill development/connect with others
  // presentations --> tierTwo
  [['academic', 'political', 'motivational'],
  // presentations --> academic --> tierThree
  ['university', 'other venue'],
  // presentations --> political --> tierThree
  ['rally', 'speech'],
  // presentations --> motivational --> tierThree
  ['famous', 'grassroots'],

  // education --> tierTwo
  ['personal', 'professional'],
  // education --> personal --> tierThree
  ['classes', 'one-on-one'],
  // education --> professional --> tierThree
  ['workshops', 'job fairs'],

  // connect with others --> tierTwo (= education --> tierTwo)
  // connect with others --> personal --> tierThree
  ['shared interests', 'casual socializing'],
  // connect with others --> professional --> tierThree
  ['networking', 'job search']];
];

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

// Create three clickHandler functions to populate elements for subCatOne
// presentations
function oneOneClickHandler() {
  if (tierOneClicked === true) {
    return;
  } else {
  // Create containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-1'
    main.appendChild(tierTwo);

//Create individual divs by looping through learningArray
    for (var i = 0; i < learningArray[1].length; i++) {
      var subCategory = document.createElement('div')
      subCategory.textContent = learningArray[1][i];
      tierTwo.classList.add ('tier_2');
      tierTwo.appendChild(subCategory);

      // Add onclick functions to subcategories
      // presentations --> academic -->
      if (i === 0) {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3_1';
          main.appendChild(tierThree);

          for (var j = 0; j < learningArray[2].length; j++) {
            var subCategory = document.createElement('div')
            subCategory.textContent = learningArray[2][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);

            if (j === 0) {
              subCategory.onclick = function() {
                localStorage.setItem('', learningArray[][])
        }
      }
    }
  };

      // presentations --> political -->
      } else if (i === 1) {
        subCategory.onclick. = function () {
          var tierThree = document.createElement('div')
          tierThree.id = 'tier_3_2'
          main.appendChild(tierThree);

          for (var j = 0; j <learningArray[3].length, j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = learningArray[3][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);
          }
        };

      // presentations --> motivational -->
      } else {
        subCategory.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3_3';
          main.appendChild(tierThree);

          for (var j = 0; j < learningArray[4].length; j++) {
            var subCategory = document.createElement('div');
            subCategory.textContent = learningArray[4][j];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCategory);
          }
        };
      }
    }
    tierOneClicked = true;
  }
}
