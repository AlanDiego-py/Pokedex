
import styles from "@/styles/Home.module.css";
import Image from "next/image";

//add card
import Card from "../components/Card";

export async function getStaticProps() {
  const maxpoke = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${api}/?limit=${maxpoke}`)
  const data = await res.json()

  //adicionar pokemon no index
  data.results.forEach((item, index)=>{
    item.id = index + 1
  })

  return{
    props:{
      pokemons: data.results,
    }
  }
}

export default function Home({pokemons}) {
  return (
    <>
    <div className={styles.title_container}>
    <h1 className={styles.title}>Poke<span>Next</span></h1>
    <Image 
    src='/images/pokeball.png'
    width={50}
    height={50}
    alt="POKE"
    />
    </div>
    
    <div className={styles.poke_container}>
      {pokemons.map((pokemon)=>(
        <Card pokemon={pokemon} types={pokemon.data}/>
      ))}
    </div>
    
    </>

  )
}