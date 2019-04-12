# DAT505-GitHub Session 2
### Content ###
Content:It contains both the lecture section and the assignments section.
### Test ###
Test:The teacher's example is that multiple squares are arranged in regular rows and columns and rotate in the same direction and speed. The material of the square can be changed to normal material.
### Homework  ###
Homework:In my homework, I changed the partial squares into circles on the basis of the teacher and made them move in the same direction in different positions at a constant speed. Changed the texture of the remaining squares. And let a distorted shape in wireframe only mode self-rotate in the center of the screen.
### Usage ###
```html
<script src="js/three.min.js"></script>
```
This code  create a basic perspective camera and  configure lights.
```javascript
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);
var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
```
This code allows objects to be labeled with textures.
```javascript
var texture=new THREE.TextureLoader().load("texture/colors.png");
var material3= new THREE.MeshBasicMaterial({map:texture});
```
