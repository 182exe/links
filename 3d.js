import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 7, 15);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;

const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 3;
controls.enabled = false;

let element = document.body.appendChild(renderer.domElement);
document.querySelector(':root').style.setProperty('--rand360', `${Math.floor(Math.random() * 360)}deg`);
element.classList.add('bgi');
element.classList.add('floatup');
renderer.setSize(window.innerWidth, window.innerHeight);

function createRandomShape() {
  const randomShiny = Math.floor(Math.random() * (50 - 15 + 1) + 15);
  const objGeo = new THREE.TorusKnotGeometry(3, Math.random() * (1.0 - 0.2) + 0.2, 500, 200, Math.floor(Math.random() * (10 - 1 + 1) + 1), Math.floor(Math.random() * (10 - 1 + 1) + 1));
  const objMat = new THREE.MeshPhongMaterial({
    shininess: randomShiny,
    specular: 0x222222,
    color: 0x000000,
    emissive: 0x000000
  });

  const object = new THREE.Mesh(objGeo, objMat);
  object.position.set(0, Math.floor(Math.random() * 4), 0);
  object.castShadow = true;
  scene.add(object);

  const light1 = new THREE.PointLight(0xFFFF00, 1, 0);
  light1.position.copy(object.position);
  light1.castShadow = true;
  scene.add(light1);
  const light2 = new THREE.PointLight(0x00FFFF, 1, 0);
  light2.position.copy(object.position);
  light2.castShadow = true;
  //scene.add(light2);
  const light3 = new THREE.PointLight(0xFF00FF, 1, 0);
  light3.position.copy(object.position);
  light3.castShadow = true;
  //scene.add(light3);
  const light4 = new THREE.PointLight(0xFFFFFF, 1, 0);
  light4.position.copy(object.position);
  light4.castShadow = true;
  //scene.add(light4);
}

for (let i = 0; i < 3; i++) {
  createRandomShape();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);

animate();
