import styles from '../styles/project_box.module.css'

const ProjectBox= ({text, image, link, repository}) => {
    return(
        <div className={styles.projectsBox}>
            <div className={styles.projectContainer}>
                <img className={styles.projectImg} src={image} alt={text}/>
                <p className={styles.projectText} >{text}</p>
            </div>
            <p className={styles.projectLinks}><a target='_blank'  rel="noopener noreferrer" href={link}>Demo link</a></p>
            <p className={styles.projectLinks}><a target='_blank'  rel="noopener noreferrer" href={repository}>Repository link</a></p>
        </div>
    )
}

export default ProjectBox