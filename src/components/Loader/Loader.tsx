import React from 'react';
import logoImg from './../../assets/img/load.svg'
const Loader = () =>
        <div className="flex justify-center items-center w-screen h-screen">
            <img src={logoImg} alt="loading"/>
        </div>


export default Loader;