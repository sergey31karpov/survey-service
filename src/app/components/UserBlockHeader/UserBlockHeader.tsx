import React from 'react';
import style from './UserBlockHeader.module.css'
import defaultAvatar from '../../../assets/icon/defaultAvatar.png'
import {Dropdown, Menu, Typography} from "antd";
import {USER_MENU} from "../../../utils/constants";
import {NavLink} from "react-router-dom";

interface IUserBlock {

}

export const UserBlockHeader: React.FC<IUserBlock> = () => {

    const { Link } = Typography

    const menu = (
        <Menu>
            {USER_MENU.map((item) => (
                <React.Fragment key={`${Math.random().toString(36)}-${item.label}`}>
                    <Menu.Item>
                        <NavLink to={item.route}>
                            {item.label}
                        </NavLink>
                    </Menu.Item>
                </React.Fragment>
            ))}
        </Menu>
    )

    return (
        <>
            <img className={style.avatar} src={defaultAvatar} alt="avatar"/>
            <div onClick={event => event.stopPropagation()}>
                <Dropdown overlay={menu} trigger={['click']}>
                    <Link className={style.userName} onClick={(event: any) => {
                        event.stopPropagation();
                    }}>
                        Сергей Карпов
                    </Link>
                </Dropdown>
            </div>
        </>
    )
}
