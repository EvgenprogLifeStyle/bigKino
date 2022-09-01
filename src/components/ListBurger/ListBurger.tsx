import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import s from './ListBurger.module.scss'
const ListBurger: FC<any> = ({setClick}) => <>
    <ul className={s.burger__list}>
        <li><NavLink onClick={() => setClick(false)} to="/">Главная </NavLink></li>
        <li><NavLink onClick={() => setClick(false)} to="/">Фильмы </NavLink></li>
        <li><NavLink onClick={() => setClick(false)} to="/">Сериалы </NavLink></li>
        <li><NavLink onClick={() => setClick(false)} to="/">Мультфильмы </NavLink></li>
        <li><NavLink onClick={() => setClick(false)} to="/favorites">Избранное </NavLink></li>
    </ul>
</>

export default ListBurger;