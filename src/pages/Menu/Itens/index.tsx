import cardapio from './itens.json'
import { Item } from './Item'
import style from './Itens.module.scss'
import { useEffect, useState } from 'react';

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

    useEffect(()=> {
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id))
        setLista(novaLista)
    }, [search, filtro])

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