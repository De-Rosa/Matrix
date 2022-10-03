

window.transformationComplete = false;
window.inputComplete = false;
window.inputChange = false;
window.transChange = false;
window.manualInput = null;
window.inputString = null;
window.transDeterminant = null;

function mode(arr){
  return arr.sort((a,b) =>
        arr.filter(v => v===a).length
      - arr.filter(v => v===b).length
  ).pop();
}

function radiansToDegrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}

function oti() {
  if (window.transformationComplete & window.inputComplete) {
    window.inputChange = true;
    window.input = window.transformationPoints;
    var inputToList = convertTo3DList(window.input)
    for (var i=0; i<4; i++) {
      for (var j=0; j<3; j++) {
        document.getElementsByClassName("matrix2-input")[(j*4)+(i)].value = (inputToList[i][j]/5)
      }
    }
  }
}
function findDeterminant(matrixList) {
  var a = matrixList[0][0]
  var b = matrixList[1][0]
  var c = matrixList[2][0]
  var d = matrixList[0][1]
  var e = matrixList[1][1]
  var f = matrixList[2][1]
  var g = matrixList[0][2]
  var h = matrixList[1][2]
  var i = matrixList[2][2]

  return a*(e*i - f*h) - b*(d*i - f*g) + c*(d*h - e*g)
}
function inverse() {
  var matrixList = convertTo3DList(window.transformation);
  var determinant = findDeterminant(matrixList)
  if (determinant == 0) return;
  window.transDeterminant = determinant;
}

function getMatrixType() {
  var types = {"enlargement": true, "xy": true, "xz": true, "yz": true}
  var identityMatrix = [[1,0,0],[0,1,0],[0,0,1]]
  var xyReflect = [[1,0,0],[0,1,0],[0,0,-1]]
  var xzReflect = [[1,0,0],[0,-1,0],[0,0,1]]
  var yzReflect = [[-1,0,0],[0,1,0],[0,0,1]]
  var matrixList = convertTo3DList(window.transformation);
  var scaleFactor = mode([matrixList[0][0],matrixList[1][1],matrixList[2][2]])

  if (findDeterminant(matrixList) == 0) {
    document.getElementById("inverseID").style.cursor = 'not-allowed'
    document.getElementById("inverseID").style.color = '#999999'
    window.transDeterminant = null;
  } else {
    document.getElementById("inverseID").style.cursor = 'pointer'
    document.getElementById("inverseID").style.color = '#000000' 
  }
  for (var i = 0; i<3; i++) {
    for (var j = 0; j<3; j++) {
      if (!(matrixList[i][j] == (identityMatrix[i][j] * scaleFactor))) {
        types["enlargement"] = false;
      }
      if (!(matrixList[i][j] == (yzReflect[i][j] * Math.abs(scaleFactor)))) {
        types["yz"] = false;
      }
      if (!(matrixList[i][j] == (xyReflect[i][j] * Math.abs(scaleFactor)))) {
        types["xy"] = false;
      }
      if (!(matrixList[i][j] == (xzReflect[i][j] * Math.abs(scaleFactor)))) {
        types["xz"] = false;
      }
    }
  }
  if (types["enlargement"]) {
    document.getElementById("transType").innerHTML = "enlargement by scale factor " + scaleFactor
    return;
  }
  if (types["yz"]) {
    document.getElementById("transType").innerHTML = "reflection in yz-plane, scale factor " + scaleFactor
    return;
  }
  if (types["xy"]) {
    document.getElementById("transType").innerHTML = "reflection in xy-plane, scale factor " + scaleFactor
    return;
  }
  if (types["xz"]) {
    document.getElementById("transType").innerHTML = "reflection in xz-plane, scale factor " + scaleFactor
    return;
  }
  
  if (matrixList[0][0] == 1) {
    if (matrixList[1][1] == matrixList[2][2]) {
      if ((0-(matrixList[2][1])) == matrixList[1][2]) {
        if (matrixList[1][0] == 0 & matrixList[2][0] == 0 & matrixList[0][1] == 0 & matrixList[0][2] == 0) {
          if (Math.acos(matrixList[2][2]).toPrecision(2) == Math.asin(matrixList[1][2]).toPrecision(2)) {
            document.getElementById("transType").innerHTML = "rotation of " + radiansToDegrees(Math.acos(matrixList[2][2])).toPrecision(3) + " degrees anti-clockwise about the x axis "
            return;
          }
          if (matrixList[2][2] == -1 & matrixList[1][2] == 0) {
            document.getElementById("transType").innerHTML = "rotation of 180 degrees about the x axis "
            return;
          }
        }
      }
    }
  }
  if (matrixList[1][1 ] == 1) {
    if (matrixList[0][0] == matrixList[2][2]) {
      if ((0-(matrixList[0][2])) == matrixList[2][0]) {
        if (matrixList[1][0] == 0 & matrixList[0][1] == 0 & matrixList[1][2] == 0 & matrixList[2][1] == 0) {
          if (Math.acos(matrixList[2][2]).toPrecision(2) == Math.asin(matrixList[2][0]).toPrecision(2)) {
            document.getElementById("transType").innerHTML = "rotation of " + radiansToDegrees(Math.acos(matrixList[2][2])).toPrecision(3) + " degrees anti-clockwise about the y axis "
            return;
          }
          if (matrixList[2][2] == -1 & matrixList[2][0] == 0) {
            document.getElementById("transType").innerHTML = "rotation of 180 degrees about the y axis "
            return;
          }
        }
      }
    }
  }
  if (matrixList[2][2] == 1) {
    if (matrixList[0][0] == matrixList[1][1]) {
      if ((0-(matrixList[1][0])) == matrixList[0][1]) {
        if (matrixList[2][0] == 0 & matrixList[2][1] == 0 & matrixList[0][2] == 0 & matrixList[1][2] == 0) {
          if (Math.acos(matrixList[0][0]).toPrecision(2) == Math.asin(matrixList[0][1]).toPrecision(2)) {
            document.getElementById("transType").innerHTML = "rotation of " + radiansToDegrees(Math.acos(matrixList[0][0])).toPrecision(3) + " degrees anti-clockwise about the z axis "
            return;
          }
          if (matrixList[0][0] == -1 & matrixList[0][1] == 0) {
            document.getElementById("transType").innerHTML = "rotation of 180 degrees about the z axis "
            return;
          }
        }
      }
    }
  }
  document.getElementById("transType").innerHTML = "unknown transformation"
}

