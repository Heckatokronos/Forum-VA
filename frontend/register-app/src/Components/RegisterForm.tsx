import React, { useRef } from 'react';

export const RegisterForm: React.FC = () => {
    
    return (
        <div className="card card">
            <h4 className="text-register"><b>Присоединяйтесь к сообществу Vinyl Alliance</b></h4>
            <label htmlFor="title" className="form login-text"><b>Логин</b></label>
            <input className="form login-input-form " type="text" id="title" placeholder="Как вы представитесь?"/>
            <label htmlFor="title" className="form email-text"><b>Email</b></label>
            <input className="form email-input-form" type="text" id="title" placeholder="Введите ваш email адрес"/>
            <label htmlFor="title" className="form password-text"><b>Пароль</b></label>
            <input className="form password-input-form" type="password" placeholder="Введите ваш пароль" />
            <input className="form password-again-input-form" type="password" placeholder="Повторите ваш пароль" />
            <img src="https://images.pexels.com/photos/3693108/pexels-photo-3693108.jpeg?/" className='picture-register-form' />
            <button className="btn btn-outline-dark button-form" style={{ width: '160px', height: '35px' }}> Присоединиться </button>
        </div>
    )
}