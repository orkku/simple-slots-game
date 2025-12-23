import * as THREE from 'three';

let geometry1, geometry2, geometry3;
let material1, material2, material3;
let plane1, plane2, plane3;
let image1, image2, image3;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

camera.position.z = 10;

window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const button = document.getElementById('spin_button');
button.addEventListener('click', () => {
  clearPlanes();
  createPlanes();
});

function animate() {

  renderer.render( scene, camera );

}

function loadImage () {
  const tiles = 3;
  const min = 0;
  const max = 3;
  
  const col = Math.floor(Math.random() * (max - min) + min);
  const row = Math.floor(Math.random() * (max - min) + min);

  const texture = new THREE.TextureLoader().load('assets/images.jpg');
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
  
  texture.repeat.set(1 / tiles, 1 / tiles);
  texture.offset.set(
    col / tiles,
    1 - (row + 1) / tiles
  );

  return texture;
}

function createPlanes() {
  geometry1 = new THREE.PlaneGeometry(1,1);
  image1 = loadImage();
  material1 = new THREE.MeshBasicMaterial({map: image1});
  plane1 = new THREE.Mesh(geometry1, material1);
  scene.add(plane1);
  plane1.position.x = -2;

  geometry2 = new THREE.PlaneGeometry(1,1);
  image2 = loadImage();
  material2 = new THREE.MeshBasicMaterial({map: image2});
  plane2 = new THREE.Mesh(geometry2, material2);
  scene.add(plane2);
  plane2.position.x = 0;

  geometry3 = new THREE.PlaneGeometry(1,1);
  image3 = loadImage();
  material3 = new THREE.MeshBasicMaterial({map: image3});
  plane3 = new THREE.Mesh(geometry3, material3);
  scene.add(plane3);
  plane3.position.x = 2;
}

function clearPlanes() {
  if (image1) {
    image1.dispose();
  }
  if (material1) {
    material1.dispose();
  }
  if (geometry1) {
    geometry1.dispose();
  }
  // -------------------
  if (image2) {
    image2.dispose();
  }
  if (material2) {
    material2.dispose();
  }
  if (geometry2) {
    geometry2.dispose();
  }
  // -------------------
  if (image3) {
    image3.dispose();
  }
  if (material3) {
    material3.dispose();
  }
  if (geometry3) {
    geometry3.dispose();
  }
}