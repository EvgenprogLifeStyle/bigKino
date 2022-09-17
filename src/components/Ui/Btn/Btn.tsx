import React, {FC} from 'react';
import s from './Btn.module.scss'

const Btn: FC<any> = ({children}) =>
    <button className={s.btn}>{children}</button>


export default Btn;