import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'lil-gui'

/**
 * Parameters
 */
const parameters = {
    color: 0x0891b2,
    bgcolor: 0xffffff,
    spin: () =>
    {
        gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 })
    }
}

/**
 * Sizes
 */
const sizes = {
    width: 1152 - 64,
    height: window.innerHeight - 80 - 64
}
if (window.innerWidth < 1152) {
    sizes.width = window.innerWidth - 64
}
/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas#webgl')
// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(parameters.bgcolor)


/**
 * Object
 */
const geometry = new THREE.SphereGeometry(10, 64, 32)
const material = new THREE.MeshBasicMaterial({ color: parameters.color, wireframe: true })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = 1152
    if (window.innerWidth < 1152) {
        sizes.width = window.innerWidth - 64 
    }
    sizes.height = window.innerHeight - 80 - 64
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Fullscreen
 */
window.addEventListener('dblclick', () =>
{
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if(!fullscreenElement)
    {
        if(canvas.requestFullscreen)
        {
            canvas.requestFullscreen()
        }
        else if(canvas.webkitRequestFullscreen)
        {
            canvas.webkitRequestFullscreen()
        }
    }
    else
    {
        if(document.exitFullscreen)
        {
            document.exitFullscreen()
        }
        else if(document.webkitExitFullscreen)
        {
            document.webkitExitFullscreen()
        }
    }
})

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 500)
camera.position.z = -10
camera.position.y = 15
scene.add(camera)
// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Debug
 */
 if (window.location.hash === '#debug')
        {
            const gui = new dat.GUI({ width: 420 })
            gui.add(mesh.position, 'y', - 3, 3, 0.01)
            gui.add(mesh.position, 'x', - 3, 3, 0.01)
            gui.add(mesh.position, 'z', - 3, 3, 0.01)
            gui.add(mesh, 'visible')
            gui.add(material, 'wireframe')
            gui.addColor(parameters, 'color')
            gui.onChange(() => {material.color.set(parameters.color)})
            gui.add(parameters, 'spin')
        }

/**
 * Animate
 */
gsap.to(mesh.rotation, { duration: 3000, delay: 0, y: 360, repeat: -1 })

const tick = () =>
{
    // Update controls
    controls.update()
    // Render
    renderer.render(scene, camera)
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()