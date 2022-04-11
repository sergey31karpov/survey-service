import React from 'react';
import {Tooltip} from "antd";
import {NavLink} from "react-router-dom";
import {CopyOutlined} from '@ant-design/icons/lib';
import style from './SuccessSurveyItem.module.css'
import {Share} from "../Share/Share";

interface ISuccessSurveyItem {
    title: string
    url: string
    setIsCopied: (isCopied: boolean) => void
    isShare?: boolean
}

export const SuccessSurveyItem: React.FC<ISuccessSurveyItem> = (props) => {
    const {url, title, setIsCopied, isShare} = props

    const copiedUrl = (url: string) => {
        navigator.clipboard.writeText(`https://opros.ru${url}`)
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 5000)
    }

    const copiedUrlHandler = () => copiedUrl(url)

    return (
        <div className={style.container}>
            <div className={style.item}>
                <div>{title}</div>
                <NavLink target='_blank' to={url}>Перейти</NavLink>
                <Tooltip placement="right" title='Скопировать ссылку' arrowPointAtCenter>
                    <CopyOutlined
                        className={style.copy}
                        onClick={copiedUrlHandler}
                    />
                </Tooltip>
                {isShare && <Share />}
            </div>
        </div>
    )
}
