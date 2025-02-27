import styles from './Hero.module.css'
import { Canvas, useFrame} from '@react-three/fiber';
import { useRef } from 'react';

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
            <meshStandardMaterial color={0x00bfff}/>
        </mesh>
    );
}

function Hero() {
    return(
        // <div className={styles.heroSection}>
        //     <div className={styles.heroBackground}/>
        //     <div className={styles.heroContent}>
        //         <div className={styles.heroLeftText}>
        //             <p className={styles.heroNameKorean}>구범찬</p>
        //             <p className={styles.heroSectionNum}>01</p>
        //         </div>
        //         <p className={styles.heroColorCode}>#920017</p>
        //         <img src={bottomArrow} width={150} height={150} className={styles.bottomArrow}/>
        //         <p className={styles.heroNameEnglish}>BUM CHAN KOO</p>
        //     </div>
        // </div>
        <div id='canvas-container'>
            <Canvas >
                <mesh position={[-2, 2, -1]} rotation={[0,0,Math.PI]} scale={[2,0.5, 2]}>
                    <AnimatedBox/>
                    <directionalLight position={[2,5,1]}/>
                </mesh>
            
            </Canvas>
        </div>
    );
}

export default Hero;