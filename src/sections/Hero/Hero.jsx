import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/Vaibhav_Anand.pdf'
import {useTheme} from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const twitterIcon= theme ==='light'? twitterLight:twitterDark;
    const githubIcon= theme ==='light'? githubLight:githubDark;
    const linkedinIcon= theme ==='light'? linkedinLight:linkedinDark;

  return (
    <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile picture of Vaibhav Anand" onClick={toggleTheme}/>
            
            </div>

            <div className={styles.info}>
                <h1>
                    Vaibhav <br /> Anand
                </h1>
                <h2> Full Stack  Developer</h2>
                <span>
                    <a href="https://x.com/vaibhavanandav?t=QShY66Dc8TzlSmcUkABM1w&s=08 " target='_blank'  >
                    <img src={twitterIcon} alt="Twitter Icon " />
                    </a>
                    <a href="https://github.com/vaibhavaanand123" target='_blank'>
                    <img src={githubIcon} alt="Github Icon " />
                    </a>
                    <a href="https://www.linkedin.com/in/vaibhav-aanand/" target='_blank'>
                    <img src={linkedinIcon} alt="Linkedin Icon " />
                    </a>
                </span>
                <p className={styles.description}>Accomplished Full Stack Developer proficient in Java, Spring Boot, React, REST APIs, Git, and SQL. Expert in delivering scalable, high-performance solutions, optimizing software for high-traffic environments, and driving business success.</p>
                <a href={CV} download>
                    <button className="hover" >
                        Resume
                    </button>
                </a>
            </div>
    </section>
  )
}

export default Hero