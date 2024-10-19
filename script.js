let camera, scene, renderer;
let arWindow;

init();
animate();

function init() {
  // Create a basic Three.js scene
  scene = new THREE.Scene();

  // Set up camera
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);

  // Set up WebGL renderer with XR support
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.xr.enabled = true;
  document.body.appendChild(renderer.domElement);

  // Create AR window (a simple 3D plane)
  const geometry = new THREE.PlaneGeometry(1, 0.5);  // Width: 1 meter, Height: 0.5 meters
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
  arWindow = new THREE.Mesh(geometry, material);
  
  // Place the AR window 2 meters in front of the user
  arWindow.position.set(0, 1, -2);
  scene.add(arWindow);

  // Add a button to start AR session
  document.body.appendChild(ARButton.createButton(renderer));

  // Handle resizing
  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  renderer.setAnimationLoop(render);
}

function render() {
  renderer.render(scene, camera);
}
