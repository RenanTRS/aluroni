import style from './Item.module.scss'
import { Prato } from 'types/Prato'
import { TagsPratos } from 'components/TagsPratos'

export const Item = (props: Prato) => {
  const {title, description, photo} = props
  return (
    <div className={style.item}>
      <div className={style.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPratos {...props} />
      </div>
    </div>
  )
}