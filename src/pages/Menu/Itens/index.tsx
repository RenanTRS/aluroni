import cardapio from './itens.json'
import { Item } from './Item'
import style from './Itens.module.scss'

export const Itens = () => {
    return (
        <div className={style.itens}>
            {cardapio?.map(item => {
                return (
                    <Item key={item.id} {...item} />
                )
            })}
        </div>
    )
}