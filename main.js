
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








function CustomSinCurve( scale ) {

  THREE.Curve.call( this );

  this.scale = ( scale === undefined ) ? 1 : scale;

}

CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );
CustomSinCurve.prototype.constructor = CustomSinCurve;

CustomSinCurve.prototype.getPoint = function ( t ) {

  var tx = t * 8 - 1.5;
  var ty = Math.sin( 2 * Math.PI * t );
  var tz = 0;

  return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );

};

const curve = new THREE.SplineCurve3([
  new THREE.Vector3(0,0,0),
  new THREE.Vector3(0,-1,0),
  new THREE.Vector3(0,-4,2),
  new THREE.Vector3(0,-10,1),
  new THREE.Vector3(2,-15,0),
  new THREE.Vector3(0,-20,0),
]);


var path = new CustomSinCurve( 10 );
var geometry = new THREE.TubeGeometry( curve, 100, 0.1, 19, false );
var material = new THREE.MeshBasicMaterial( { color: 0x000fff } );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );








function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
