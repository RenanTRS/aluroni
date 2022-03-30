import style from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import { Dispatch, SetStateAction, useState } from 'react'
import classNames from 'classnames'
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

interface Props {
    order?: string;
    setOrder?: any;
}

export const Ordenador = ({order, setOrder}:Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const nameOrder = order && opcoes.find(opcao => opcao.value === order)?.nome

  return (
    <button className={ classNames({[style.ordenador]:true, [style['ordenador--ativo']]: order != ''})} onClick={() => setOpen(!open)} onBlur={() => setOpen(false)} >
      <span>{ nameOrder || 'Ordenar Por'}</span>
      {open? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div className={classNames({
        [style.ordenador__options]: true,
        [style['ordenador__options--ativo']]: open
      })}>
        {
          opcoes.map(opcao => {
            return (
              <div 
                className={style.ordenador__option} 
                key={opcao.value} 
                onClick={() => setOrder(opcao.value)} 
              >
                {opcao.nome}
              </div>
            )
          })
        }
      </div>
    </button>
  )
}