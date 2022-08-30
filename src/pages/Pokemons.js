import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import img from '../../public/image/PokemikioLogo.png'
import Navbar from '../Components/navbar/Navbar'
import Cardpokemon from '../Components/Cardpokemon/Cardpokemon'


export default function Pokemons() {
  return (
    <div className={styles.divprincipal}>
      <div className={styles.BackgroundDex}>
        <Navbar></Navbar>
        <div className={styles.container920}>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Cardpokemon/>

        </div>
        <div className={styles.logoPrincipal}>
          <Image src={img} width='580px' height='260px'  />
        </div>
      </div>
    </div>
  )
}