function convertTo3DList(listOfVector3) {
  var newList = []
  for (var i = 0; i<listOfVector3.length; i++) {
    for (var j = 0; j<3; j++) {
      newList.push([null,null,null])
      switch (j) {
        case 0:
          newList[i][0] = listOfVector3[i].x
        case 1:
          newList[i][1] = listOfVector3[i].y
        case 2:
          newList[i][2] = listOfVector3[i].z
      }
    }
  }
  return newList
}

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
      getMatrixType()
    } else {
      document.getElementById("transType").innerHTML = "invalid transformation"
      window.transformationComplete = false;
      document.getElementById("inverseID").style.cursor = "not-allowed"
      document.getElementById("inverseID").style.color = '#999999'
      window.transDeterminant = null; 
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
    document.getElementById("transType").innerHTML = "invalid transformation"
    window.transformationComplete = false;
    count -= 1;
    document.getElementById("inverseID").style.cursor = "not-allowed"
    document.getElementById("inverseID").style.color = '#999999' 
    window.transDeterminant = null;
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
  window.inputString = inputString;
  window.inputChange = true;
  var originalList = inputString.split('/');
  if (originalList.length < 3) return;
  if (originalList.length < 4) {
    originalList.push(originalList[0]);
  }
  window.completedList = [];
  var tempList = [];
  for (var i=0; i<originalList.length; i++) {
    tempList = originalList[i].split(',');
    for (var j=0; j<tempList.length; j++) {
      tempList[j] = parseInt(tempList[j]) * 5;
    }
    window.completedList.push(tempList)
  }
  window.manualInput = completedList;
}

function createPopup() {
  if (window.inputString != null) {
    newInput = window.prompt("Please input a custom matrix. (, to seperate column values (x,y,z) and / to seperate rows). Minimum 3 points.", window.inputString)
  } else {
    newInput = window.prompt("Please input a custom matrix. (, to seperate column values (x,y,z) and / to seperate rows). Minimum 3 points.", "0,0,0/0,0,0/0,0,0/0,0,0/0,0,0")
  }
  setManualInput(newInput);
}
