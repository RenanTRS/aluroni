import { Dispatch, SetStateAction } from 'react';
import filtros from './filtros.json'
import style from './Filtros.module.scss'
import classNames from 'classnames'

type IOpcao = typeof filtros[0]

interface Props {
    filtro: number | null;
    setFiltro: Dispatch<SetStateAction<number | null>>
}

export const Filtros = ({filtro, setFiltro}: Props) => {
    
    const selecionarFiltro = (opcao: IOpcao) => {
        if (filtro === opcao.id) return setFiltro(null)
        setFiltro(opcao.id)
    }
    
    return (
        <div className={style.filtros}>
            {filtros?.map((opcao) => {
                return(
                    <button className={classNames({
                        [style.filtros__filtro]: true,
                        [style["filtros__filtro--ativo"]]: filtro === opcao.id
                    })} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
                        {opcao.label}
                    </button>
                )
            })
            }
        </div>
    )
}