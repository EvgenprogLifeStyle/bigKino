import React from 'react';
import {NavLink} from "react-router-dom";
import logoSrc from "../../assets/img/logo1.svg";
import s from './Logo.module.scss'
const Logo = () =>  <NavLink to='/' className={s.logo}>
    <img src={logoSrc} alt='BigKino'/>
</NavLink>

export default Logo;