'use strict';

var sportsArray = [['Basketball', 'Football', 'Baseball'], ['College', 'Semi-Pro', 'Pro'], ['Beavers', 'Ducks', 'Vikings']];


var main = document.getElementById('main');
// var tierOne = document.getElementById('tier_1');
var oneOne = document.getElementById('1_1');
var oneTwo = document.getElementById('1_2');
var oneThree = document.getElementById('1_3');

oneOne.addEventListener('click', oneOneClickHandler);
oneTwo.addEventListener('click', oneTwoClickHandler);
oneThree.addEventListener('click', oneThreeClickHandler);

var clicked = false;

function oneOneClickHandler() {
  if (clicked === true) {
    return;
  } else {
  // creates containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-1';
    main.appendChild(tierTwo);

  // creates individual divs
    for (var i = 0; i < 3; i++) {
      var subCatOne = document.createElement('div');
      subCatOne.textContent = sportsArray[1][i];
      tierTwo.classList.add('tier_2');
      tierTwo.appendChild(subCatOne);
      if (i === 0) {
        subCatOne.onclick = function() {
          var tierThree = document.createElement('div');
          tierThree.id = 'tier_3-1';
          main.appendChild(tierThree);

          for (var j = 0; j < 3; j++) {
            var subCatOne = document.createElement('div');
            subCatOne.textContent = sportsArray[2][i];
            tierThree.classList.add('tier_3');
            tierThree.appendChild(subCatOne);
          }
          // var subCatTwo = document.createElement('div');

        };
      } else if (i === 1) {
        subCatOne.onclick = function() {
          alert('test 2');
        };
      } else {
        subCatOne.onclick = function() {
          alert('test 3');
        };
      }
    }
    clicked = true;
  }
}

function oneTwoClickHandler() {
  if (clicked === true) {
    return;
  } else {
  // creates containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-2';
    main.appendChild(tierTwo);

  // creates individual divs
    for (var i = 0; i < 3; i++) {
      var subCatOne = document.createElement('div');
      subCatOne.textContent = sportsArray[1][i];
      tierTwo.classList.add('tier_2');
      tierTwo.appendChild(subCatOne);
      if (i === 0) {
        subCatOne.onclick = function() {
          subCatOne.addEventListener('click', testClickHandler1);
          function testClickHandler1() {}
          alert('test');
        };
      } else if (i === 1) {
        subCatOne.onclick = function() {
          subCatOne.addEventListener('click', testClickHandler2);
          function testClickHandler2() {}
          alert('test 2');
        };
      } else {
        subCatOne.onclick = function() {
          subCatOne.addEventListener('click', testClickHandler3);
          function testClickHandler3() {}
          alert('test 3');
        };
      }
    }
    clicked = true;
  }
}

function oneThreeClickHandler() {
  if (clicked === true) {
    return;
  } else {
  // creates containing div
    var tierTwo = document.createElement('div');
    tierTwo.id = 'tier_2-3';
    main.appendChild(tierTwo);

  // creates individual divs
    for (var i = 0; i < 3; i++) {
      var subCatOne = document.createElement('div');
      subCatOne.textContent = sportsArray[1][i];
      tierTwo.classList.add('tier_2');
      tierTwo.appendChild(subCatOne);
      if (i === 0) {
        subCatOne.onclick = function() {
          subCatOne.addEventListener('click', testClickHandler1);
          function testClickHandler1() {}
          alert('test');
        };
      } else if (i === 1) {
        subCatOne.onclick = function() {
          subCatOne.addEventListener('click', testClickHandler2);
          function testClickHandler2() {}
          alert('test 2');
        };
      } else {
        subCatOne.onclick = function() {
          subCatOne.addEventListener('click', testClickHandler3);
          function testClickHandler3() {}
          alert('test 3');
        };
      }
    }
    clicked = true;
  }
}
