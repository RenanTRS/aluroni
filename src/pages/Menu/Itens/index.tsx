import cardapio from './itens.json'
import { Item } from './Item'
import style from './Itens.module.scss'
import { useEffect, useState } from 'react'

interface Props {
    search: string;
    filtro: number | null;
    order: string;
}

export const Itens = ({search, filtro, order}: Props) => {
  const [lista, setLista] = useState(cardapio)

  const testaBusca = (title: string) => {
    const regex = new RegExp(search, 'i') //"i" case insensitive
    return regex.test(title)
  }
  const testaFiltro = (id: number) => {
    if(filtro !== null) return filtro === id
    return true
  }

  const ordenar = (novaLista: typeof cardapio) => {
    switch(order){
    case 'porcao':
      return novaLista.sort((a, b) => (a.size > b.size? 1 : -1))
    case 'qtd-pessoas':
      return novaLista.sort((a, b) => (a.serving > b.serving? 1 : -1))
    case 'preco':
      return novaLista.sort((a, b) => (a.price > b.price? 1 : -1))
    default:
      return novaLista
    }
  }

  useEffect(()=> {
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id))
    setLista(ordenar(novaLista))
  }, [search, filtro, order])

  return (
    <div className={style.itens}>
      {lista.map(item => {
        return (
          <Item key={item.id} {...item} />
        )
      })}
    </div>
  )
}