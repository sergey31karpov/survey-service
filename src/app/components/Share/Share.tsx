import React from 'react';
import style from './Share.module.css'

interface IShare {

}

export const Share: React.FC<IShare> = () => {
    return (
        <div className={style.container}>
            Поделиться:
            <div className="ya-share2" data-curtain="" data-shape="round"
                 data-services="vkontakte,facebook,telegram,twitter,reddit"/>
        </div>
    )
}
