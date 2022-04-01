import style from './PaginaPadrao.module.scss'
import styleTema from 'style/Tema.module.scss'

import {Outlet} from 'react-router-dom'

export const PaginaPadrao = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={styleTema.container}>
        <Outlet />
      </div>
    </>
  )
}