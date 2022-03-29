import styles from './Menu.module.scss'
//import logoImg from '../../assets/img/logo.svg'
import logoImg from 'assets/img/logo.svg'
import { Search } from './Search'
import { useState } from 'react'
import { Filtros } from './Filtros'
import { Ordenador } from './Ordenador'
import { Itens } from './Itens'

export const Menu = () => {
    const [search, setSearch] = useState('')
    const [filtro, setFiltro] = useState<number | null>(null)
    const [order, setOrder] = useState("")
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
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                    <Ordenador order={order} setOrder={setOrder} />
                </div>
                <Itens search={search} filtro={filtro} order={order}/>
            </section>
        </main>
    )
}