import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.132.0/examples/jsm/controls/OrbitControls.js";
import { LineMaterial } from "https://cdn.jsdelivr.net/npm/three@0.132.0/examples/jsm/lines/LineMaterial.js";
import { LineGeometry } from "https://cdn.jsdelivr.net/npm/three@0.132.0/examples/jsm/lines/LineGeometry.js";
import { ConvexGeometry } from "https://cdn.jsdelivr.net/npm/three@0.132.0/examples/jsm/geometries/ConvexGeometry.js";
import { Line2 } from "https://cdn.jsdelivr.net/npm/three@0.132.0/examples/jsm/lines/Line2.js";
import { GUI } from 'https://cdn.jsdelivr.net/npm/three@0.132.0/examples/jsm/libs/dat.gui.module.js'
 
import * as THREE from 'three';
import {createTextDerivedMaterial, Text} from 'troika-three-text'
import { Vector3 } from "three";
import {inv} from 'mathjs';

window.transformation = [new Vector3(NaN, NaN, NaN),new Vector3(NaN, NaN, NaN),new Vector3(NaN, NaN, NaN)]
window.input = [new Vector3(NaN, NaN, NaN),new Vector3(NaN, NaN, NaN),new Vector3(NaN, NaN, NaN),new Vector3(NaN, NaN, NaN)]
window.customInput = []
window.drawn = null;
window.drawnTransformation = null;
window.divisions = 1;
window.transformationPoints = null;

window.graph = new function(){
  this.divisions=1;
  this.matrixSize=2;
}

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfe3dd);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(50, 50, 50);
camera.lookAt(0,0,0)

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();
controls.enablePan = false;
controls.enableDamping = true;
controls.maxDistance = 300;
controls.minDistance = 150;

function createLine (thickness, color, points) {
    var material = new LineMaterial( {

        color: color,
        linewidth: thickness, // in world units with size attenuation, pixels otherwise
        //resolution:  // to be set by renderer, eventually
        dashed: false,
    } );    
    material.resolution.set( window.innerWidth, window.innerHeight );
    var geometry = new LineGeometry();
    geometry.setPositions(points);
    var line = new Line2(geometry, material);
    line.computeLineDistances()
    line.scale.set(1,1,1);
    return line
}


const xAxisPoints = [ 
  -50, 0, 0,
  50, 0, 0,
];
const yAxisPoints = [ 
  0, -50, 0,
  0, 50, 0,
];
const zAxisPoints = [ 
  0, 0, -50,
  0, 0, 50,
];

var xAxis = createLine(5, 0x000000, xAxisPoints)
var yAxis = createLine(5, 0x000000, yAxisPoints)
var zAxis = createLine(5, 0x000000, zAxisPoints)
scene.add(xAxis, yAxis, zAxis);


window.onresize = function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
};


const xAxisText = new Text()
scene.add(xAxisText)

xAxisText.text = 'x axis'
xAxisText.fontSize = 2
xAxisText.position.x = 45
xAxisText.color = 0x000000
xAxisText.sync()

const xDivisions = []
for (let i=-9; i<10; i++) {
  if (i == 0) continue;
  var xDivisionText = new Text()
  scene.add(xDivisionText)
  xDivisionText.text = (i*window.divisions)
  xDivisionText.fontSize = 1
  xDivisionText.position.x = (i*5)
  xDivisionText.position.y = 2
  xDivisionText.color = 0x111111
  xDivisionText.sync()
  xDivisions.push(xDivisionText)

}

const yAxisText = new Text()
scene.add(yAxisText)

yAxisText.text = 'y axis'
yAxisText.fontSize = 2
yAxisText.position.y = 45
yAxisText.orientation = "+y+z"
yAxisText.color = 0x000000
yAxisText.sync()

const yDivisions = []
for (let i=-9; i<10; i++) {
  if (i == 0) continue;
  var yDivisionText = new Text()
  scene.add(yDivisionText)
  yDivisionText.text = (i*window.divisions)
  yDivisionText.fontSize = 1
  yDivisionText.orientation = "-y-z"
  yDivisionText.position.y = (i*5)
  yDivisionText.position.z = 1
  yDivisionText.color = 0x111111
  yDivisionText.sync()
  yDivisions.push(yDivisionText)

}

const zAxisText = new Text()
scene.add(zAxisText)

zAxisText.text = 'z axis'
zAxisText.fontSize = 2
zAxisText.position.z = 50
zAxisText.orientation = "-z+y"
zAxisText.color = 0x000000
zAxisText.sync()

const zDivisions = []
for (let i=-9; i<10; i++) {
  if (i == 0) continue;
  var zDivisionText = new Text()
  scene.add(zDivisionText)
  zDivisionText.text = (i*window.divisions)
  zDivisionText.orientation = "-z+y"
  zDivisionText.fontSize = 1
  zDivisionText.position.z = (i*5)
  zDivisionText.position.y = 2
  zDivisionText.color = 0x111111
  zDivisionText.sync()
  zDivisions.push(zDivisionText)
}

