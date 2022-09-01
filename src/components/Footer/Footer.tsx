import React from 'react';
import s from './Footer.module.scss'
import Logo from "../Logo/Logo";
import ListBurger from "../ListBurger/ListBurger";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`${s.footer__container} container`}>
                <Logo/>
                <div className={s.footer__section}>
                    <ListBurger/>
                </div>
                <div className={s.footer__dev}>
                    <div className={s.footer__item}>
                        <div>Разработал <a href="evgen-prog.ru">Evgen</a></div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;