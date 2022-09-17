import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const links = [
    {to: '/', name: 'Главная'},
    {to: '/', name: 'Фильмы'},
    {to: '/', name: 'Сериалы'},
    {to: '/',name: 'Мультфильмы'},
    {to: '/favorites',name: 'Избранное'}
]

const ListBurger: FC<any> = ({setClick, burger}) => <>
    <ul className={`flex  ${burger && 'flex-col'}`}>
        {links.map((e, idx) =>
            <li key={idx} className="mx-[12px] text-lg font-medium hover:text-slate-300 ">
                <NavLink onClick={() => setClick(false)} to={e.to}>{e.name} </NavLink></li>)}
    </ul>
</>

export default ListBurger;