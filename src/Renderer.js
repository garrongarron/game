import * as THREE from 'three';
import canvas from './Canvas';

const renderer = new THREE.WebGLRenderer({ 'canvas': canvas, antialias: true });//
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild( renderer.domElement );

export default renderer