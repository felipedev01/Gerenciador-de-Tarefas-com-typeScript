
import styles from './displayTaskWithContent.module.css'
import {Trash} from 'phosphor-react'
import checkBox from '../assets/checkBox.svg'
import checkBoxDone from '../assets/checkBoxDone.svg'
import { useState } from 'react'



export function DisplayTaskWithContent({text}){

    const[flaggedTask , setFlaggedTask]=useState(true)

    function handleFlagTask(){
        setFlaggedTask(false);
    }

    console.log(text)

    return(
        
           
            <ul className={styles.taskList}>
                <li className={flaggedTask ? styles.pendingTask : styles.taskDone}>
                    <button className={styles.checkBoxButton} onClick={handleFlagTask}>
                        <img src={flaggedTask ? checkBox : checkBoxDone} alt="Botão checkbox" />
                    </button>
                    <p>{text}</p>

                    <button className={styles.deleteButton}>
                    <Trash size={20}/>
                    </button>
                    </li>
                   
                
            </ul>

     
    )
}