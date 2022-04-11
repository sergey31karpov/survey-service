import React from 'react';
import style from './PopupLinkCopied.module.css'

interface IPopupLinkCopied {
    isShown: boolean
}

export const PopupLinkCopied: React.FC<IPopupLinkCopied> = ({isShown}) => (
    <div className={`${style.copiedMessage} ${isShown ? style.display : style.notDisplay}`}>Ссылка скопирована</div>
)
