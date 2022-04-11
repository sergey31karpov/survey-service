import React from 'react';
import style from './UserBlock.module.css'
import defaultAvatar from '../../../assets/icon/defaultAvatar.png'
import {IUser} from "../../../typings/user";

interface IUserBlock {
    user: IUser
}

export const UserBlock: React.FC<IUserBlock> = (props) => {
    const {user} = props

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <img className={style.avatar} src={user.avatar ? user.avatar : defaultAvatar} alt="avatar"/>
                <div>
                    Имя: {`${user.firstName} ${user.lastName}`}
                </div>
                <div>
                    Пол: {user.gender}
                </div>
                <div>
                    Возраст: {user.age}
                </div>
                <div>
                    Страна: {user.country}
                </div>
            </div>
        </div>
    )
}
