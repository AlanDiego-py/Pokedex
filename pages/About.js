import Image from "next/image";
import styles from '../styles/About.module.css'

export default function About() {

    return (
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at, error id cupiditate explicabo consequatur ipsam quod commodi sequi? Consectetur dolor nisi dolorum, perferendis aspernatur a nesciunt consequatur molestias laborum.</p>
            <Image 
            src="/images/foto.png"
            width={300}
            height={300}
            alt="foto"
            />
        </div>
        
    )
}