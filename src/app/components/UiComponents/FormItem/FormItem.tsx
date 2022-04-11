import React from 'react';
import style from './FormItem.module.css';

interface IFormItem {
    label?: string
}

export const FormItem: React.FC<IFormItem> = (props) => {
    const {label, children} = props

    return (
        <div className={style.item}>
            {label && <label className={style.label}>{label}</label>}
            {children}
        </div>
    )
}
