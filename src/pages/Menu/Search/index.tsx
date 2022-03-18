import { Dispatch, SetStateAction } from "react"
import style from './Search.module.scss'
import {CgSearch} from 'react-icons/cg'

interface Props {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}
export const Search = ({search, setSearch}: Props) => {
    return (
        <div className={style.buscador}>
            <input type="text" value={search} onChange={event => setSearch(event.target.value)} />
            <CgSearch size={20} color="#4c4d5e"/>
        </div>
    )
}