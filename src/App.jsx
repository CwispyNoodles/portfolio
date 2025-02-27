// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

import { Canvas, useFrame} from '@react-three/fiber';
import { useRef } from 'react';
import { FirstPersonControls, OrbitControls, GizmoHelper, GizmoViewcube, GizmoViewport, useHelper } from '@react-three/drei'
import { SpotLightHelper } from 'three';
import { useControls, Leva} from "leva";

function LightWithHelper() {

  const light = useRef();

  const { angle, penumbra } = useControls({
    angle: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },
    
    penumbra: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },
  });

  useHelper(light, SpotLightHelper, 'orange')

  return(
    <spotLight ref={light} intensity={80} color={0xffea00} position={[2,6,1]} angle={angle} penumbra={penumbra} castShadow/>
  );
}

function AnimatedBox() {
    const boxRef = useRef();

    useFrame(() => {
        boxRef.current.rotation.x += 0.005;
        boxRef.current.rotation.y += 0.005;
        boxRef.current.rotation.z += 0.005;
    });
    return(
        <mesh ref={boxRef} castShadow>
            <boxGeometry args={[2,2,2]}/>
            <axesHelper args={[10]}/>
            <meshStandardMaterial color={0x00bfff}/>
        </mesh>
    );
}

function App() {
  return (
    // <>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<HomePage/>}/>
    //     </Routes>
    //   </Router>
    // </>
    <div id='canvas-container'>
      <Leva/>
      <Canvas shadows>
        <GizmoHelper alignment='bottom-right' margin={[80,80]}>
            <GizmoViewcube/>
        </GizmoHelper>
        {/* <FirstPersonControls movementSpeed={3}/> */}
        <gridHelper args={[20, 20, 0xff22aa, 0x55ccff]}/>
        <axesHelper args={[10]}/>
        <OrbitControls/>
        <AnimatedBox/>
        {/* <directionalLight position={[2,5,1]}/> */}
        {/* <ambientLight intensity={0.2} color={0xfcfcfc}/>
        <directionalLight intensity={0.8} color={0xffea00} position={[2,5,1]}/> */}
        <LightWithHelper/>
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[20,30]}/>
          <meshStandardMaterial/>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App
