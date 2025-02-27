import styles from './Hero.module.css'
import { Canvas } from '@react-three/fiber';

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
            <Canvas camera={{position: [2,2,2]}}>
                <mesh position={[-2, 2, -1]} rotation={[0,0,Math.PI]} scale={[2,0.5, 2]}>
                    {/* <sphereGeometry args={[3, 32, 32]}/> */}
                    {/* <boxGeometry args={[2,3,2]}/> */}
                    <torusKnotGeometry args={[1.7, 0.3, 256, 256]}/>
                    {/* <meshPhongMaterial color={0x00bfff}/> */}
                    <meshToonMaterial color={0x00bfff}/>
                    <directionalLight position={[2,5,1]}/>
                </mesh>
            
            </Canvas>
        </div>
    );
}

export default Hero;