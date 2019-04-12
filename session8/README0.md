# DAT505-GitHub Session 8
### Content ###
Content:It contains both the lecture section and the assignments section.
### Test ###
Test:Example 1 shows two random eyes moving with the mouse.Example 2 is clicking on a rectangle with the mouse to change its color. Press and hold the mouse down on the cuboid so that the cuboid rotates according to the trend of the mouse
### Homework ###
Homework:Import the 3DMax model and use the loop cycle. Click on the  model to change its color
### Usage ###
```html
<script src="build/three.min.js"></script>
<script src="build/OBJLoader.js"></script>
<script src="build/MTLLoader.js"></script>
```
This code is to implement loop loop, make the object's position, Angle, rotation direction random. Import OBJ and MTL about model in 3D Max.
```javascript
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load("bee.mtl", function(materials){

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);

    objLoader.load("bee.obj", function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      var sizeRand = Math.random() * 0.3;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*800-400, Math.random()*800-400, Math.random()*800-400);
      mesh.rotation.y = -Math.PI/Math.random()*4;
      ```

This code means  the superposition of two sets

```javascript
      var intersects = raycaster.intersectObjects( objects, true );

      if ( intersects.length > 0 ) {
        if ( INTERSECTED != intersects[ 0 ].object ) {
          if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
          INTERSECTED = intersects[ 0 ].object;
          INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
          INTERSECTED.material.emissive.setHex( Math.random()0xf0f0f0);  }
      } else {
        if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
        INTERSECTED = null;
      }
      ```
