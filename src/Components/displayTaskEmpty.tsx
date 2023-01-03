import styles from './displayTaskWithContent.module.css'
import {Trash} from 'phosphor-react'
import checkBox from '../assets/checkBox.svg'


export function DisplayTaskEmpty(){

    return(
        <ul className={styles.taskList}>
                <li className={styles.pendingTask}>
                    <button className={styles.checkBoxButton} >
                        <img src={ checkBox} alt="Botão checkbox" />
                    </button>
                    <p>Nenhuma tarefa pendente.</p>

                    <button className={styles.deleteButton}>
                    <Trash size={20}/>
                    </button>
                    </li>
                   
                
            </ul>
    )
}