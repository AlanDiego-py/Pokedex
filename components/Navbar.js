import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image
                src="/images/pokeball.png"
                width={30}
                height={30}
                alt="POKKE"
                />
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/About">SOBRE</Link>
                </li>
            </ul>
        </nav>
    )
}