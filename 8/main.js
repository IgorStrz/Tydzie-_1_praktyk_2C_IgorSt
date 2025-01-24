import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 100);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
const material = new THREE.MeshBasicMaterial({ color: 0xf0ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

let x = 100;
let y = 100;
let odbiciex = 10;
let odbiciey = 10;

function animacja() {

  cube.rotation.x += 10;
  cube.rotation.y += 10;

  x += odbiciex;
  y += odbiciey;

  if (x <= 0 || x + 50 >= window.innerWidth) {
    odbiciex = -odbiciex;
  }
  if (y <= 0 || y + 50 >= window.innerHeight) {
    odbiciey = -odbiciey;
  }
  cube.position.x = (x / window.innerWidth) * 2 - 1;
  cube.position.y = -(y / window.innerHeight) * 2 + 1;

  renderer.render(scene, camera);

  requestAnimationFrame(animacja);
}
animacja();
