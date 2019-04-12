# DAT505-GitHub Session 4
#### Content####
Content:It contains both the lecture section and the assignments section.
### Test ###
Test:The teacher's example is to piece together 16 small cubes moving in the same direction into a large moving cube, and each of the four small cubes is one color. There are four different colors in the big cube.
### Homework ###
Homework:The homework is to make a row of cuboids move at different speeds and rotate in different positions according to the requirements specified by the teacher.

### Usage ###

```html
<script src="build/three.min.js"></script>
<script src="js/OrbitControls.js"></script>

```javascript
This code create a two dimensional grid of objects, and position them accordingly and use For cycle to start from -35 and sequentially add one every 5 pixels
```javascript
 for (var x = -35; x < 40; x += 5) {
 for (var y = -35; y < 40; y += 5) {
```

This code means the position and rot of the mesh are math random.


```javascript

var boxMaterial = javascriptnew THREE.MeshLambertMaterial({color:Math.random()* 0xFFFFFF});
```

This code means for Each takes all the array entries and passes the c as the object, and i as the indexcubes.forEach(function(c, i)
c.rotation.x = rot; Rotate the object that is referenced in c
```javascript
function drawFrame(){
  requestAnimationFrame(drawFrame);
  rot+=0.01;
  cubes.forEach(function(c,i){
    c.rotation.z=rot;
```
