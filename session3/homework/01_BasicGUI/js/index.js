//Global variables
var scene, camera, renderer;
var geometry, material, mesh;
var geometry1, material1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var geometry5, material5, mesh5;
var geometry6, material6, mesh6;
var geometry7, material7, mesh7;
var geometry8, material8, mesh8;
var geometry9, material9, mesh9;
var geometry10, material10, mesh10;
var geometry11, material11, mesh11;
var geometry12, material12, mesh12;
var geometry13, material13, mesh13;
var geometry14, material14, mesh14;
var geometry15, material15, mesh15;
var geometry16, material16, mesh16;
var de2ra = function(degree){
  return degree*(Math.PI/180);
}

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );

  var light1 = new THREE.AmbientLight(0xffffff, 0.5);

var light2 = new THREE.PointLight(0xffffff, 0.5);



  // Create a Cube Mesh with basic material ---------

geometry = new THREE.ConeBufferGeometry( 10, 20,6);
//material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
 //texture=new THREE.TextureLoader().load("texture/perlin-512.png");
 //material= new THREE.MeshBasicMaterial({map:texture});
  material = new THREE.MeshNormalMaterial({color: "#cd6886"});
scene.add( mesh2 );

 mesh = new THREE.Mesh( geometry, material );
  mesh.position.z = -400;

geometry1 = new THREE.ConeBufferGeometry( 10, 25, 4);
material1 = new THREE.MeshBasicMaterial( {wireframe : true,color: "#ffdead"} );
mesh1 = new THREE.Mesh( geometry1, material1 );
mesh1.position.z = -400;
mesh1.position.x = -30;

geometry2 = new THREE.ConeBufferGeometry( 10, 30, 6);
material2 = new THREE.MeshBasicMaterial( {wireframe : true,color: "#ffc0cb"} );
mesh2 = new THREE.Mesh( geometry2, material2 );
mesh2.position.z = -400;
mesh2.position.x = -60;
mesh2.position.y = -60;


geometry3 = new THREE.ConeBufferGeometry( 10, 35, 4);
material3 = new THREE.MeshBasicMaterial( {color: "#ff3e96"} );
mesh3 = new THREE.Mesh( geometry3, material3 );
mesh3.position.z = -400;
mesh3.position.x = -90;

geometry4 = new THREE.ConeBufferGeometry( 10, 40, 4);
material4 = new THREE.MeshBasicMaterial( {wireframe : true,color: "#db7093"} );
mesh4 = new THREE.Mesh( geometry4, material4 );
mesh4.position.z = -400;
mesh4.position.x = -120;
mesh4.position.y = 60;

geometry5 = new THREE.ConeBufferGeometry( 10, 45, 4);
material5 = new THREE.MeshBasicMaterial( {color: "#cd69c9"} );
mesh5 = new THREE.Mesh( geometry5, material5 );
mesh5.position.z = -400;
mesh5.position.x = -150;

geometry6 = new THREE.ConeBufferGeometry( 10, 50, 4);
material6 = new THREE.MeshBasicMaterial( {wireframe : true,color: "#9932cc"} );
mesh6 = new THREE.Mesh( geometry6, material6 );
mesh6.position.z = -400;
mesh6.position.x = -180;
mesh6.position.y = -60;

geometry7 = new THREE.ConeBufferGeometry( 10, 55, 4);
material7 = new THREE.MeshBasicMaterial( {color: "#4b0082"} );
mesh7 = new THREE.Mesh( geometry7, material7 );
mesh7.position.z = -400;
mesh7.position.x = -210;

geometry8 = new THREE.ConeBufferGeometry( 10, 25, 4);
material8 = new THREE.MeshBasicMaterial( {wireframe : true,color: "#cdcd00"} );
mesh8 = new THREE.Mesh( geometry8, material8 );
mesh8.position.z = -400;
mesh8.position.x = 30;

geometry9 = new THREE.ConeBufferGeometry( 10, 30, 6);
material9 = new THREE.MeshBasicMaterial( {wireframe : true,color: "#9acd32"} );
mesh9 = new THREE.Mesh( geometry9, material9 );
mesh9.position.z = -400;
mesh9.position.x = 60;
mesh9.position.y = -60;

geometry10 = new THREE.ConeBufferGeometry( 10, 35, 4);
material10 = new THREE.MeshBasicMaterial( {color: "#b4eeb4"} );
mesh10 = new THREE.Mesh( geometry10, material10 );
mesh10.position.z = -400;
mesh10.position.x = 90;

geometry11 = new THREE.ConeBufferGeometry( 10, 40, 4);
material11 = new THREE.MeshBasicMaterial( {wireframe : true,color: "#8ee5ee"} );
mesh11 = new THREE.Mesh( geometry11, material11 );
mesh11.position.z = -400;
mesh11.position.x =120;
mesh11.position.y =60;

geometry12 = new THREE.ConeBufferGeometry( 10, 45, 4);
material12 = new THREE.MeshBasicMaterial( {color: "#1c86ee"} );
mesh12 = new THREE.Mesh( geometry12, material12 );
mesh12.position.z = -400;
mesh12.position.x =150;

geometry13 = new THREE.ConeBufferGeometry( 10, 50, 4);
material13 = new THREE.MeshBasicMaterial( {wireframe : true,color: "#0000ee"} );
mesh13 = new THREE.Mesh( geometry13, material13 );
mesh13.position.z = -400;
mesh13.position.x =180;
mesh13.position.y =-60;

geometry14 = new THREE.ConeBufferGeometry( 10, 55, 4);
material14 = new THREE.MeshBasicMaterial( {color: "#27408b"} );
mesh14 = new THREE.Mesh( geometry14, material14 );
mesh14.position.z = -400;
mesh14.position.x =210;

geometry15 = new THREE.IcosahedronGeometry( 150,1 );
material15 = new THREE.MeshBasicMaterial( {wireframe : true,color:"#cd6886"} );
mesh15 = new THREE.Mesh( geometry15, material15 );
border15 = new THREE.EdgesHelper( mesh15,0xffff00 );
mesh15.position.z = -2000;
mesh15.position.x = 0;
mesh15.position.y = -300;

 geometry16 = new THREE.BoxBufferGeometry( 100, 100, 100 );
 //material16 = new THREE.MeshBasicMaterial( {color: "#cd6886"} );
//var texture = new THREE.TextureLoader().load("texture:colors.png");
 material16 = new THREE.MeshNormalMaterial({wireframe : true,color: "#cd6886"});
mesh16 = new THREE.Mesh( geometry16, material16 );
 mesh16.position.z = -1000;
 mesh16.position.x = 0;
 mesh16.position.y = 150;








  // Add mesh to scene
scene.add( mesh );
scene.add( mesh1 );
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4 );
scene.add( mesh5 );
scene.add( mesh6 );
scene.add( mesh7 );
scene.add( mesh8 );
scene.add( mesh9 );
scene.add( mesh10 );
scene.add( mesh11 );
scene.add( mesh12 );
scene.add( mesh13 );
scene.add( mesh14);
scene.add( mesh15);
scene.add( border15);
scene.add( mesh16);
scene.add(light1);
scene.add(light2);

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

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  //mesh.rotation.x += 0.1; //Continuously rotate the mesh
  //mesh.rotation.y += 0.1;
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



  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
render();
