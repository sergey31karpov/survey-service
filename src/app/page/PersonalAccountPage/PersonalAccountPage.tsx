import React from 'react';
import { UserBlock } from '../../components/UserBlock/UserBlock';
import style from './PersonalAccountPage.module.css'
import {IUser} from "../../../typings/user";

interface IPersonalAccountPage {
    user: IUser
}

export const PersonalAccountPage: React.FC<IPersonalAccountPage> = (props) => {
    const {user} = props

    return (
        <div className={style.container}>
            <UserBlock user={user}/>
        </div>
    )
}
