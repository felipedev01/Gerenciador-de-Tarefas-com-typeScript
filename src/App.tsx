import { useState } from 'react'
import { Header } from './Components/Header'
import {NewTask} from './Components/NewTask'
import './global.css'
import styles from '../src/App.module.css'
import { DisplayTaskWithContent } from './Components/displayTaskWithContent'



export function App() {
 

  return (
    <div>

      <Header/>


     <main className={styles.centralBox}>
     <NewTask/>
     <DisplayTaskWithContent/>
     </main>
    
    </div>
   
  )
}


