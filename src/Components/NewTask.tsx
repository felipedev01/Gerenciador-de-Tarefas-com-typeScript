import styles from './NewTask.module.css'
import plusLogo  from '../assets/plus.svg'

export function NewTask(){

    return(
      <form action="" className={styles.newTaskBox}>
      <textarea
                placeholder="Adicione uma nova tarefa"
                 />
        <button type="submit"> Criar
         <img src={plusLogo} alt="plusLogo" />
        </button>
      </form>

    )
}