import styles from '../styles/styles.module.css'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navigator = () => {
    const [icon, setIcon] = useState(faBars)
    const [menuOpen, setMenuOpen] = useState(false)

    const openMenu = () => {
        const hamburger = document.getElementById('hamburgerMenu')


        if( menuOpen === false){
            hamburger.style.display = 'flex'
            setMenuOpen(true)
            setIcon(faXmark)
        }else if(menuOpen === true){
            hamburger.style.display = 'none'
            setMenuOpen(false)
            setIcon(faBars)
        }
    }


    return(
        <div className={styles.menuBack}>
            <ul className={styles.menu}>
                <li className={styles.menu_item}><Link className={styles.menu_link} to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                <li className={styles.menu_item}><Link className={styles.menu_link} to="about" spy={true} smooth={true} duration={500}>About me</Link></li>
                <li className={styles.menu_item}><Link className={styles.menu_link} to="myWorks" spy={true} smooth={true} duration={500}>My Works</Link></li>
                <li className={styles.menu_item}><a href='https://www.linkedin.com/in/andro-unanovi/' className={styles.menu_link_a}><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></li>
                <li className={styles.hamburger} onClick={() => openMenu()}><FontAwesomeIcon icon={icon} /></li>
            </ul>

            <ul id='hamburgerMenu' className={styles.hamburgerMenu}>
                <li className={styles.hamburgerMenu_item}><Link className={styles.menu_link} to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                <li className={styles.hamburgerMenu_item}><Link className={styles.menu_link} to="about" spy={true} smooth={true} duration={500}>About me</Link></li>
                <li className={styles.hamburgerMenu_item}><Link className={styles.menu_link} to="myWorks" spy={true} smooth={true} duration={500}>My Works</Link></li>
                <li className={styles.hamburgerMenu_item}><a href='https://www.linkedin.com/in/andro-unanovi/' className={styles.menu_link_a}>Linkedin <FontAwesomeIcon icon={faLinkedin} size="lg" /></a></li>
            </ul>
        </div>
    )
}

export default Navigator