import React from 'react';
import style from './Form.module.css';

interface IForm {
    onSubmit: () => void
}

export const Form: React.FC<IForm> = (props) => {
    const {onSubmit, children} = props

    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}
