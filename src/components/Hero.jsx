import styles from './Hero.module.css'
import bottomArrow from '../images/BottomArrow.svg'

function Hero() {
    return(
        <div className={styles.heroSection}>
            <div className={styles.heroBackground}/>
            <div className={styles.heroContent}>
                <div className={styles.heroLeftText}>
                    <p className={styles.heroNameKorean}>구범찬</p>
                    <p className={styles.heroSectionNum}>01</p>
                </div>
                <p className={styles.heroColorCode}>#920017</p>
                <img src={bottomArrow} width={150} height={150} className={styles.bottomArrow}/>
                <p className={styles.heroNameEnglish}>BUM CHAN KOO</p>
            </div>
        </div>
    );
}

export default Hero;