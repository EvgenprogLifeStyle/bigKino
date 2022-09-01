import React, {FC} from 'react';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ContainerPages: FC<any> = ({children}) =>
    <>
        <Header/>
        {children}
        <Footer/>
    </>
export default ContainerPages;
