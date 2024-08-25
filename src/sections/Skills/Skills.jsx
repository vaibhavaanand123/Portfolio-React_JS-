import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
            <SkillList src={checkMarkIcon} skill='JavaScript'/>
            <SkillList src={checkMarkIcon} skill='React'/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Git'/>
            <SkillList src={checkMarkIcon} skill='Linux'/>
            <SkillList src={checkMarkIcon} skill='Gradle'/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Java'/>
            <SkillList src={checkMarkIcon} skill='J Unit'/>
            <SkillList src={checkMarkIcon} skill='Mockito'/>
            <SkillList src={checkMarkIcon} skill='Jackson'/>
            <SkillList src={checkMarkIcon} skill='HTTP'/>
            <SkillList src={checkMarkIcon} skill='REST'/>
        </div>
    </section>
  );
}

export default Skills