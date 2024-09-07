import styles from './NavigationStyles.module.css';
import logoDark from '../../assets/Vaibhav_dark_logo.png';
import logoLight from '../../assets/Vaibhav_light_logo.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const logo = theme === 'light' ? logoLight : logoDark;
  const themeIcon = theme === 'light' ? sun : moon;

  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="navigation" className={styles.container}>
      <nav className={`${styles.navbar} ${navActive ? styles.active : ""}`}>
        <div className={styles.logo}>
          <img src={logo} className={styles.imgLogo} alt="vaibhav_logo" />
          <h2 className={styles.namely}>Vaibhav Anand</h2>
          
        </div>
       
        <div className={styles.navbarItems_colorMode_hamburger}>
        <div className={`${styles.navbarItems} ${navActive ? styles.active : ""}`}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass={styles.navbarActive}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="hero"
              >
                <p className={styles.navbarContent}>Home</p>
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                activeClass={styles.navbarActive}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects"
              >
                <p className={styles.navbarContent}>Projects</p>
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                activeClass={styles.navbarActive}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="skills"
              >
                <p className={styles.navbarContent}>Skills</p>
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                activeClass={styles.navbarActive}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
              >
                <p className={styles.navbarContent}>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        <span className={styles.colorModeLine}></span>
        <div className={styles.colorModeContainer}>
          
        <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          />
        </div>
        
        <div
          className={`${styles.navHamburger} ${navActive ? styles.active : ""}`}
          onClick={toggleNav}
        >
          <span className={styles.navHamburgerLine}></span>
          <span className={styles.navHamburgerLine}></span>
          <span className={styles.navHamburgerLine}></span>
        </div>
        </div>
      </nav>
    </section>
  );
}

export default Navigation;
