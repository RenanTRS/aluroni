import { Link } from 'react-router-dom'
import logoImg from 'assets/img/logo.svg'
import style from './Menu.module.scss'

export const Menu = () => {
  const rotas = [{
    label: 'Inicio',
    to: '/'
  },
  {
    label: 'Cardápio',
    to: '/cardapio'
  },
  {
    label: 'Sobre',
    to: '/sobre'
  }]
  return (
    <nav className={style.menu}>
      <img src={logoImg} alt="Aluroni logo" />
      <ul className={style.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={style.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}