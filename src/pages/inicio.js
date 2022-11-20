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
        <Navbar></Navbar>
        <div className={styles.container920}>
          <Fotoconteudo></Fotoconteudo>
        { 1 == 1 ?(

          <table className={styles.tabela}> 
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Tonzinho</td>
                <td>Toon@gmail.com</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Tonzinho</td>
                <td>Toon@gmail.com</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Tonzinho</td>
                <td>Toon@gmail.com</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Tonzinho</td>
                <td>Toon@gmail.com</td>
              </tr>
            </tbody>
          </table>

        ) : (
          <h1></h1>
        )}

        </div>
        <div className={styles.logoPrincipal}>
          <Image src={img} width='580px' height='260px'  />
        </div>
      </div>
    </div>
  )
}
