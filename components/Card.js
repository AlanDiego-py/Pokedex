import Image from "next/image"
import Link from "next/link"

import styles from '../styles/Card.module.css'

export default function Card({pokemon}) {

    return (
        <div className={styles.card}>
            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width={150}
                height={150}
                alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h2 className={styles.title}>{pokemon.name}</h2>
            <p>{pokemon.types}</p>
        </div>
    )
}