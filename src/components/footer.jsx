import styles from '../styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <p className={styles.footerText}><FontAwesomeIcon icon={faEnvelope}  style={{marginRight: '10px'}}/>unan9997@gmail.com</p>
                <p className={styles.footerText}><FontAwesomeIcon icon={faPhone}  style={{marginRight: '10px'}}/>+995 555 32 16 20</p>
            </div>
        </div>
    )
}

export default Footer