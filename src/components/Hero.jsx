import styles from './Hero.module.css'

function Hero() {
    return(
        <div className={styles.heroSection}>
            <div className={styles.heroBackground}/>
            <div className={styles.heroContent}>
                <div className={styles.heroLeftText}>
                    <p className={styles.heroNameKorean}>구범찬</p>
                    <p className={styles.heroSectionNum}>01</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;