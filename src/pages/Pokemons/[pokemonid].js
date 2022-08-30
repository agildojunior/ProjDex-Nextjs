import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles2 from '../../styles/pokeinfo.module.css'
import styles from '../../styles/Home.module.css'
import img from '../../../public/image/PokemikioLogo.png'
import Navbar from '../../Components/navbar/Navbar'

export const getStaticPaths = async() => {

  const maxPokemons = 151
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
          <div className={styles.infopok}>
            <div className={styles2.pokemon_container}>
          
              <h1 className={styles2.title}>{pokemon.name}</h1>
              <Image width='200px' height='200px' src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} />
              <div>
                <h3>Numero: #{pokemon.id}</h3>
              </div>
              <div>
                <h3>Tipo</h3>
                <div className={styles2.types_container}>
                  {pokemon.types.map((item, index) => (
                    <span key={index} className={`${styles2.type} ${styles2['type_' + item.type.name]}`}>{item.type.name}</span>
                  ))}
                </div>
              </div>
              <div className={styles2.data_container}>
                <div className={styles2.data_height}>
                  <h4>Altura:</h4>
                  <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles2.data_weight}>
                  <h4>Peso:</h4>
                  <p>{pokemon.weight / 10} kg</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className={styles.logoPrincipal}>
          <Image src={img} width='580px' height='260px'  />
        </div>
      </div>
    </div>
  )
}
