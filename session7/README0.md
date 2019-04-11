# DAT505-GitHub Session 7
### Content ###
Content:It contains both the lecture section and the classroom practice.
### Test ###
Test:Example 1 is the free fall of cuboid random size and direction velocity. Example 2 is to turn the eyes in the direction specified by the mouse.
### Classroom practice ###
Classroom practice:Make the size, direction and speed of the cuboid drop freely at random. Paste different material maps on the cuboid, and let each cuboid drop with random material maps.
### Usage ###
```html
<script src="build/three.min.js"></script>
<script src="js/libs/stats.min.js"></script>
```
This code is to let the number of cubes and speed random
```html
for (var i = 0; i < cubesNum; i++){
  var randomValue = Math.random() * 0.5;
  speed.push(randomValue);
```
The code means attach maps to objects ,generate a random number from 1 to 12 according to the image files.
```html
  var randomSelection = Math.round(Math.random()*10)+1;
  texture = new THREE.TextureLoader().load("textures/texture" + randomSelection +".jpg");
```
The code means modify UVs to accommodate MatCap texture
```html
var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
for ( i = 0; i < faceVertexUvs.length; i ++ ) {
  var uvs = faceVertexUvs[ i ];
  var face = geometry.faces[ i ];
  for ( var j = 0; j < 3; j ++ ) {
    uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
    uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
    ```
This code is to control the eyes to follow the movement of the mouse to move
    ```html
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    window.addEventListener( 'resize', onWindowResize, false );
        ```
