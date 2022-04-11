import React from 'react';
import {Typography} from "antd";
import {useParams} from "react-router-dom";
import {ROUTES} from "../../../routes";
import style from './SuccessSurveyPage.module.css'
import {SuccessSurveyItem} from "../../components/SuccessSurveyItem/SuccessSurveyItem";
import {PopupLinkCopied} from "../../components/PopupLinkCopied/PopupLinkCopied";

interface ISuccessSurveyPage {

}

export const SuccessSurveyPage: React.FC<ISuccessSurveyPage> = () => {
    const {Title} = Typography

    const {pollHashCode} = useParams()

    const [isCopied, setIsCopied] = React.useState(false)

    const surveyUrl = `${ROUTES.SURVEY}/${pollHashCode}`
    const resultUrl = `${ROUTES.RESULT}/${pollHashCode}`

    return (
        <div className={style.container}>
            <Title className={style.title}>Ваш опрос создан</Title>
            <div className={style.wrapper}>
                <SuccessSurveyItem
                    url={surveyUrl}
                    title='Опрос доступен по уникальной ссылке ниже:'
                    setIsCopied={setIsCopied}
                    isShare
                />
                <SuccessSurveyItem
                    url={resultUrl}
                    title='Результат можно посмотреть тут:'
                    setIsCopied={setIsCopied}
                />
            </div>
            <PopupLinkCopied isShown={isCopied}/>
        </div>
    )
}
