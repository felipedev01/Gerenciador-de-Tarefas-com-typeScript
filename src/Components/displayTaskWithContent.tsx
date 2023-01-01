
import styles from './displayTaskWithContent.module.css'
import {Trash} from 'phosphor-react'
import checkBox from '../assets/checkBox.svg'
import checkBoxDone from '../assets/checkBoxDone.svg'

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
                <li className={styles.pendingTask}>
                    <button className={styles.checkBoxButton}>
                        <img src={checkBox} alt="Botão checkbox" />
                    </button>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

                    <button className={styles.deleteButton}>
                    <Trash size={20}/>
                    </button>
                    </li>
                    <li className={styles.pendingTask}>
                    <button className={styles.checkBoxButton}>
                        <img src={checkBox} alt="Botão checkbox" />
                    </button>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

                    <button className={styles.deleteButton}>
                    <Trash size={20}/>
                    </button>
                    </li>
                    <li className={styles.pendingTask}>
                    <button className={styles.checkBoxButton}>
                        <img src={checkBox} alt="Botão checkbox" />
                    </button>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

                    <button className={styles.deleteButton}>
                    <Trash size={20}/>
                    </button>
                    </li>
                    <li className={styles.taskDone}>
                    <button className={styles.checkBoxButton}>
                        <img src={checkBoxDone} alt="Botão checkbox" />
                    </button>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

                    <button className={styles.deleteButton}>
                    <Trash size={20}/>
                    </button>
                    </li>
                    <li className={styles.taskDone}>
                    <button className={styles.checkBoxButton}>
                        <img src={checkBoxDone} alt="Botão checkbox" />
                    </button>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

                    <button className={styles.deleteButton}>
                    <Trash size={20}/>
                    </button>
                    </li>
                
            </ul>

        </div>
    )
}