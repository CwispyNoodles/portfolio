import styles from './AboutMe.module.css'

function AboutMe() {
    return(
        <div className={styles.aboutMeSection}>
            <div className={styles.aboutMeHeader}>
                <p className={styles.aboutMeHeaderSectionNum}>02</p>
                <p className={styles.aboutMeHeaderText}>ABOUT ME</p>
                <p className={styles.aboutMeColorCode}>#464646</p>
            </div>
            <div className={styles.aboutMeContentBackground}>
                <div className={styles.aboutMeContent}>
                    <p className={styles.aboutMeText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sint velit id esse commodi! Sint tempore rem magnam! Nesciunt quos atque veniam magni, illum voluptatibus quibusdam quo! Ratione, praesentium voluptatem?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;