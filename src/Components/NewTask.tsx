import styles from './NewTask.module.css'

export function NewTask(){

    return(
      <form action="" className={styles.newTaskBox}>
      <textarea
                placeholder="Adicione uma nova tarefa"
                 />
        <button type="submit"> Criar</button>
      </form>

    )
}