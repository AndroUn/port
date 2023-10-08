import AboutMeSection from "../sections/AboutMeSection"
import MyWorksSection from "../sections/MyWorksSection"
import Footer from "../components/footer"
import Navigator from "../components/navigator"
import styles from "../styles/styles.module.css"
import RobotImage from "../img/robot_port.png" 

const MainPage = () => {
    return(
        <div>
            <Navigator />

            <div className={styles.homePage} id='home'>
                <div className={styles.headers}>
                    <div className={styles.text}>
                        <p className={styles.header}>Hi, my name is Andro<br/>
                        and I'm Front-End Developer,</p>
                        <p className={styles.descr}>on this website you can take a glance at my works and check my skills.</p>
                    </div>
                    <img src={RobotImage} />
                    
                </div>
                
            </div>

            <AboutMeSection />
            <MyWorksSection />

            <Footer />
            
        </div>
    )
}

export default MainPage