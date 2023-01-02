import { DisplayTaskWithContent } from "./displayTaskWithContent";
import styles from './displayTask.module.css'
import { useState } from 'react'

export function DisplayTask(){

    const[taskList,setTaskList]=useState([
        1,2,3
      ])
     
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

            {
      taskList.map(task=>{

        return(
          <DisplayTaskWithContent/>

        )
      })


      }
        </div>
        
      )

}