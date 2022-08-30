import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import img from '../../public/image/PokemikioLogo.png'
import Navbar from '../Components/navbar/Navbar'
import Cardpokemon from '../Components/Cardpokemon/Cardpokemon'

export async function getStaticProps() {

  const maxPokemons = 9
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })
  
  return {
    props: {
      pokemons: data.results,
    },
  }

}

export default function Pokemons({ pokemons}) {
  return (
    <div className={styles.divprincipal}>
      <div className={styles.BackgroundDex}>
        <Navbar></Navbar>
        <div className={styles.container920}>
          <div className={styles.containerlistapok}>

            {pokemons.map((pokemon) => (
              <Cardpokemon key={pokemon.id} pokemon={pokemon}/>
            ))}

          </div>
        </div>
        <div className={styles.logoPrincipal}>
          <Image src={img} width='580px' height='260px'  />
        </div>
      </div>
    </div>
  )
}
