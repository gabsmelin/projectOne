import styles from './Header.module.css'
import IgniteLogo from '../assets/Ignite-logo.png';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={IgniteLogo} alt="" />
            <h3>Iginate Feed</h3>
        </header>
    )
}