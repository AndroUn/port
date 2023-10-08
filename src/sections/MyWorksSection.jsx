import styles from '../styles/styles.module.css'
import ProjectBox from '../components/ProjectBox'
import uberImage from '../img/uber777.png'
import gameTryImage from '../img/gameTry.png'


const MyWorksSection = () => {
    return(
        <section id='myWorks'>
            <div className={styles.MyWorksSection}>
                <p className={styles.worksSectionP}>My Works</p>
                <div className={styles.projects}>
                    <ProjectBox text="Uber - CSS/Bootstrap Grid" image={uberImage} link="https://androun.github.io/uberTry/" repository="https://github.com/AndroUn/uberTry"/>
                    <ProjectBox text="GameTry - Couple Javascript elements" image={gameTryImage} link="https://androun.github.io/gameTry/" repository="https://github.com/AndroUn/gameTry"/>
                </div>
            </div>
        </section>
    )
}

export default MyWorksSection