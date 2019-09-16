
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 100);
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
scene.add(mesh);

var plane = new THREE.GridHelper(20, 40);
scene.add(plane);

















function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
