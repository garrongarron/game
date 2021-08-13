import box from './Box'
import camera from './Camera'
import light from './Light';
import renderer from './Renderer';
import resize from './Resize';
import scene from './Scene'


scene.add(box)
scene.add(light)
// camera.position.z = 5
camera.position.set(1, 2, 5)
camera.lookAt(box.position)
resize.start(renderer)
setInterval(() => {
    box.rotation.y += 0.01
    renderer.render(scene, camera);
}, 1000/30);

