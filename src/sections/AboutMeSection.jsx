import styles from '../styles/styles.module.css'
import image from '../img/frontend-development-tools.png'
import Skillbar from '../components/skillbar'
import { Link } from 'react-scroll'


const AboutMeSection = () => {


  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutMe}>
        <img src={image} alt='comp_image'/>
        <div className={styles.secondBlock}>
          <p className={styles.aboutHeader}>About Me</p>
          <div class={styles.box}>
              <div class={styles.about_descr}>
                  Hello, my name is Andro Unanov.
                  I graduated from the Georgian Technical University, where I learned the basics of programming and creating website layout, 
                  also had deal with databases and etc. 
                  I also have experience in editing videos, creating 3D objects and creating websites in Wix.
                  <br></br>
                  <br></br>
                  Recently I have completed a FrontEnd Development course at Skillwill Academy, where I have learned React, Redux and basics of React Native.
                  <br></br>
                  <br></br>
                  I would really like to start working as a frontend developer, yes I don't have much experience,
                  but at the same time I am a fast learner and I am motivated to learn all the ins and outs of this profession and become better in it.
              </div>
          </div>
          <Link className={styles.contactBtn} to='footer' smooth={true} duration={500}>Contact</Link>
        </div>
      </div>

      <div className={styles.skills}>
        <p className={styles.skillsHeader}>My Skills</p>
        <Skillbar name='HTML' percent='90%' color='#FF5733'/>
        <Skillbar name='CSS(SASS/SCSS)' percent='80%' color='#12A3FC'/>
        <Skillbar name='JS' percent='70%' color='#BCFC12'/>
        <Skillbar name='Typescript' percent='70%' color='#6ea0f0'/>
        <Skillbar name='React' percent='70%' color='#12A3FC'/>
        <Skillbar name='Redux' percent='70%' color='#6521db'/>
        <Skillbar name='Adobe Photoshop' percent='60%' color='#6ea0f0'/>
      </div>
    </section>
  )
}

export default AboutMeSection
