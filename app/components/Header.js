import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
        <Link href='/'>accueil</Link>
        <Link href='/hero'>hero</Link>
        </div>
    )
}