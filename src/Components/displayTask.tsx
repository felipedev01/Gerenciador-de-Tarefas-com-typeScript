import { DisplayTaskWithContent } from "./displayTaskWithContent";
import {DisplayTaskEmpty } from "./displayTaskEmpty";
import styles from './displayTask.module.css'
import plusLogo  from '../assets/plus.svg'
import { FormEvent, useState } from 'react'


export function DisplayTask(){

    const[taskList,setTaskList]=useState ([
       
      ])

    const [newTask , setNewTask]=useState('')

    function handleNewTask(event :FormEvent){

     console.log(event.target.value)
     const newTaskText=event.target.value
     setNewTask(newTaskText)
    }

    function createNewTask(event :FormEvent){
      setTaskList([...taskList,newTask])
    }
     
      return(
       <div>
        <form action="" className={styles.newTaskBox} onSubmit={createNewTask}>
      <textarea
      name="task"
      onChange={handleNewTask}
      value={newTask}
      
                placeholder="Adicione uma nova tarefa"
                 />
        <button type="submit"> Criar
         <img src={plusLogo} alt="plusLogo" />
        </button>
      </form>
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
   
        if(taskList.length==0){
        return(

          
          <DisplayTaskEmpty/>

        )
        }else{

          return(
          
            <DisplayTaskWithContent text={task}/>
            
          )
          

        }
      })


      }
        </div>
        </div>
      )

}