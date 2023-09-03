import styles from '../styles/skillbar.module.css'
import { SpanBar } from "../styles/styled"

const Skillbar = ({name, percent, color}) => {
    return(
        <div className={styles.skill_bar_container}>
            <span className={styles.skill_name}>{name}</span>
            <span className={styles.skill_percent}>{percent}</span>
            <SpanBar width={percent} color={color}></SpanBar>
        </div>
    )
}

export default Skillbar