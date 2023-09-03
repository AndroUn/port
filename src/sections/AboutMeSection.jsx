import styles from '../styles/styles.module.css'
import image from '../img/frontend-development-tools.png'
import Skillbar from '../components/skillbar'

const AboutMeSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutMe}>
        <img src={image} />
        <div>
          <p className={styles.aboutHeader}>About Me</p>
          <div class={styles.box}>
              <div class={styles.about_descr}>
                  I would really like to start working as a beginner front end developer, yes I don't have much experience, 
                  but at the same time I am a fast learner and I am motivated to learn all the ins and outs of this profession and become better in it. 
                  I graduated from the Georgian Technical University, where I learned the basics of programming and creating website layout, 
                  also had deal with databases and etc. 
                  I also have experience in editing videos, creating 3D objects and creating websites in Wix.
                  <br></br>
                  <br></br>
                  Recently I completed a React/React-native course at Skillwill Academy.
              </div>
          </div>
          <button className={styles.contactBtn}>Contact</button>
        </div>
      </div>

      <div className={styles.skills}>
        <p className={styles.skillsHeader}>My Skills</p>
        <Skillbar name='HTML' percent='90%' color='#FF5733'/>
        <Skillbar name='CSS' percent='70%' color='#12A3FC'/>
        <Skillbar name='JS' percent='60%' color='#BCFC12'/>
        <Skillbar name='React' percent='60%' color='#12A3FC'/>
      </div>
    </section>
  )
}

export default AboutMeSection
