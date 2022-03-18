import styles from './Menu.module.scss'
import logoImg from '../../assets/img/logo.svg'
import { Search } from './Search'
import { useState } from 'react'

export const Menu = () => {
    const [search, setSearch] = useState('')
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logoImg} alt="Aluroni logo" />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>A casa do código e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Search search={search} setSearch={setSearch}/>
            </section>
        </main>
    )
}