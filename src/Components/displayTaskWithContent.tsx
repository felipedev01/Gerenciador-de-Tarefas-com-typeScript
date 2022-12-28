
import styles from './displayTaskWithContent.module.css'

export function DisplayTaskWithContent(){

    return(
        <div className={styles.displayTaskContainer}>
            <header>
                <div>
                <span className={styles.createdTaskText}>Tarefas criadas</span>
                <span className={styles.createdTaskCount}> 5 </span>
                </div>
                
                <div >
                <span className={styles.doneTasksText}>Concluídas</span>
                <span className={styles.doneTasksStatus}>  2 de 5</span>
                </div>
            </header>

        </div>
    )
}