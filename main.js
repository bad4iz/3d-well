
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(20, 5, 30);

var scene = new THREE.Scene();

var light = new THREE.PointLight();
light.position.set(0, 20, 50);
scene.add(light);

var renderer = renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.minPolarAngle = Math.PI / 2; //раскомментировать для ограничения
// controls.maxPolarAngle = Math.PI / 2;



var geometry = new THREE.BoxGeometry(2,1,1);
var mesh = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
scene.add(mesh);

// var plane = new THREE.GridHelper(20, 40);
// scene.add(plane);
//






const curve = new THREE.SplineCurve3([
  new THREE.Vector3(0,0,0),
  new THREE.Vector3(0,-10,0),
  new THREE.Vector3(0,-40,20),
  new THREE.Vector3(0,-100,10),
  new THREE.Vector3(2,-150,0),
  new THREE.Vector3(0,-200,0),
]);

const loader = new THREE.TextureLoader();
const material = new THREE.MeshBasicMaterial({
  map: loader.load('2.png'),
});

const width = 30;
const height = 42;
const geometrye = new THREE.BoxGeometry(width,height,0.1);
var meshe = new THREE.Mesh( geometrye, material );

meshe.rotation.x = 4.677;
meshe.position.z = -2.5;

scene.add( meshe);

console.log(meshe);
var geometry = new THREE.TubeGeometry( curve, 100, 0.2, 19, false );
// var material = new THREE.MeshBasicMaterial( { color: 0x000fff } );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );





function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
  // meshe.rotation.x += 0.001;
  // console.log(meshe.rotation.x)
}

animate();
