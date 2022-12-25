import styles from './Header.module.css'
import RocketLogo from '../assets/rocket.svg'

export function Header(){

    return(
        <header className={styles.Header}>
            <div className={styles.boxLogo}>
             <img src="/src/assets/rocket.svg" alt="RocketLogo" />
             <span>to</span>
             <span>do</span>
            </div>
        </header>
    )
}