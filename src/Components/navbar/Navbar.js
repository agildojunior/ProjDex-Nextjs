import Link from 'next/link'
import img from '../../../public/image/bolapok.png'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
    return(
            <ul className={styles.navegador}>
                
                <div className={styles.navegadordiv1}>
                    <li className={styles.linavimg}>
                        <a>
                            <Image src={img} width='30px' height='30px'  />
                        </a>
                    </li>
                    <li className={styles.linav}>
                        <Link href="/inicio">
                            <a className={styles.anav}>Inicio</a>
                        </Link>
                    </li>
                </div>

                <div className={styles.navegadordiv2}>
                    <li className={styles.linav}>
                        <Link href="/Pokemons">
                            <a className={styles.anav}>Pokemons</a>
                        </Link>
                    </li>
                    <li className={styles.linav}>
                        <Link href="/Tipos">
                            <a className={styles.anav}>Tipos</a>
                        </Link>
                    </li>
                    <li className={styles.linav}>
                        <Link href="/Pokebolas">
                            <a className={styles.anav}>Pokebolas</a>
                        </Link>
                    </li>
                </div>
                
            </ul>
    )
}