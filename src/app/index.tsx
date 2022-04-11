import {ConfigProvider} from 'antd';
import React from 'react';
import ruRu from 'antd/lib/locale/ru_RU';
import './index.css';
import {Layout} from "./components/Layout/Layout";
import {AuthPage} from "./page/AuthPage/AuthPage";
import 'antd/dist/antd.css';
import {IUser} from "../typings/user";

interface IApp {

}

const user: IUser = {
    firstName: 'Сергей',
    lastName: 'Карпов',
    avatar: null,
    gender: 'Мужской',
    age: 25,
    country: 'Россия',
    isAuth: true,
}

export const App: React.FC<IApp> = () => {
    return (
            <ConfigProvider locale={ruRu}>
                {/*<Provider store={}>*/}
                {user.isAuth ? <Layout user={user}/> : <AuthPage/>}
                {/*</Provider>*/}
            </ConfigProvider>
    )
}
