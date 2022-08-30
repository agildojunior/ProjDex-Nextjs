import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import img from '../../../public/image/PokemikioLogo.png'
import Navbar from '../../Components/navbar/Navbar'

export const getStaticPaths = async() => {

  const maxPokemons = 9
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  const paths = data.results.map((pokemon, index) => {
    return {
      params: {pokemonid: (index + 1).toString() },
    }
  })

  return{
    paths,
    fallback: false,
  }
}

export const getStaticProps = async(context) => {
  
  const id = context.params.pokemonid

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json()

  return {
    props: { pokemon: data },
  }

}


export default function Pokemon({ pokemon }) {
  return (
    <div className={styles.divprincipal}>
      <div className={styles.BackgroundDex}>
        <Navbar></Navbar>
        <div className={styles.container920}>
          <div className={styles.containerlistapok}>
            
            <h1>{pokemon.name}</h1>
            
          </div>
        </div>
        <div className={styles.logoPrincipal}>
          <Image src={img} width='580px' height='260px'  />
        </div>
      </div>
    </div>
  )
}
