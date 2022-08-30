import Link from 'next/link'
import img1 from '../../../public/image/galeria/img1.png'
import img2 from '../../../public/image/galeria/img2.png'
import img3 from '../../../public/image/galeria/img3.png'
import Image from 'next/image'
import styles from './Cardpokemon.module.css'

export default function Fotoconteudo() {
    return(
        <div className={styles.card}>
            <Image width='170px' height='170px' src={img1} />
            <h1 className={styles.cardh1}>Giratina</h1>
        </div>
    )
}