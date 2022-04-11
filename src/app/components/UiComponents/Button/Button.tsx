import React from 'react';
import style from './Button.module.css';

interface IButton {
    type: "button" | "submit" | "reset" | undefined
    disabled: boolean
}

export const Button: React.FC<IButton> = (props) => {
    const {children, type, disabled} = props

    return (
        <button disabled={disabled} className={style.button} type={type}>{children}</button>
    )
}
