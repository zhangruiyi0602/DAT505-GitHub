# DAT505-GitHub Session 1
#### Content ####
Content:It contains both the lecture section and the assignments section.
#### Test ####
Test:The teacher's example was a rotating square
#### Homework ####
Homework:My homework extended that by making a wireframe object that rotates around the center of the screen, while making a heart that rotates around each vertex of the wireframe object.

#### Usage ####
```html
<script src="js/three.js"></script>
```
The following code create a Cube Mesh with basic material,this is the code for making the heart shape,heart colour ,the position of the shape andContinuously rotate the mesh.
```html
function geometry(){
  var x = 0, y =0;
var heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

geometry = new THREE.ShapeBufferGeometry( heartShape );
material = new THREE.MeshBasicMaterial( { color: 0xFF0000 } );
mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );

mesh.position.z = -500;
mesh.position.y = -30;
mesh.position.x = 80;
}
mesh.rotation.x += 0.05;
mesh.rotation.z += 0.05;
mesh1.rotation.x += 0.05;
```
This code specifies that the object should be in wireframe mode.
```html
geometry13 = new THREE.IcosahedronGeometry( 150,1 );
material13 = new THREE.MeshBasicMaterial( {wireframe : true} );
mesh13 = new THREE.Mesh( geometry13, material13 );
border13 = new THREE.EdgesHelper( mesh13,0xffff00 );
```
