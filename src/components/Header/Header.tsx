import React, {useState} from "react";
import logoSrc from "./../../assets/img/logo1.svg";
import s from "./Header.module.scss";
import ListBurger from "../ListBurger/ListBurger";
import Logo from "../Logo/Logo";

const Header = () => {
    const [openBurger, setOpenBurger] = useState<boolean>(false);
    const openB = () => openBurger ? setOpenBurger(false) : setOpenBurger(true)


    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <div
                    className={`${s.burger} ${openBurger && s.active}`}>
                    <button
                        className={s.burger__btn}
                        onClick={openB}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                   <Logo/>
                    <div className={s.burger__body}>
                        <ListBurger setClick={setOpenBurger}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