function createInputShape () {
  if(window.inputComplete) {
    if (window.inputChange) {
      scene.remove(window.drawn);
      scene.remove(window.drawnTransformation)
      window.drawn = null;
      window.drawnTransformation = null;
      window.inputChange = false;
    }
    if (window.drawn == null) {
      var points;
      if (window.customInput != null) {
        points = window.customInput
      } else {
        points = window.input
      }
      const geometry = new ConvexGeometry(points)
      const material = new THREE.MeshBasicMaterial( { color: 0xaa0000 } );
      const mesh = new THREE.Mesh(geometry, material);
      window.drawn = mesh
      scene.add(mesh);
    }
  } else {
    if (window.drawn != null) {
      scene.remove(window.drawn);
      window.drawn = null;
    }
  }
}

function createTransformedShape () {
  if(window.transformationComplete & window.inputComplete) {
    if (window.transChange) {
      scene.remove(window.drawnTransformation);
      window.drawnTransformation = null;
      window.transChange = false;
      document.getElementById("otiID").style.cursor = 'not-allowed'
      document.getElementById("otiID").style.color = '#999999'
    }
    if (window.drawnTransformation == null) {
      document.getElementById("otiID").style.cursor = 'pointer'
      document.getElementById("otiID").style.color = '#000000'
      var inp;
      if (window.customInput != null) {
        inp = window.customInput
      } else {
        inp = window.input
      }
      var points = []
      for (var i=0; i<inp.length; i++) {
        points.push(new Vector3(null, null, null))
      }
      var trans = window.transformation
      
      for (var column = 0; column<inp.length; column++) { //rows of input
        for (var row = 0; row<3; row++) { //columns of input
          if (row == 0) {
            points[column].x = (trans[0].x * inp[column].x) + (trans[1].x * inp[column].y) + (trans[2].x * inp[column].z)
          }
          if (row == 1) {
            points[column].y = (trans[0].y * inp[column].x) + (trans[1].y * inp[column].y) + (trans[2].y * inp[column].z)
          }
          if (row == 2) {
            points[column].z = (trans[0].z * inp[column].x) + (trans[1].z * inp[column].y) + (trans[2].z * inp[column].z)
          }
        }
      }
      window.transformationPoints = points;
      const geometry = new ConvexGeometry(points)
      const material = new THREE.MeshBasicMaterial( { color: 0x0000aa} );
      const mesh = new THREE.Mesh(geometry, material);
      window.drawnTransformation = mesh
      scene.add(mesh);
    }
  } else {
    if (window.drawnTransformation != null) {
      scene.remove(window.drawnTransformation);
      window.drawnTransformation = null;
      document.getElementById("otiID").style.cursor = 'not-allowed'
      document.getElementById("otiID").style.color = '#999999'
    }
  }
}

function formatManualInput(inputList) {
  if (inputList.length < 3) return;
  var formattedList = [];
  for (var i=0; i<inputList.length; i++) {
    formattedList.push(new Vector3(inputList[i][0], inputList[i][1], inputList[i][2]));
  }
  window.customInput = formattedList;
  window.manualInput = null;
  window.inputComplete = true;
}

function convertTo3DList(listOfVector3) {
  var newList = [[null,null,null],[null,null,null],[null,null,null]]
  for (var i = 0; i<3; i++) {
    for (var j = 0; j<3; j++) {
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

function convertToMatrix(listOfList) {
  var newList = [new Vector3(null, null, null),new Vector3(null, null, null),new Vector3(null, null, null)]
  for (var i = 0; i<3; i++) {
    for (var j = 0; j<3; j++) {
      switch (j) {
        case 0:
          newList[i].x = listOfList[i][0]
        case 1:
          newList[i].y = listOfList[i][1]
        case 2:
          newList[i].z = listOfList[i][2]
      }
    }
  }
  return newList
}

function animate() {
  scene.background = new THREE.Color(camera.position.X);
  requestAnimationFrame(animate);
  controls.update();
  if (window.manualInput != null) {
    formatManualInput(manualInput)
  }
  if (window.transDeterminant != null) {
    window.transDeterminant = null;
    window.transChange = true;
    var transToList = convertTo3DList(window.transformation)
    var inverseTrans = inv(transToList)
    var inverseTransMatrix = convertToMatrix(inverseTrans)
    window.transformation = inverseTransMatrix
    console.log("done")
    for (var i = 0; i<3; i++) {
      for (var j = 0; j<3; j++) {
        document.getElementsByClassName("matrix-input")[(j)+(i*3)].value = inverseTrans[i][j]
      } 
    }
    document.getElementsByClassName("matrix-input")[0].dispatchEvent(new Event('input', {bubbles:true}))
  }
  try {
    createInputShape()
  } catch (err) {
    console.log("error found when making shape:", err)
    scene.remove(window.drawn);
    window.drawn = null;
    window.inputComplete=false;
  }

  try {
    createTransformedShape()
  } catch (err) {
    console.log("error found when making transformed shape:", err)
    scene.remove(window.drawnTransformation);
    window.drawnTransformation = null; 
    window.transformationComplete=false;
  }
  renderer.render( scene, camera );
}

animate()

