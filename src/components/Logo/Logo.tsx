import React from 'react';
import {NavLink} from "react-router-dom";
import logoSrc from "../../assets/img/logo1.svg";

const Logo = () => <NavLink to='/' className="inline-flex relative z-2">
    <img className="max-w-[100px]" src={logoSrc} alt='BigKino'/>
</NavLink>

export default Logo;