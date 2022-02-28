import React, { useRef } from "react";

export const SignForm: React.FC = () => {

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(ref.current!.value)
            ref.current!.value = ''
        }
    }
    return (
        <div 
        className="card card" >
            <h4 className="text login-text">Авторизация</h4>
            <label htmlFor="title" className="form login-id-text"><b>Email</b></label>
            <input className="form login-input" type="text" id="title" placeholder="Введите ваш email адрес"/>
            <label htmlFor="title" className="form password-text"><b>Пароль</b></label>
            <input
            className="form password-input"
            ref={ ref } 
            onKeyPress={keyPressHandler}
            type="password" 
            id="title" 
            placeholder="Введите ваш пароль"
            />
            <label htmlFor="title" className="form forgotten-password-text" ><b>Забыли пароль</b></label>
            <img src="https://images.pexels.com/photos/3693108/pexels-photo-3693108.jpeg?/" className='picture-login-form' />
            <button className="btn btn-outline-dark button-login-form" > Войти </button>
            <text className="register-account-text">Еще не зарегестрированны?</text>
            <button className="btn btn-outline-dark button-register-form">Создать аккаунт</button>
        </div>
    )
} 