
import styles from './displayTaskWithContent.module.css'
import {Trash} from 'phosphor-react'
import checkBox from '../assets/checkBox.svg'
import checkBoxDone from '../assets/checkBoxDone.svg'
import { useState } from 'react'

export function DisplayTaskWithContent(){

    const[flaggedTask , setFlaggedTask]=useState(true)

    function handleFlagTask(){
        setFlaggedTask(true);
    }

    return(
        
           
            <ul className={styles.taskList}>
                <li className={flaggedTask ? styles.pendingTask : styles.taskDone}>
                    <button className={styles.checkBoxButton} onClick={handleFlagTask}>
                        <img src={checkBox} alt="Botão checkbox" />
                    </button>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

                    <button className={styles.deleteButton}>
                    <Trash size={20}/>
                    </button>
                    </li>
                   
                
            </ul>

     
    )
}