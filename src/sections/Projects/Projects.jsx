import styles from './ProjectStyles.module.css'
import Q_calc from '../../assets/Q__Calc.jpg'
import ProjectCard from '../../common/ProjectCard';
import Q_money from '../../assets/Q_Money.jpg'
import X_url from '../../assets/Xurl.jpeg'

function Projects() {

    return(
        <section id='projects' className={styles.container}>

            <h1 className='sectionTitle'>Projects</h1>

            <div className={styles.projectsContainer}>

                

                <ProjectCard src={Q_calc} link={'https://github.com/vaibhavaanand123/Q_Calculator'} h3={'i.Calculator'}
                p={'Stream '}/>
               
                
                <ProjectCard src={Q_money} link={'https://github.com/vaibhavaanand123/Q_Calculator'} h3={'Stock Portfolio Analyzer'}
                p={'Stream '}/>
              
               
                <ProjectCard src={X_url} link={'https://github.com/vaibhavaanand123/Q_Calculator'} h3={'XURL'}
                p={'Stream '}/>
               



            </div>
        </section>
    );
}

export default Projects;

