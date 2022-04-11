import React from 'react';
import style from './Header.module.css'
import {UserBlockHeader} from "../UserBlockHeader/UserBlockHeader";
import { NavLink } from 'react-router-dom';
import {ROUTES} from "../../../routes";

interface IHeader {

}

export const Header: React.FC<IHeader> = () => {
    return (
        <header className={style.header}>
            <NavLink to={ROUTES.MAIN_PAGE}>Logo</NavLink>
            <div className={style.userBlock}>
                <UserBlockHeader />
            </div>
        </header>
    )
}
