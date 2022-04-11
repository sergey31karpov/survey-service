import React from 'react';
import style from './MainPage.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../routes';

interface IMainPage {

}

export const MainPage: React.FC<IMainPage> = () => {
    return (
        <div className={style.container}>
            <NavLink to={ROUTES.CREATE} className={style.createLink}>
                Создать опрос
            </NavLink>
        </div>
    )
}
