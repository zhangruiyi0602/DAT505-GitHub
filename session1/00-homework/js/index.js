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
var geometry13, material13, mesh13,  border13;
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
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
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
geometry1 = new THREE.ShapeBufferGeometry( heartShape );
material1 = new THREE.MeshBasicMaterial( { color: "#FFB5C5" } );
mesh1 = new THREE.Mesh( geometry1, material1 ) ;
scene.add( mesh1 );
geometry2 = new THREE.ShapeBufferGeometry( heartShape );
material2 = new THREE.MeshBasicMaterial( { color: "#FFC125" } );
mesh2 = new THREE.Mesh( geometry2, material2 ) ;
scene.add( mesh2 );
geometry3 = new THREE.ShapeBufferGeometry( heartShape );
material3 = new THREE.MeshBasicMaterial( { color: "#cdcd00" } );
mesh3 = new THREE.Mesh( geometry3, material3 ) ;
scene.add( mesh3 );
geometry4 = new THREE.ShapeBufferGeometry( heartShape );
material4 = new THREE.MeshBasicMaterial( { color: "#add8e6" } );
mesh4 = new THREE.Mesh( geometry4, material4 ) ;
scene.add( mesh4 );
geometry5 = new THREE.ShapeBufferGeometry( heartShape );
material5 = new THREE.MeshBasicMaterial( { color: "#9370db" } );
mesh5 = new THREE.Mesh( geometry5, material5 ) ;
scene.add( mesh5 );
geometry6 = new THREE.ShapeBufferGeometry( heartShape );
material6 = new THREE.MeshBasicMaterial( { color: "#eee9bf" } );
mesh6 = new THREE.Mesh( geometry6, material6 ) ;
scene.add( mesh6 );
geometry7 = new THREE.ShapeBufferGeometry( heartShape );
material7 = new THREE.MeshBasicMaterial( { color: "#ffacd" } );
mesh7 = new THREE.Mesh( geometry7, material7 ) ;
scene.add( mesh7 );
geometry8 = new THREE.ShapeBufferGeometry( heartShape );
material8 = new THREE.MeshBasicMaterial( { color: "#eec900" } );
mesh8 = new THREE.Mesh( geometry8, material8 ) ;
scene.add( mesh8 );
geometry9 = new THREE.ShapeBufferGeometry( heartShape );
material9= new THREE.MeshBasicMaterial( { color: "#ffa500" } );
mesh9 = new THREE.Mesh( geometry9, material9 ) ;
scene.add( mesh9 );
geometry10 = new THREE.ShapeBufferGeometry( heartShape );
material10 = new THREE.MeshBasicMaterial( { color: "#ff4500" } );
mesh10 = new THREE.Mesh( geometry10, material10 ) ;
scene.add( mesh10 );
geometry11 = new THREE.ShapeBufferGeometry( heartShape );
material11 = new THREE.MeshBasicMaterial( { color: "#d15fee" } );
mesh11 = new THREE.Mesh( geometry11, material11 ) ;
scene.add( mesh11 );
geometry12 = new THREE.ShapeBufferGeometry( heartShape );
material12 = new THREE.MeshBasicMaterial( { color: "#cd00cd" } );
mesh12 = new THREE.Mesh( geometry12, material12 ) ;
scene.add( mesh12 );
geometry13 = new THREE.IcosahedronGeometry( 150,1 );
material13 = new THREE.MeshBasicMaterial( {wireframe : true} );
mesh13 = new THREE.Mesh( geometry13, material13 );
border13 = new THREE.EdgesHelper( mesh13,0xffff00 );
//geometry = new THREE.RingBufferGeometry( 10, 50, 320 );
//material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
//mesh = new THREE.Mesh( geometry, material );
mesh.position.z = -500;
mesh.position.y = -30;
mesh.position.x = 80;
mesh1.position.z = -500;
mesh1.position.y = -30;
mesh1.position.x = -80;
mesh2.position.z = -500;
mesh2.position.y = 10;
mesh2.position.x= -70;
mesh3.position.z = -500;
mesh3.position.y = 10;
mesh3.position.x = 70;
mesh4.position.z = -500;
mesh4.position.y = 40;
mesh4.position.x = -40;
mesh5.position.z = -500;
mesh5.position.y = 40;
mesh5.position.x = 40;
mesh6.position.z = -500;
mesh6.position.y = 50;
mesh7.position.z = -500;
mesh7.position.y = -30;
mesh8.position.z = -500;
mesh8.position.y = -70;
mesh8.position.x = 70;
mesh9.position.z = -500;
mesh9.position.y = -70;
mesh9.position.x = -70;
mesh10.position.z = -500;
mesh10.position.y = -100;
mesh10.position.x = 40;
mesh11.position.z = -500;
mesh11.position.y = -100;
mesh11.position.x = -40;
mesh12.position.z = -500;
mesh12.position.y = -120;
mesh13.position.z = -1000;
mesh13.position.y = -50;
//mesh3.position.x = -20;
 // Add mesh to scene
 //scene.add( mesh );
}

// Render Loop
var render = function () {
 requestAnimationFrame( render );

 mesh.rotation.x += 0.05; //Continuously rotate the mesh
 mesh.rotation.z += 0.05;
 mesh1.rotation.x += 0.05; //Continuously rotate the mesh
 mesh1.rotation.z += 0.05;
 mesh2.rotation.x += 0.05; //Continuously rotate the mesh
 mesh2.rotation.z += 0.05;
 mesh3.rotation.x += 0.05; //Continuously rotate the mesh
 mesh3.rotation.z += 0.05;
 mesh4.rotation.x += 0.05; //Continuously rotate the mesh
 mesh4.rotation.z += 0.05;
 mesh5.rotation.x += 0.05; //Continuously rotate the mesh
 mesh5.rotation.z += 0.05;
 mesh6.rotation.x += 0.05; //Continuously rotate the mesh
 mesh6.rotation.z += 0.05;
 mesh7.rotation.x += 0.05; //Continuously rotate the mesh
 mesh7.rotation.z += 0.05;
 mesh8.rotation.x += 0.05; //Continuously rotate the mesh
 mesh8.rotation.z += 0.05;
 mesh9.rotation.x += 0.05; //Continuously rotate the mesh
 mesh9.rotation.z += 0.05;
 mesh10.rotation.x += 0.05; //Continuously rotate the mesh
 mesh10.rotation.z += 0.05;
 mesh11.rotation.x += 0.05; //Continuously rotate the mesh
 mesh11.rotation.z += 0.05;
 mesh12.rotation.x += 0.05; //Continuously rotate the mesh
 mesh12.rotation.z += 0.05;
 mesh13.rotation.y+= 0.005; //Continuously rotate the mesh


 // Create a Cube Mesh with basic material ---------



// Add mesh to scene
  scene.add( mesh13 );
  scene.add( border13 );
 renderer.setClearColor("#ffc1c1");


 // Render the scene
 renderer.render(scene, camera);
};

init();
geometry();
render();
