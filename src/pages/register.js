import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import img from '../../public/image/PokemikioLogo.png'
import Navbar from '../Components/navbar/Navbar'
import Fotoconteudo from '../Components/Fotoconteudo/Fotoconteudo'

export default function Home() {
  return (
    <div className={styles.divprincipal}>
      <div className={styles.BackgroundDex}>
        <div className={styles.containerlogin}>
          registro

        </div>
      </div>
    </div>
  )
}
