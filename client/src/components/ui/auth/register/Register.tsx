import { Link } from "react-router-dom";
import form from '../../../../images/auth-form.png'
import {
    Button,
    DivMain,
    Input
} from "../../../styled-components";

export function Register() {
    return (
        <>
            <DivMain>
                <div className="relative">
                    <div className="inline-block w-auto ml-auto mr-auto">
                        <div className="mb-4 inline-block m-3 ml-auto">
                            <p className="font-bold text-3xl w-[35rem]">
                                Присоедняйтесь к сообществу Vinyl Alliance
                            </p>
                        </div>
                        <div>
                            <form className="flex flex-col space-y-4">
                                <b> Логин </b>
                                <Input
                                    type="login"
                                    placeholder="Как мы себя назовем?"
                                    autoComplete='On'
                                />
                                <b> Электронная почта </b>
                                <Input
                                    type="email"
                                    placeholder="Введите вашу электронную почту"
                                    autoComplete='On'
                                />
                                <b> Пароль </b>
                                <Input
                                    type="password"
                                    placeholder="Введите ваш пароль"
                                    autoComplete='On'
                                />
                                <Input
                                    type="password"
                                    placeholder="Повторите ваш пароль"
                                    autoComplete='On'
                                />
                                <Button type="submit" > Присоединяйтесь </Button>
                            </form>
                            <div className='flex space-x-2'>
                                <p className="mt-2">
                                    Уже зарегестрированны?
                                </p>
                                <Button>
                                    <Link to="/login">Войти</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="inline-block w-96 m-auto ml-auto mr-auto">
                        <img src={form} />
                    </div>
                </div>
            </DivMain>
        </>
    )
}