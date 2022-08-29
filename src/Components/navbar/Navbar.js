import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
    return(
            <ul className={styles.navegador}>
                
                <div className={styles.navegadordiv1}>
                    <li className={styles.linav}>
                        <Link href="#">
                            <a className={styles.anav}>Inicio</a>
                        </Link>
                    </li>
                </div>

                <div className={styles.navegadordiv2}>
                    <li className={styles.linav}>
                        <Link href="#">
                            <a className={styles.anav}>Info</a>
                        </Link>
                    </li>
                    <li className={styles.linav}>
                        <Link href="#">
                            <a className={styles.anav}>Times</a>
                        </Link>
                    </li>
                    <li className={styles.linav}>
                        <Link href="#">
                            <a className={styles.anav}>Sobre</a>
                        </Link>
                    </li>
                </div>
                
            </ul>
    )
}