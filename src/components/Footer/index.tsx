import style from './Footer.module.scss'
import logo from 'assets/img/logo.svg'

export const Footer = () => {
  return(
    <footer className={style.footer}>
      <img src={logo} alt="" />
    </footer>
  )
}