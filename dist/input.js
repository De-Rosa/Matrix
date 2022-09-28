

window.transformationComplete = false;
window.inputComplete = false;
window.inputChange = false;
window.transChange = false;
window.manualInput = null;

async function registerInput(x, y) {
  var value = parseFloat(document.getElementsByClassName("matrix-input")[(x)+(y*3)].value)
  if (!isNaN(value)) {
    window.transChange = true;
    if (y == 0) {
      window.transformation[x].x = value;
    } else if (y == 1) {
      window.transformation[x].y = value;
    } else if (y == 2) {
      window.transformation[x].z = value;
    }
    var count = 0;
    for (var i = 0; i<3; i++) {
      for (var j = 0; j<3; j++) {
        if (j == 0) {
          if (!isNaN(window.transformation[i].x)) {
            count += 1
          }
        } else if (j == 1) {
          if (!isNaN(window.transformation[i].y)) {
            count += 1
          }
        } else if (j == 2) {
          if (!isNaN(window.transformation[i].z)) {
            count += 1
          }
        }
      }
    }
    if (count == 9) {
      window.transformationComplete = true;
      console.log("completed transformation input")
    } else {
      window.transformationComplete = false;
    }
    count = 0;
  } else {
    if (y == 0) {
      window.transformation[x].x = NaN;
    } else if (y == 1) {
      window.transformation[x].y = NaN;
    } else if (y == 2) {
      window.transformation[x].z = NaN;
    }
    window.transformationComplete = false;
    count -= 1;
  }
}

async function registerInput2(x, y) {
  var value = parseFloat(document.getElementsByClassName("matrix2-input")[(x)+(y*4)].value)
  if (!isNaN(value)) {
    window.inputChange = true;
    window.customInput = null;
    if (y == 0) {
      window.input[x].x = value * 5 ;
    } else if (y == 1) {
      window.input[x].y = value * 5 ;
    } else if (y == 2) {
      window.input[x].z = value * 5 ;
    }
    var count = 0;
    for (var i = 0; i<4; i++) {
      for (var j = 0; j<3; j++) {
        if (j == 0) {
          if (!isNaN(window.input[i].x)) {
            count += 1
          }
        } else if (j == 1) {
          if (!isNaN(window.input[i].y)) {
            count += 1
          }
        } else if (j == 2) {
          if (!isNaN(window.input[i].z)) {
            count += 1
          }
        }
      }
    }
    console.log(count)
    if (count == 12) {
      window.inputComplete = true;
      console.log("completed input")
    } else {
      window.inputComplete = false;
    }
    count = 0;
  } else {
    if (y == 0) {
      window.input[x].x = NaN;
    } else if (y == 1) {
      window.input[x].y = NaN;
    } else if (y == 2) {
      window.input[x].z = NaN;
    }
    window.inputComplete = false;
    count -= 1;
  }
}

function setManualInput(inputString) {  
  window.inputChange = true;
  var originalList = inputString.split('/');
  var completedList = [];
  var tempList = [];
  for (var i=0; i<originalList.length; i++) {
    tempList = originalList[i].split('&');
    for (var j=0; j<tempList.length; j++) {
      tempList[j] = parseInt(tempList[j]) * 5;
    }
    completedList.push(tempList)
  }
  window.manualInput = completedList;
}

function createPopup() {
  input = window.prompt("Please input a custom matrix. (& to seperate row values, / to seperate columns)", "0&0&0/0&0&0/0&0&0/0&0&0/0&0&0")
  setManualInput(input);
}