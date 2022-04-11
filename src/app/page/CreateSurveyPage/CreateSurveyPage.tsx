import React from 'react';
import style from './CreateSurveyPage.module.css';
import {CreateSurveyForm} from "../../components/CreateSurvey/CreateSurveyForm/CreateSurveyForm";

interface ICreateSurveyPage {

}

export const CreateSurveyPage: React.FC<ICreateSurveyPage> = () => {
    return (
        <div className={style.container}>
            <CreateSurveyForm/>
        </div>
    )
}
