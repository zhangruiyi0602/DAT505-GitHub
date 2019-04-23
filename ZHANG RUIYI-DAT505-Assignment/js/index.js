(function () {

    if (WEBGL.isWebGLAvailable() === false) {
        document.body.appendChild(WEBGL.getWebGLErrorMessage());
    }
var camera, scene, renderer, dirLight, dirLightHeper, hemiLight, hemiLightHelper;
var mixers = [];
var stats;
var clock = new THREE.Clock();
var controls, group;
//Gamma required variable
var raycaster = new THREE.Raycaster();
var mouseVector = new THREE.Vector3();
var selectedObject = null;
var playMusic = false;
var xianhe = [];
var colorArr = ["#f7cbd7", "#acff88", "#FFC125", "#FFC125", "#FF1493", "#C0FF3E", "#9F79EE","#63b8ff", "#6b8e23"];


//animation
class openAnim {
constructor(timer, bridArr, lineLengthm, lineTimer) {
this.timer = timer;
this.lineTimer = lineTimer;
this.lineLength = 0;
this.bridArr = ["images/brid.png","images/brid1.png"];}

hide() { $("#container").hide();
        // $(body).append();
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
//Page dynamic progress bar
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
//Delete timer
clearTimer() {
clearInterval(this.bridArr);
        }
    }
init();
animate();

var openAnit = new openAnim();
// Hidden scenes show progress bars
// openAnit.hide();
//Hide the progress bar to show the scene
openAnit.show();
//Progress bar animation
// openAnit.lineAnit();
function init() {
var container = document.getElementById('container');
camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 5000);
camera.position.set(0, 0, 300);
scene = new THREE.Scene({
antialias: true, // anti-aliasing features
alpha: true // Open background transparency
        });
// Scene background
scene.background = new THREE.Color().setHSL(0.780, 0.2941, 0.5667);
scene.fog = new THREE.Fog(scene.background, 1, 2000);
// scene.fog = new THREE.Fog().setHSL(0.780, 0.2941 , 0.5667);
group = new THREE.Group();
scene.add(group);

// LIGHTS
hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

//dirlight
dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(- 1, 1.75, 1);
dirLight.position.multiplyScalar(50);
scene.add(dirLight);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
var d = 50;
dirLight.shadow.camera.left = - d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = - d;
dirLight.shadow.camera.far = 3500;
dirLight.shadow.bias = - 0.0001;

// GROUND
var groundGeo = new THREE.PlaneBufferGeometry(10000, 10000);
//  Floor color
var groundMat = new THREE.MeshLambertMaterial({ color: 0xccacb6 });
// HSL value of chromatism
// http://www.yuangongju.com/color
groundMat.color.setHSL(0.950, 0.303, 0.7412);
//  ground
var ground = new THREE.Mesh(groundGeo, groundMat);
ground.position.y = - 33;
ground.rotation.x = - Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

//circulation
for (let i = 0; i < 3; i++) {
      draw(i);
        }

console.log(scene);

// renderer
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);
renderer.gammaInput = true;
renderer.gammaOutput = true;
renderer.shadowMap.enabled = true;

//controller
controls = new THREE.OrbitControls(camera, renderer.domElement);
// inertia
controls.enableDamping = true;
// Mouse sensitivity
controls.dampingFactor = 1;
//zoom
controls.enableZoom = true;
//rotate
controls.autoRotate = false;
//Drag and drop
controls.enablePan = false;

// STATS
// stats = new Stats();
// container.appendChild(stats.dom);
window.addEventListener('resize', onWindowResize, false);
window.addEventListener("mousedown", onDocumentMouseDown, false);
window.addEventListener("mouseup", onDocumentMouseUp, false);
    }
function onWindowResize() {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
    }

function draw(i) {
//  loader
var loader = new THREE.GLTFLoader();
loader.load('models/Flamingo.glb', function (gltf) {
var s = 0.35;
xianhe[i] = gltf.scene.children[0];
xianhe[i].scale.set(s, s, s);
xianhe[i].position.y = 15*i;
//xianhe[i].position.x = 15*i;
xianhe[i].position.z = 50*i;
xianhe[i].rotation.y = - 1;
xianhe[i].castShadow = true;
xianhe[i].receiveShadow = true;
group.add(xianhe[i]);

var mixer = new THREE.AnimationMixer(xianhe[i]);
mixer.clipAction(gltf.animations[0]).setDuration(1).play();
mixers.push(mixer);
        });
    }

function animate() {
requestAnimationFrame(animate);
render();
// stats.update();
    }
function render() {
var delta = clock.getDelta();
for (var i = 0; i < mixers.length; i++) {
mixers[i].update(delta);
        }
renderer.render(scene, camera);
    }
function onDocumentMouseDown(event) {
event.preventDefault();
if (selectedObject) {
selectedObject = null;
        }

var intersects = getIntersects(event.layerX, event.layerY);
if (intersects.length > 0) {
var res = intersects.filter(function (res) {
return res && res.object;
            })[0];
if (res && res.object) {
selectedObject = res.object;
//  Set random color
selectedObject.material.color.set(colorArr[Math.round(Math.random() * 8)]);
// Play  music
playMusic = !playMusic;
btnMusic.classList.toggle('music-off');
playMusic ? worldMusic.play() : worldMusic.pause();
            }
        }
    }

function onDocumentMouseUp(event) {
event.preventDefault();
playMusic = !playMusic;
worldMusic.pause()
    }

function getIntersects(x, y) {
x = (x / window.innerWidth) * 2 - 1;
y = - (y / window.innerHeight) * 2 + 1;
mouseVector.set(x, y, 0.5);
raycaster.setFromCamera(mouseVector, camera);
return raycaster.intersectObject(group, true);
    }

// add music
const worldMusic = document.querySelector('.music');
const btnMusic = document.querySelector('.btn-music');


btnMusic.addEventListener('click', () => {
playMusic = !playMusic;
btnMusic.classList.toggle('music-off');
playMusic ? worldMusic.play() : worldMusic.pause();
    });

worldMusic.volume = 0.3;
worldMusic.loop = true;

})();
