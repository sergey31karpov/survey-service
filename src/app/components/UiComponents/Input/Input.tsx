import React from 'react';
import {UseFormRegister } from 'react-hook-form';
import style from './Input.module.css';

interface IInput {
    label?: string
    nameField: string
    options: any
    register: UseFormRegister<any>
    errors: any
    placeholder?: string
    autoComplete?: string
    value?: string
}

export const Input: React.FC<IInput> = (props) => {
    const {
        label,
        nameField,
        register,
        options,
        errors,
        placeholder,
        autoComplete,
        value,
    } = props

    const charsCount = value?.length

    return (
        <div>
            <span className={style.title}>
                {label && <label className={style.label}>{label}</label>}
                {charsCount !==0 && <label className={style.label}>{charsCount}</label>}
            </span>
            <input
                {...register(nameField, {...options})}
                className={`${style.input} ${errors ? style.invalid : style.valid}`}
                placeholder={placeholder}
                autoComplete={autoComplete}
            />
            {errors && <div className={style.invalidMessage}>{errors.message}</div>}
        </div>
    )
}
