import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import {useTheme} from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon= theme ==='light'? sun:moon;
    const twitterIcon= theme ==='light'? twitterLight:twitterDark;
    const githubIcon= theme ==='light'? githubLight:githubDark;
    const linkedinIcon= theme ==='light'? linkedinLight:linkedinDark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile picture of Vaibhav Anand" onClick={toggleTheme}/>
            
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}
            />
            </div>

            <div className={styles.info}>
                <h1>
                    Vaibhav <br /> Anand
                </h1>
                <h2> Full Stack  Developer</h2>
                <span>
                    <a href="https://x.com/vaibhavanandav?t=QShY66Dc8TzlSmcUkABM1w&s=08 " target='_blank'>
                    <img src={twitterIcon} alt="Twitter Icon " />
                    </a>
                    <a href="https://github.com/vaibhavaanand123" target='_blank'>
                    <img src={githubIcon} alt="Github Icon " />
                    </a>
                    <a href="https://www.linkedin.com/in/vaibhav-aanand/" target='_blank'>
                    <img src={linkedinIcon} alt="Linkedin Icon " />
                    </a>
                </span>
                <p className={styles.description}>A coding enthusiast with a passion for algorithms and problem-solving. Patience, dedication, and continuous learning drive my journey. As a competitive coder and designer
                </p>
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