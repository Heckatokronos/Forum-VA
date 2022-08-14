import { Link } from "react-router-dom";
import form from '../../../../images/auth-form.png'
import {
    Button,
    DivMain,
    Input
} from "../../../styled-components"

export function Login() {
    return (
        <>
            <DivMain>
                <div className="relative">
                    <div className="inline-block w-auto ml-auto mr-auto">
                        <div className="mb-10 inline-block m-3 ml-auto">
                            <p className="font-bold text-3xl w-[35rem]">
                                Вход в аккаунт
                            </p>
                        </div>
                        <div>
                            <form className="flex flex-col space-y-4">
                                <b> Логин или электронная почта </b>
                                <Input
                                    type="email"
                                    placeholder="Введите ваш логин или электронную почту"
                                    autoComplete="On"
                                />
                                <b>
                                    Пароль
                                </b>
                                <Input
                                    type="password"
                                    placeholder="Введите ваш пароль"
                                    autoComplete="On"
                                />
                                <p className="ml-64">
                                    <Link to='/retrieval'>Забыли пароль</Link>
                                </p>
                                <Button
                                    type="submit"
                                >
                                    Войти
                                </Button>
                            </form>
                            <div className="flex space-x-2">

                                <p className="mt-2">
                                    Ещё не зарегестрированны?
                                </p>
                                <Link to='/register'>
                                    <Button
                                        type="button"
                                    >
                                        Создать аккаунт
                                    </Button>
                                </Link>
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