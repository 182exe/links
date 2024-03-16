import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 50);
camera.filmGauge = 50;
camera.filmOffset = 10;

const light1 = new THREE.PointLight(0xFFFF00, 1, 100, 0);
light1.position.set(-25, 25, 0);
light1.castShadow = true;
scene.add(light1);

const light2 = new THREE.PointLight(0x00FFFF, 1, 100, 0);
light2.position.set(0, 25, -25)
light2.castShadow = true;
scene.add(light2);

const light3 = new THREE.PointLight(0xFF00FF, 1, 100, 0);
light3.position.set(25, 25, 0)
light3.castShadow = true;
scene.add(light3);

const light4 = new THREE.PointLight(0xFFFFFF, 1, 100, 0);
light4.position.set(0, -25, 0)
light4.castShadow = true;
scene.add(light4);

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
document.querySelector(':root').style.setProperty('--rand360', `${Math.floor(Math.random() * 61) - 30}deg`);
element.classList.add('bgi');
element.classList.add('floatup');
renderer.setSize(window.innerWidth, window.innerHeight);

function createRandomShape() {
    const geoRand = ~~(Math.random() * 10 + 2)
    const randomShiny = ~~(Math.random() * (50 - 15 + 1) + 50);
    const objGeo = new THREE.TorusKnotGeometry(
        12.5,
        geoRand * 2 / 15,
        2500,
        6,
        4,
        geoRand * 2
    );
    const objMat = new THREE.MeshPhongMaterial({
        shininess: randomShiny,
        specular: 0xFFFFFF,
        color: 0x111111,
        emissive: 0x000000,
        flatShading: false
    });

    const object = new THREE.Mesh(objGeo, objMat);
    object.position.set(0, 0, 0);
    object.castShadow = true;
    scene.add(object);
}
createRandomShape();

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