import React from 'react';
import Logo from "../Logo/Logo";
import ListBurger from "../ListBurger/ListBurger";

const Footer = () => {
    return (
        <footer className="py-[52px] text-white bg-neutral-900 mt-10">
            <div className="container mx-auto flex justify-between">
                <Logo/>
                <ListBurger/>
                <div>Разработал <a href="evgen-prog.ru" className=" hover:text-slate-300 ">Evgen</a></div>
            </div>
        </footer>
    );
};

export default Footer;