import styles from '../styles/project_box.module.css'

const ProjectBox= ({text, image, link, repository}) => {
    return(
        <div className={styles.projectsBox}>
            <a target='_blank' href={link}> <div className={styles.projectContainer}>
                <img className={styles.projectImg} src={image}/>
                <p className={styles.projectText} >{text}</p>
            </div></a>
            <p className={styles.projectLinks}><a target='_blank' href={link}>Demo link</a></p>
            <p className={styles.projectLinks}><a target='_blank' href={repository}>Repository link</a></p>
        </div>
    )
}

export default ProjectBox