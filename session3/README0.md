# DAT505-GitHub Session 3
### Content ###
Content:It contains both the lecture section and the assignments section.
### Test ###
Test:The teacher's example is to adjust the position, direction and color of the X-axis, Y-axis and Z-axis of the square in the GUI
### Homework ###
Homework:My assignment was to replace the square with a quadrangle and a polyhedron and arrange them in the way I wanted, with some of them in wireframe mode. They're rotating by themselves. In the GUI you can adjust the size and direction of their X-axis, Y-axis and z-axis together at will.
### Usage ###
```html
<script src="build/three.min.js"></script>
<script src="js/dat.gui.min.js"></script>
```

This code is the original size, speed and position of the object.
```javascript
var controller = new function() {
  this.scaleX = 5;
  this.scaleY = 5;
  this.scaleZ = 1;

  this.positionX = 1;
  this.positionY = 1;
  this.positionZ = -500;

  this.rotationX = 1;
  this.rotationY = 1;
  this.rotationZ = 1;
}
```
This code means you can  adjust the position, direction and color of the X-axis, Y-axis and Z-axis of the square in the GUI.
```javascript
var gui = new dat.GUI();

var f1 = gui.addFolder('Scale');
var f2 = gui.addFolder('Position');
var f3 = gui.addFolder('Rotation');

f1.add(controller, 'scaleX', 0.1,5).onChange( function() {
   mesh.scale.x = (controller.scaleX);
    mesh1.scale.x = (controller.scaleX);
    mesh2.scale.x = (controller.scaleX);
    mesh3.scale.x = (controller.scaleX);
    mesh4.scale.x = (controller.scaleX);
    mesh5.scale.x = (controller.scaleX);
    mesh6.scale.x = (controller.scaleX);
    mesh7.scale.x = (controller.scaleX);
    mesh8.scale.x = (controller.scaleX);
    mesh9.scale.x = (controller.scaleX);
    mesh10.scale.x = (controller.scaleX);
    mesh11.scale.x = (controller.scaleX);
    mesh12.scale.x = (controller.scaleX);
    mesh13.scale.x = (controller.scaleX);
    mesh14.scale.x = (controller.scaleX);
    mesh15.scale.x = (controller.scaleX);
    mesh16.scale.x = (controller.scaleX);
   });
f1.add(controller, 'scaleY', 0.1,5).onChange( function() {
   mesh.scale.y = (controller.scaleY);
    mesh1.scale.y = (controller.scaleY);
    mesh2.scale.y = (controller.scaleY);
    mesh3.scale.y = (controller.scaleY);
    mesh4.scale.y = (controller.scaleY);
    mesh5.scale.y = (controller.scaleY);
    mesh6.scale.y = (controller.scaleY);
    mesh7.scale.y = (controller.scaleY);
    mesh8.scale.y = (controller.scaleY);
    mesh9.scale.y = (controller.scaleY);
    mesh10.scale.y = (controller.scaleY);
    mesh11.scale.y = (controller.scaleY);
    mesh12.scale.y = (controller.scaleY);
    mesh13.scale.y = (controller.scaleY);
    mesh14.scale.y = (controller.scaleY);
    mesh15.scale.y = (controller.scaleY);
    mesh16.scale.y = (controller.scaleY);
   });
f1.add(controller, 'scaleZ', 0.1,5).onChange( function() {
   mesh.scale.z = (controller.scaleZ);
   mesh1.scale.z = (controller.scaleZ);
   mesh2.scale.z = (controller.scaleZ);
   mesh3.scale.z = (controller.scaleZ);
   mesh4.scale.z = (controller.scaleZ);
   mesh5.scale.z = (controller.scaleZ);
   mesh6.scale.z = (controller.scaleZ);
   mesh7.scale.z = (controller.scaleZ);
   mesh8.scale.z = (controller.scaleZ);
   mesh9.scale.z = (controller.scaleZ);
   mesh10.scale.z = (controller.scaleZ);
   mesh11.scale.z = (controller.scaleZ);
   mesh12.scale.z = (controller.scaleZ);
   mesh13.scale.z = (controller.scaleZ);
   mesh14.scale.z = (controller.scaleZ);
   mesh15.scale.z = (controller.scaleZ);
   mesh16.scale.z = (controller.scaleZ);
});

f2.add(controller, 'positionX', -500,500).onChange( function() {
   mesh.position.x = (controller.positionX);
   mesh1.position.x = (controller.positionX);
   mesh2.position.x = (controller.positionX);
  mesh3.position.x = (controller.positionX);
  mesh4.position.x = (controller.positionX);
  mesh5.position.x = (controller.positionX);
  mesh6.position.x = (controller.positionX);
  mesh7.position.x = (controller.positionX);
  mesh8.position.x = (controller.positionX);
  mesh9.position.x = (controller.positionX);
  mesh10.position.x = (controller.positionX);
  mesh11.position.x = (controller.positionX);
  mesh12.position.x = (controller.positionX);
  mesh13.position.x = (controller.positionX);
  mesh14.position.x = (controller.positionX);
  mesh15.position.x = (controller.positionX);
  mesh16.position.x = (controller.positionX);
   });
f2.add(controller, 'positionY', -300,300).onChange( function() {
mesh.position.y = (controller.positionY);
mesh1.position.y = (controller.positionY);
mesh2.position.y = (controller.positionY);
mesh3.position.y = (controller.positionY);
mesh4.position.y = (controller.positionY);
mesh5.position.y = (controller.positionY);
mesh6.position.y = (controller.positionY);
mesh7.position.y = (controller.positionY);
mesh8.position.y = (controller.positionY);
mesh9.position.y = (controller.positionY);
mesh10.position.y = (controller.positionY);
mesh11.position.y = (controller.positionY);
mesh12.position.y = (controller.positionY);
mesh13.position.y = (controller.positionY);
mesh14.position.y = (controller.positionY);
mesh15.position.y = (controller.positionY);
mesh16.position.y = (controller.positionY);
   });
f2.add(controller, 'positionZ', -500,-400).onChange( function() {
mesh.position.z = (controller.positionZ);
mesh1.position.z = (controller.positionZ);
mesh2.position.z = (controller.positionZ);
mesh3.position.z = (controller.positionZ);
mesh4.position.z = (controller.positionZ);
mesh5.position.z = (controller.positionZ);
mesh6.position.z = (controller.positionZ);
mesh7.position.z = (controller.positionZ);
mesh8.position.z = (controller.positionZ);
mesh9.position.z = (controller.positionZ);
mesh10.position.z = (controller.positionZ);
mesh11.position.z = (controller.positionZ);
mesh12.position.z = (controller.positionZ);
mesh13.position.z = (controller.positionZ);
mesh14.position.z = (controller.positionZ);
mesh15.position.z = (controller.positionZ);
mesh16.position.z = (controller.positionZ);
   });

f3.add(controller, 'rotationX', -180,180).onChange( function() {
mesh.rotation.x = de2ra(controller.rotationX);
mesh1.rotation.x = de2ra(controller.rotationX);
mesh2.rotation.x = de2ra(controller.rotationX);
mesh3.rotation.x = de2ra(controller.rotationX);
mesh4.rotation.x = de2ra(controller.rotationX);
mesh5.rotation.x = de2ra(controller.rotationX);
mesh6.rotation.x = de2ra(controller.rotationX);
mesh7.rotation.x = de2ra(controller.rotationX);
mesh8.rotation.x = de2ra(controller.rotationX);
mesh9.rotation.x = de2ra(controller.rotationX);
mesh10.rotation.x = de2ra(controller.rotationX);
mesh11.rotation.x = de2ra(controller.rotationX);
mesh12.rotation.x = de2ra(controller.rotationX);
mesh13.rotation.x = de2ra(controller.rotationX);
mesh14.rotation.x = de2ra(controller.rotationX);
mesh15.rotation.x = de2ra(controller.rotationX);
mesh16.rotation.x = de2ra(controller.rotationX);
      });
f3.add(controller, 'rotationY', -180,180).onChange( function() {
mesh.rotation.y = de2ra(controller.rotationY);
mesh1.rotation.y = de2ra(controller.rotationY);
mesh2.rotation.y = de2ra(controller.rotationY);
mesh3.rotation.y = de2ra(controller.rotationY);
mesh4.rotation.y = de2ra(controller.rotationY);
mesh5.rotation.y = de2ra(controller.rotationY);
mesh6.rotation.y = de2ra(controller.rotationY);
mesh7.rotation.y = de2ra(controller.rotationY);
mesh8.rotation.y = de2ra(controller.rotationY);
mesh9.rotation.y = de2ra(controller.rotationY);
mesh10.rotation.y = de2ra(controller.rotationY);
mesh11.rotation.y = de2ra(controller.rotationY);
mesh12.rotation.y = de2ra(controller.rotationY);
mesh13.rotation.y = de2ra(controller.rotationY);
mesh14.rotation.y = de2ra(controller.rotationY);
mesh15.rotation.y = de2ra(controller.rotationY);
mesh16.rotation.y = de2ra(controller.rotationY);
      });
f3.add(controller, 'rotationZ', -180,180).onChange( function() {
mesh.rotation.z = de2ra(controller.rotationZ);
mesh1.rotation.z = de2ra(controller.rotationZ);
mesh2.rotation.z = de2ra(controller.rotationZ);
mesh3.rotation.z = de2ra(controller.rotationZ);
mesh4.rotation.z = de2ra(controller.rotationZ);
mesh5.rotation.z = de2ra(controller.rotationZ);
mesh6.rotation.z = de2ra(controller.rotationZ);
mesh7.rotation.z = de2ra(controller.rotationZ);
mesh8.rotation.z = de2ra(controller.rotationZ);
mesh9.rotation.z = de2ra(controller.rotationZ);
mesh10.rotation.z = de2ra(controller.rotationZ);
mesh11.rotation.z = de2ra(controller.rotationZ);
mesh12.rotation.z = de2ra(controller.rotationZ);
mesh13.rotation.z = de2ra(controller.rotationZ);
mesh14.rotation.z = de2ra(controller.rotationZ);
mesh15.rotation.z = de2ra(controller.rotationZ);
mesh16.rotation.z = de2ra(controller.rotationZ);
      });

}
```

This code means the rotation of the original objects in X axis,Y axis and Z axis.
```javascript
var render = function () {
requestAnimationFrame( render );

mesh.rotation.x += 0.02;
mesh1.rotation.z += 0.02;
mesh2.rotation.y -= 0.02;
mesh3.rotation.z += 0.02;
mesh4.rotation.y -= 0.02;
mesh5.rotation.z += 0.02;
mesh6.rotation.y -= 0.02;
mesh7.rotation.z += 0.02;
mesh8.rotation.z -= 0.02;
mesh9.rotation.y += 0.02;
mesh10.rotation.z -= 0.02;
mesh11.rotation.y += 0.02;
mesh12.rotation.z -= 0.02;
mesh13.rotation.y -= 0.02;
mesh14.rotation.z -= 0.02;
mesh15.rotation.z -= 0.02;
mesh15.rotation.x -= 0.02;
mesh15.rotation.y -= 0.02;
mesh16.rotation.y += 0.01;
mesh16.rotation.z -= 0.02;
```
