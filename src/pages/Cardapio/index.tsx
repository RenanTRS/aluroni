import styles from './Cardapio.module.scss'
import { Search } from './Search'
import { useState } from 'react'
import { Filtros } from './Filtros'
import { Ordenador } from './Ordenador'
import { Itens } from './Itens'


export const Cardapio = () => {
  const [search, setSearch] = useState('')
  const [filtro, setFiltro] = useState<number | null>(null)
  const [order, setOrder] = useState('')
  
  return (
    <section className={styles.cardapio}>
      <h3 className={styles.cardapio__titulo}>Cardápio</h3>
      <Search search={search} setSearch={setSearch}/>
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador order={order} setOrder={setOrder} />
      </div>
      <Itens search={search} filtro={filtro} order={order}/>
    </section>
  )
}