import Link from 'next/link'
import Image from 'next/image'
import styles from './Cardpokemon.module.css'


export default function Cardpokemon({pokemon}) {
    return(
        <Link href={`/Pokemons/${pokemon.id}`}>
            <div className={styles.card}>
                <Image className={styles.imgpok} width='200px' height='200px' src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} />
                <p className={styles.cardp}>N°{pokemon.id}</p>
                <h1 className={styles.cardh1}>{pokemon.name}</h1>
            </div>
        </Link>
    )
}