import logo from './logo.svg';
import './App.css';
import {Canvas, useLoader} from '@react-three/fiber'
import {Physics, useBox, useCircle} from '@react-three/p2'
import {CameraControls, Gltf, SpriteAnimator, Environment, useGLTF, PerspectiveCamera,} from '@react-three/drei'
import { useAnimatedSprite } from 'use-animated-sprite';

import {useRef} from "react";
import * as THREE from "three";

function App() {
    const {nodes, materials, animations} = useGLTF("./asset/object/shark.glb");
    function Box() {
        const [ref] = useBox(() => ({ mass: 0, position: [0, -2] }))
        return (
            <group >
                <primitive ref={ref} object={nodes.shark} scale={0.2}/>
            </group>
        )
    }

    function Ball() {
        const [ref] = useCircle(() => ({mass: 1, position: [0, 2]}))
        return (
            <mesh ref={ref}>
                <sphereGeometry/>
            </mesh>
        )
    }


    return (
        <div className="App">
            <header className="App-header">
            </header>
            <Canvas camera={{ position: [0, 0, -50], fov: 50 }} >
                <Environment preset={"city"} />
                <Physics normalIndex={2}>
                <Box/>

                </Physics>

            </Canvas>
        </div>
    );
}
useGLTF.preload([
    "./asset/object/shark.glb"

]);
export default App;
