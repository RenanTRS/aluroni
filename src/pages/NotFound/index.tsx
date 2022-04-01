import style from './NotFound.module.scss'
import styleTema from 'style/Tema.module.scss'
import notFoundImg from 'assets/img/not_found.svg'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className={classNames({
      [style.container]: true,
      [styleTema.container]: true
    })}>
      <div className={style.voltar}>
        <button onClick={() => {
          navigate(-1) //Volta 1 no histórico
        }}>
          {'< Voltar'}
        </button>
      </div>
      <img src={notFoundImg} alt="Not Found" />
    </div>
  )
}