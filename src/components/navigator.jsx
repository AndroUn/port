import styles from '../styles/styles.module.css'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navigator = () => {

    return(
        <div>
            <ul className={styles.menu}>
                <li className={styles.menu_item}><Link className={styles.menu_link} to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                <li className={styles.menu_item}><Link className={styles.menu_link} to="about" spy={true} smooth={true} duration={500}>About me</Link></li>
                <li className={styles.menu_item}><Link className={styles.menu_link} to="myWorks" spy={true} smooth={true} duration={500}>My Works</Link></li>
                <li className={styles.menu_item}><Link className={styles.menu_link}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navigator