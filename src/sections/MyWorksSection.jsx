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
                    <ProjectBox text="Game Sales - React/Redux" image={gameTryImage} link="https://game-sales.vercel.app" repository="https://github.com/AndroUn/game_sales"/>
                    <ProjectBox text="Uber - Responsive/Bootstrap Grid" image={uberImage} link="https://androun.github.io/uberTry/" repository="https://github.com/AndroUn/uberTry"/>
                </div>
            </div>
        </section>
    )
}

export default MyWorksSection