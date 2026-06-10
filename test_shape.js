const THREE = require('three');

const shape = new THREE.Shape();
const outerR = 1.75;
const innerR = 1.15;
const gapBottom = -Math.PI * 0.02;
const gapTop = Math.PI * 0.22;

shape.absarc(0, 0, outerR, gapTop, gapBottom + Math.PI * 2, false);
shape.absarc(0, 0, innerR, gapBottom + Math.PI * 2, gapTop, true);
shape.closePath();

const points = shape.getPoints();
console.log(points.length);
console.log("First point:", points[0]);
console.log("Mid point (outer end):", points[Math.floor(points.length/2) - 1]);
console.log("Mid point (inner start):", points[Math.floor(points.length/2)]);
console.log("Last point:", points[points.length-1]);
