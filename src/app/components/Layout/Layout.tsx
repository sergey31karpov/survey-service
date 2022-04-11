import React from 'react';
import {Header} from "../Header/Header";
import {Route, Routes} from 'react-router-dom';
import {PersonalAccountPage} from "../../page/PersonalAccountPage/PersonalAccountPage";
import {AuthPage} from "../../page/AuthPage/AuthPage";
import {IUser} from "../../../typings/user";
import {MainPage} from "../../page/MainPage/MainPage";
import {CreateSurveyPage} from "../../page/CreateSurveyPage/CreateSurveyPage";
import {SuccessSurveyPage} from "../../page/SuccessSurveyPage/SuccessSurveyPage";
import { ROUTES } from '../../../routes';
import {SurveyPage} from "../../page/SurveyPage/SurveyPage";
import {ResultsSurveyPage} from "../../page/ResultsSurveyPage/ResultsSurveyPage";

interface ILayout {
    user: IUser
}

export const Layout: React.FC<ILayout> = (props) => {
    const {user} = props

    return (
        <>
            <Header/>
            <Routes>
                <Route path={ROUTES.CREATE} element={<CreateSurveyPage />}/>
                <Route path={`${ROUTES.SUCCESS}/:pollHashCode`} element={<SuccessSurveyPage />}/>
                <Route path={`${ROUTES.SURVEY}/:pollHashCode`} element={<SurveyPage />}/>
                <Route path={`${ROUTES.RESULT}/:pollHashCode`} element={<ResultsSurveyPage />}/>
                <Route path={ROUTES.PERSONAL_ACCOUNT} element={<PersonalAccountPage user={user}/>}/>
                <Route path={ROUTES.SETTINGS} element={<div>Настройки</div>}/>
                <Route path={ROUTES.AUTH} element={<AuthPage/>}/>
                <Route path={ROUTES.MAIN_PAGE} element={<MainPage />}/>
            </Routes>
        </>
    )
}
