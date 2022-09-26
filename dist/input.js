

window.transformationComplete = false;
window.inputComplete = false;
window.inputChange = false;
window.transChange = false;

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
  console.log(value)
  if (!isNaN(value)) {
    window.inputChange = true;
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
