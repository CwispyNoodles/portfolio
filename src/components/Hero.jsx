import styles from './Hero.module.css'
import { Canvas, useFrame} from '@react-three/fiber';
import { useRef } from 'react';
import { FirstPersonControls, OrbitControls, GizmoHelper, GizmoViewcube, GizmoViewport } from '@react-three/drei'
import { useControls } from 'leva';


function AnimatedBox() {
    const boxRef = useRef();

    useFrame(() => {
        boxRef.current.rotation.x += 0.005;
        boxRef.current.rotation.y += 0.005;
        boxRef.current.rotation.z += 0.005;
    });
    return(
        <mesh ref={boxRef}>
            <boxGeometry args={[2,2,2]}/>
            <axesHelper args={[10]}/>
            <meshStandardMaterial color={0x00bfff}/>
        </mesh>
    );
}

function Hero() {
    return(
        <div id='canvas-container'>
            <Canvas >
                <GizmoHelper alignment='bottom-right' margin={[80,80]}>
                    <GizmoViewcube/>
                </GizmoHelper>
                {/* <FirstPersonControls movementSpeed={3}/> */}
                <gridHelper args={[20, 20, 0xff22aa, 0x55ccff]}/>
                <axesHelper args={[10]}/>
                <OrbitControls/>
                <AnimatedBox/>
                <directionalLight position={[2,5,1]}/>
            
            </Canvas>
        </div>
    );
}

export default Hero;