import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Tabela.module.css'


export default function Pokemon() {
  return (
    <div>
        <h1 className={styles.titulo}> Resistências e Fraquezas</h1>
        <table className={styles.tabela}>
            <thead>
                <tr>
                    <th>Tipos</th>
                    <th className={styles.type_normal}>Normal</th>
                    <th className={styles.type_fire}>fire</th>
                    <th className={styles.type_water}>water</th>
                    <th className={styles.type_grass}>grass</th>
                    <th className={styles.type_eletric}>eletric</th>
                    <th className={styles.type_ice}>ice</th>
                    <th className={styles.type_fighting}>fighting</th>
                    <th className={styles.type_poison}>poison</th>
                    <th className={styles.type_ground}>ground</th>
                    <th className={styles.type_flying}>flying</th>
                    <th className={styles.type_psychic}>psychic</th>
                    <th className={styles.type_bug}>bug</th>
                    <th className={styles.type_rock}>rock</th>
                    <th className={styles.type_ghost}>ghost</th>
                    <th className={styles.type_dragon}>dragon</th>
                    <th className={styles.type_dark}>dark</th>
                    <th className={styles.type_steel}>steel</th>
                    <th className={styles.type_fairy}>fairy</th>
                </tr>
            </thead>
            <tbody>
               {/* Normal */}
                <tr>
                    <td className={styles.type_normal}>Normal</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdvermelho}>0.5x</td>
                    <td className={styles.tdpreto}>0x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdvermelho}>0.5x</td>
                    <td className={styles.tdbranco}>1x</td>
                </tr>
                {/* fire */}
                <tr>
                    <td className={styles.type_fire}>fire</td> 
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdvermelho}>0.5x</td>
                    <td className={styles.tdvermelho}>0.5x</td>
                    <td className={styles.tdverde}>2x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdverde}>2x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdverde}>2x</td>
                    <td className={styles.tdvermelho}>0.5x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdvermelho}>0.5x</td>
                    <td className={styles.tdbranco}>1x</td>
                    <td className={styles.tdverde}>2x</td>
                    <td className={styles.tdbranco}>1x</td>
                </tr>
                {/* water */}
                <tr>
                    <td className={styles.type_water}>water</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdverde}>2x</td>{/*fire */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*water */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*grass */}
                    <td className={styles.tdbranco}>1x</td>{/*eletric */}
                    <td className={styles.tdbranco}>1x</td>{/*ice */}
                    <td className={styles.tdbranco}>1x</td>{/*fighting */}
                    <td className={styles.tdbranco}>1x</td>{/*poison */}
                    <td className={styles.tdverde}>2x</td>{/*ground */}
                    <td className={styles.tdbranco}>1x</td>{/*flying */}
                    <td className={styles.tdbranco}>1x</td>{/*psychic */}
                    <td className={styles.tdbranco}>1x</td>{/*bug */}
                    <td className={styles.tdverde}>2x</td>{/*rock */}
                    <td className={styles.tdbranco}>1x</td>{/*ghost */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*dragon */}
                    <td className={styles.tdbranco}>1x</td>{/*dark */}
                    <td className={styles.tdbranco}>1x</td>{/*steel */}
                    <td className={styles.tdbranco}>1x</td>{/*fairy */}
                </tr>
                {/* grass */}
                <tr>
                    <td className={styles.type_grass}>grass</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*fire */}
                    <td className={styles.tdverde}>2x</td>{/*water */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*grass */}
                    <td className={styles.tdbranco}>1x</td>{/*eletric */}
                    <td className={styles.tdbranco}>1x</td>{/*ice */}
                    <td className={styles.tdbranco}>1x</td>{/*fighting */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*poison */}
                    <td className={styles.tdverde}>2x</td>{/*ground */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*flying */}
                    <td className={styles.tdbranco}>1x</td>{/*psychic */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*bug */}
                    <td className={styles.tdverde}>2x</td>{/*rock */}
                    <td className={styles.tdbranco}>1x</td>{/*ghost */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*dragon */}
                    <td className={styles.tdbranco}>1x</td>{/*dark */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*steel */}
                    <td className={styles.tdbranco}>1x</td>{/*fairy */}
                </tr>
                {/* eletric */}
                <tr>
                    <td className={styles.type_eletric}>eletric</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdbranco}>1x</td>{/*fire */}
                    <td className={styles.tdverde}>2x</td>{/*water */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*grass */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*eletric */}
                    <td className={styles.tdbranco}>1x</td>{/*ice */}
                    <td className={styles.tdbranco}>1x</td>{/*fighting */}
                    <td className={styles.tdbranco}>1x</td>{/*poison */}
                    <td className={styles.tdpreto}>0x</td>{/*ground */}
                    <td className={styles.tdverde}>2x</td>{/*flying */}
                    <td className={styles.tdbranco}>1x</td>{/*psychic */}
                    <td className={styles.tdbranco}>1x</td>{/*bug */}
                    <td className={styles.tdbranco}>1x</td>{/*rock */}
                    <td className={styles.tdbranco}>1x</td>{/*ghost */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*dragon */}
                    <td className={styles.tdbranco}>1x</td>{/*dark */}
                    <td className={styles.tdbranco}>1x</td>{/*steel */}
                    <td className={styles.tdbranco}>1x</td>{/*fairy */}
                </tr>
                {/* ice */}
                <tr>
                    <td className={styles.type_ice}>ice</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*fire */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*water */}
                    <td className={styles.tdverde}>2x</td>{/*grass */}
                    <td className={styles.tdbranco}>1x</td>{/*eletric */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*ice */}
                    <td className={styles.tdbranco}>1x</td>{/*fighting */}
                    <td className={styles.tdbranco}>1x</td>{/*poison */}
                    <td className={styles.tdverde}>2x</td>{/*ground */}
                    <td className={styles.tdverde}>2x</td>{/*flying */}
                    <td className={styles.tdbranco}>1x</td>{/*psychic */}
                    <td className={styles.tdbranco}>1x</td>{/*bug */}
                    <td className={styles.tdbranco}>1x</td>{/*rock */}
                    <td className={styles.tdbranco}>1x</td>{/*ghost */}
                    <td className={styles.tdverde}>2x</td>{/*dragon */}
                    <td className={styles.tdbranco}>1x</td>{/*dark */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*steel */}
                    <td className={styles.tdbranco}>1x</td>{/*fairy */}
                </tr>
                {/* fighting */}
                <tr>
                    <td className={styles.type_fighting}>fighting</td>
                    <td className={styles.tdverde}>2x</td>{/*normal */}
                    <td className={styles.tdbranco}>1x</td>{/*fire */}
                    <td className={styles.tdbranco}>1x</td>{/*water */}
                    <td className={styles.tdbranco}>1x</td>{/*grass */}
                    <td className={styles.tdbranco}>1x</td>{/*eletric */}
                    <td className={styles.tdverde}>2x</td>{/*ice */}
                    <td className={styles.tdbranco}>1x</td>{/*fighting */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*poison */}
                    <td className={styles.tdbranco}>1x</td>{/*ground */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*flying */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*psychic */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*bug */}
                    <td className={styles.tdverde}>2x</td>{/*rock */}
                    <td className={styles.tdpreto}>0x</td>{/*ghost */}
                    <td className={styles.tdbranco}>1x</td>{/*dragon */}
                    <td className={styles.tdverde}>2x</td>{/*dark */}
                    <td className={styles.tdverde}>2x</td>{/*steel */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*fairy */}
                </tr>
                {/* Poison */}
                <tr>
                    <td className={styles.type_poison}>Poison</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdbranco}>1x</td>{/*fire */}
                    <td className={styles.tdbranco}>1x</td>{/*water */}
                    <td className={styles.tdverde}>2x</td>{/*grass */}
                    <td className={styles.tdbranco}>1x</td>{/*eletric */}
                    <td className={styles.tdbranco}>1x</td>{/*ice */}
                    <td className={styles.tdbranco}>1x</td>{/*fighting */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*poison */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*ground */}
                    <td className={styles.tdbranco}>1x</td>{/*flying */}
                    <td className={styles.tdbranco}>1x</td>{/*psychic */}
                    <td className={styles.tdbranco}>1x</td>{/*bug */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*rock */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*ghost */}
                    <td className={styles.tdbranco}>1x</td>{/*dragon */}
                    <td className={styles.tdbranco}>1x</td>{/*dark */}
                    <td className={styles.tdpreto}>0x</td>{/*steel */}
                    <td className={styles.tdverde}>2x</td>{/*fairy */}
                </tr>
                {/* ground */}
                <tr>
                    <td className={styles.type_ground}>ground</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdbranco}>2x</td>{/*fire */}
                    <td className={styles.tdbranco}>1x</td>{/*water */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*grass */}
                    <td className={styles.tdverde}>2x</td>{/*eletric */}
                    <td className={styles.tdbranco}>1x</td>{/*ice */}
                    <td className={styles.tdbranco}>1x</td>{/*fighting */}
                    <td className={styles.tdverde}>2x</td>{/*poison */}
                    <td className={styles.tdbranco}>1x</td>{/*ground */}
                    <td className={styles.tdpreto}>0x</td>{/*flying */}
                    <td className={styles.tdbranco}>1x</td>{/*psychic */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*bug */}
                    <td className={styles.tdverde}>2x</td>{/*rock */}
                    <td className={styles.tdbranco}>1x</td>{/*ghost */}
                    <td className={styles.tdbranco}>1x</td>{/*dragon */}
                    <td className={styles.tdbranco}>1x</td>{/*dark */}
                    <td className={styles.tdverde}>2x</td>{/*steel */}
                    <td className={styles.tdbranco}>1x</td>{/*fairy */}
                </tr>
                {/* flying */}
                <tr>
                    <td className={styles.type_flying}>flying</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdbranco}>1x</td>{/*fire */}
                    <td className={styles.tdbranco}>1x</td>{/*water */}
                    <td className={styles.tdverde}>2x</td>{/*grass */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*eletric */}
                    <td className={styles.tdbranco}>1x</td>{/*ice */}
                    <td className={styles.tdverde}>2x</td>{/*fighting */}
                    <td className={styles.tdbranco}>1x</td>{/*poison */}
                    <td className={styles.tdbranco}>1x</td>{/*ground */}
                    <td className={styles.tdbranco}>1x</td>{/*flying */}
                    <td className={styles.tdbranco}>1x</td>{/*psychic */}
                    <td className={styles.tdverde}>2x</td>{/*bug */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*rock */}
                    <td className={styles.tdbranco}>1x</td>{/*ghost */}
                    <td className={styles.tdbranco}>1x</td>{/*dragon */}
                    <td className={styles.tdbranco}>1x</td>{/*dark */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*steel */}
                    <td className={styles.tdbranco}>1x</td>{/*fairy */}
                </tr>
                {/* psychic */}
                <tr>
                    <td className={styles.type_psychic}>psychic</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdbranco}>1x</td>{/*fire */}
                    <td className={styles.tdbranco}>1x</td>{/*water */}
                    <td className={styles.tdbranco}>1x</td>{/*grass */}
                    <td className={styles.tdbranco}>1x</td>{/*eletric */}
                    <td className={styles.tdbranco}>1x</td>{/*ice */}
                    <td className={styles.tdverde}>2x</td>{/*fighting */}
                    <td className={styles.tdverde}>2x</td>{/*poison */}
                    <td className={styles.tdbranco}>1x</td>{/*ground */}
                    <td className={styles.tdbranco}>1x</td>{/*flying */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*psychic */}
                    <td className={styles.tdbranco}>1x</td>{/*bug */}
                    <td className={styles.tdbranco}>1x</td>{/*rock */}
                    <td className={styles.tdbranco}>1x</td>{/*ghost */}
                    <td className={styles.tdbranco}>1x</td>{/*dragon */}
                    <td className={styles.tdpreto}>0x</td>{/*dark */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*steel */}
                    <td className={styles.tdbranco}>1x</td>{/*fairy */}
                </tr>
                {/* bug */}
                <tr>
                    <td className={styles.type_bug}>bug</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*fire */}
                    <td className={styles.tdbranco}>1x</td>{/*water */}
                    <td className={styles.tdverde}>2x</td>{/*grass */}
                    <td className={styles.tdbranco}>1x</td>{/*eletric */}
                    <td className={styles.tdbranco}>1x</td>{/*ice */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*fighting */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*poison */}
                    <td className={styles.tdbranco}>1x</td>{/*ground */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*flying */}
                    <td className={styles.tdverde}>2x</td>{/*psychic */}
                    <td className={styles.tdbranco}>1x</td>{/*bug */}
                    <td className={styles.tdbranco}>1x</td>{/*rock */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*ghost */}
                    <td className={styles.tdbranco}>1x</td>{/*dragon */}
                    <td className={styles.tdverde}>2x</td>{/*dark */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*steel */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*fairy */}
                </tr>
                {/* rock */}
                <tr>
                    <td className={styles.type_rock}>rock</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdverde}>2x</td>{/*fire */}
                    <td className={styles.tdbranco}>1x</td>{/*water */}
                    <td className={styles.tdbranco}>1x</td>{/*grass */}
                    <td className={styles.tdbranco}>1x</td>{/*eletric */}
                    <td className={styles.tdverde}>2x</td>{/*ice */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*fighting */}
                    <td className={styles.tdbranco}>1x</td>{/*poison */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*ground */}
                    <td className={styles.tdverde}>2x</td>{/*flying */}
                    <td className={styles.tdbranco}>1x</td>{/*psychic */}
                    <td className={styles.tdverde}>2x</td>{/*bug */}
                    <td className={styles.tdbranco}>1x</td>{/*rock */}
                    <td className={styles.tdbranco}>1x</td>{/*ghost */}
                    <td className={styles.tdbranco}>1x</td>{/*dragon */}
                    <td className={styles.tdbranco}>1x</td>{/*dark */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*steel */}
                    <td className={styles.tdbranco}>1x</td>{/*fairy */}
                </tr>
                {/* ghost */}
                <tr>
                    <td className={styles.type_ghost}>ghost</td>
                    <td className={styles.tdpreto}>0x</td>{/*normal */}
                    <td className={styles.tdbranco}>1x</td>{/*fire */}
                    <td className={styles.tdbranco}>1x</td>{/*water */}
                    <td className={styles.tdbranco}>1x</td>{/*grass */}
                    <td className={styles.tdbranco}>1x</td>{/*eletric */}
                    <td className={styles.tdbranco}>1x</td>{/*ice */}
                    <td className={styles.tdbranco}>1x</td>{/*fighting */}
                    <td className={styles.tdbranco}>1x</td>{/*poison */}
                    <td className={styles.tdbranco}>1x</td>{/*ground */}
                    <td className={styles.tdbranco}>1x</td>{/*flying */}
                    <td className={styles.tdverde}>2x</td>{/*psychic */}
                    <td className={styles.tdbranco}>1x</td>{/*bug */}
                    <td className={styles.tdbranco}>1x</td>{/*rock */}
                    <td className={styles.tdverde}>2x</td>{/*ghost */}
                    <td className={styles.tdbranco}>1x</td>{/*dragon */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*dark */}
                    <td className={styles.tdbranco}>1x</td>{/*steel */}
                    <td className={styles.tdbranco}>1x</td>{/*fairy */}
                </tr>
                {/* dragon */}
                <tr>
                    <td className={styles.type_dragon}>dragon</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdbranco}>1x</td>{/*fire */}
                    <td className={styles.tdbranco}>1x</td>{/*water */}
                    <td className={styles.tdbranco}>1x</td>{/*grass */}
                    <td className={styles.tdbranco}>1x</td>{/*eletric */}
                    <td className={styles.tdbranco}>1x</td>{/*ice */}
                    <td className={styles.tdbranco}>1x</td>{/*fighting */}
                    <td className={styles.tdbranco}>1x</td>{/*poison */}
                    <td className={styles.tdbranco}>1x</td>{/*ground */}
                    <td className={styles.tdbranco}>1x</td>{/*flying */}
                    <td className={styles.tdbranco}>1x</td>{/*psychic */}
                    <td className={styles.tdbranco}>1x</td>{/*bug */}
                    <td className={styles.tdbranco}>1x</td>{/*rock */}
                    <td className={styles.tdbranco}>1x</td>{/*ghost */}
                    <td className={styles.tdverde}>2x</td>{/*dragon */}
                    <td className={styles.tdbranco}>1x</td>{/*dark */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*steel */}
                    <td className={styles.tdpreto}>0x</td>{/*fairy */}
                </tr>
                {/* dark */}
                <tr>
                    <td className={styles.type_dark}>dark</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdbranco}>1x</td>{/*fire */}
                    <td className={styles.tdbranco}>1x</td>{/*water */}
                    <td className={styles.tdbranco}>1x</td>{/*grass */}
                    <td className={styles.tdbranco}>1x</td>{/*eletric */}
                    <td className={styles.tdbranco}>1x</td>{/*ice */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*fighting */}
                    <td className={styles.tdbranco}>1x</td>{/*poison */}
                    <td className={styles.tdbranco}>1x</td>{/*ground */}
                    <td className={styles.tdbranco}>1x</td>{/*flying */}
                    <td className={styles.tdverde}>2x</td>{/*psychic */}
                    <td className={styles.tdbranco}>1x</td>{/*bug */}
                    <td className={styles.tdbranco}>1x</td>{/*rock */}
                    <td className={styles.tdverde}>2x</td>{/*ghost */}
                    <td className={styles.tdbranco}>1x</td>{/*dragon */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*dark */}
                    <td className={styles.tdbranco}>1x</td>{/*steel */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*fairy */}
                </tr>
                {/* steel */}
                <tr>
                    <td className={styles.type_steel}>steel</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*fire */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*water */}
                    <td className={styles.tdbranco}>1x</td>{/*grass */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*eletric */}
                    <td className={styles.tdverde}>2x</td>{/*ice */}
                    <td className={styles.tdbranco}>1x</td>{/*fighting */}
                    <td className={styles.tdbranco}>1x</td>{/*poison */}
                    <td className={styles.tdbranco}>1x</td>{/*ground */}
                    <td className={styles.tdbranco}>1x</td>{/*flying */}
                    <td className={styles.tdbranco}>1x</td>{/*psychic */}
                    <td className={styles.tdbranco}>1x</td>{/*bug */}
                    <td className={styles.tdverde}>2x</td>{/*rock */}
                    <td className={styles.tdbranco}>1x</td>{/*ghost */}
                    <td className={styles.tdbranco}>1x</td>{/*dragon */}
                    <td className={styles.tdbranco}>1x</td>{/*dark */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*steel */}
                    <td className={styles.tdverde}>2x</td>{/*fairy */}
                </tr>
                {/* fairy */}
                <tr>
                    <td className={styles.type_fairy}>fairy</td>
                    <td className={styles.tdbranco}>1x</td>{/*normal */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*fire */}
                    <td className={styles.tdbranco}>1x</td>{/*water */}
                    <td className={styles.tdbranco}>1x</td>{/*grass */}
                    <td className={styles.tdbranco}>1x</td>{/*eletric */}
                    <td className={styles.tdbranco}>1x</td>{/*ice */}
                    <td className={styles.tdverde}>2x</td>{/*fighting */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*poison */}
                    <td className={styles.tdbranco}>1x</td>{/*ground */}
                    <td className={styles.tdbranco}>1x</td>{/*flying */}
                    <td className={styles.tdbranco}>1x</td>{/*psychic */}
                    <td className={styles.tdbranco}>1x</td>{/*bug */}
                    <td className={styles.tdbranco}>1x</td>{/*rock */}
                    <td className={styles.tdbranco}>1x</td>{/*ghost */}
                    <td className={styles.tdverde}>2x</td>{/*dragon */}
                    <td className={styles.tdverde}>2x</td>{/*dark */}
                    <td className={styles.tdvermelho}>0.5x</td>{/*steel */}
                    <td className={styles.tdbranco}>1x</td>{/*fairy */}
                </tr>
            </tbody>


        </table>

    </div>
  )
}
