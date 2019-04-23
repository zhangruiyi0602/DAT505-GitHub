### ZHANG RUIYI B161006105###
### DAT505-Assignment ###
#### Content ####
My assignment is a combination of audio-visual works. My inspiration comes from the interaction between humans and animals, so I made an interactive work with flamingos. Click the mouse to zoom in, out and rotate the flamingo. Click on any flamingo to change a color at will. Long press the mouse any flamingo can produce birdcall.
#### File structure ####
1：The images are in the "image" folder.It contains the pictures of flamingos and background images of the loading page, as well as the image of the sound icon and the stop icon.

2:The flamingo model is in the "model" folder called Flaminga.glb.

3:The sound  in the “music” folder called xianhe.mp3

4:The main code is written in the "js" folder called index.js.

### Usage ###
```html
<script src="js/jquery-3.3.1.min.js"></script>
<script src="build/three.js"></script>
<script src="build/WebGL.js"></script>
<script src="build/stats.min.js"></script>
<script src="build/GLTFLoader.js"></script>
<script src="js/OrbitControls.js"></script>
<script src="js/index.js"></script>
```
This code specifies an object to open the animation. This object has four properties: the timer, the time length, the line length, and the picture of the bird.it also contains three functions. The first is to hide the  canvas, and the second is to display the canvas. The third is time plus one, line length plus one, Add to 100 to jump to the page.
```javascript
class openAnim {
constructor(timer, bridArr, lineLengthm, lineTimer) {
this.timer = timer;
this.lineTimer = lineTimer;
this.lineLength = 0;
this.bridArr = ["images/brid.png","images/brid1.png"];}

hide() { $("#container").hide();
        }
show() { $("#container").show(); $(".anit").hide();
        }
bridAnit() {
let that = this;
var key = 0;
this.timer = setInterval(function () {
if (key == 1)
   key--;
else
    key++;
$(".anitBrid").attr("src", that.bridArr[key]);
          }, 600);
    }

```

This code controls the dynamic progress bar for loading pages.
```javascript
lineAnit() {
let that = this;
this.lineLength = 0;
this.lineTimer = setInterval(function () {
if (that.lineLength >= 100) {
  that.lineLength = 0;
  that.show();
              }
else
that.lineLength++;
$(".js_progress").css("width", that.lineLength + "%");
  }, 100);
           }   
```
This code is mainly deleted timber and hide the progress bar to show the scene.
```javascript
clearTimer(){
          clearInterval(this.bridArr);
      }
  }

  init();
  animate();
  var openAnit = new openAnim();
  openAnit.hide();
  ```
This code adjusts the background color of the scene.
  ```javascript   
  scene.background = new THREE.Color().setHSL(0.780, 0.2941, 0.5667);
  scene.fog = new THREE.Fog(scene.background, 1, 2000);
  // scene.fog = new THREE.Fog().setHSL(0.780, 0.2941 , 0.5667);
  group = new THREE.Group();
  scene.add(group);  
  ```
This code is a looping code that controls the number of flamingos.
   ```javascript
   for (let i = 0; i < 3; i++) {
         draw(i);
           }

  ```
This code controls inertia, mouse sensitivity, and bird zooming, dragging, and rotating.  
```javascript  
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 1;
controls.enableZoom = true;
controls.autoRotate = false;
controls.enablePan = false;  
```
This code is added to the flamingo model and defines their location.
```javascript  
var loader = new THREE.GLTFLoader();
loader.load('models/Flamingo.glb', function (gltf) {
var s = 0.35;
xianhe[i] = gltf.scene.children[0];
xianhe[i].scale.set(s, s, s);
xianhe[i].position.y = 15*i;
xianhe[i].position.z = 50*i;
xianhe[i].rotation.y = - 1;
xianhe[i].castShadow = true;
xianhe[i].receiveShadow = true;
group.add(xianhe[i]);
```
This code sets the random color of the bird.
```javascript
selectedObject.material.color.set(colorArr[Math.round(Math.random() * 8)]);
```
This code is to play and add music, click the mouse flamingo model can play music.
```javascript
playMusic = !playMusic;
btnMusic.classList.toggle('music-off');
playMusic ? worldMusic.play() : worldMusic.pause();
const worldMusic = document.querySelector('.music');
const btnMusic = document.querySelector('.btn-music');


btnMusic.addEventListener('click', () => {
playMusic = !playMusic;
btnMusic.classList.toggle('music-off');
playMusic ? worldMusic.play() : worldMusic.pause();
    });
    ```
