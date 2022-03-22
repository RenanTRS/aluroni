import style from './Ordenador.module.scss'
import opcoes from './opcoes.json'

export const Ordenador = () => {
    return (
        <button className={style.ordenador}>
            <span>Ordenar Por</span>
            <div className={style.ordenador__options}>
                {
                    opcoes.map(opcao => {
                        return (
                            <div className={style.ordenador__option} key={opcao.value}>
                                {opcao.nome}
                            </div>
                        )
                    })
                }
            </div>
        </button>
    )
}