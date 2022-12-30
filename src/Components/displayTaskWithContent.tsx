
import styles from './displayTaskWithContent.module.css'
import {Trash} from 'phosphor-react'
import checkBox from '../assets/checkBox.svg'

export function DisplayTaskWithContent(){

    return(
        <div className={styles.displayTaskContainer}>
            <header>
                <div>
                <span className={styles.createdTaskText}>Tarefas criadas</span>
                <span className={styles.createdTaskCount}>5</span>
                </div>
                
                <div >
                <span className={styles.doneTasksText}>Concluídas</span>
                <span className={styles.doneTasksStatus}>2 de 5</span>
                </div>
            </header>
            <ul className={styles.taskList}>
                <li>
                    <button className={styles.checkBoxButton}>
                        <img src={checkBox} alt="Botão checkbox" />
                    </button>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <Trash/>
                    </li>
                <li>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</li>
                <li>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</li>
                <li>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</li>
                <li>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</li>
            </ul>

        </div>
    )
}