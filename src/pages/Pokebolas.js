import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import img from '../../public/image/PokemikioLogo.png'
import imgpokebolas from '../../public/image/pokebolas.png'
import Navbar from '../Components/navbar/Navbar'


export default function Pokebolas() {
  return (
    <div className={styles.divprincipal}>
      <div className={styles.BackgroundDex}>
        <Navbar></Navbar>
        <div className={styles.container920}>
          <h1 className={styles.titulobranco}>Pokebolas</h1>
          <Image src={imgpokebolas} width='880px' height='500px'  />

        </div>
        <div className={styles.logoPrincipal}>
          <Image src={img} width='580px' height='260px'/>
        </div>
      </div>
    </div>
  )
}
