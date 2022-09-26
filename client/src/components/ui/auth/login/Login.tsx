<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import axios from "axios";
import { SetStateAction, useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { $host } from "../../../../api/api";
>>>>>>> butt
import form from '../../../../images/auth-form.png'
import {
    Button,
    DivMain,
    Input
} from "../../../styled-components"

<<<<<<< HEAD
export function Login() {
=======

export function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useState(null)
    const { mutate, isLoading } = useMutation(
        'login',
        () =>
            axios.post(
                `${$host}/users/sign_in`,
                { email, password },
                {
                    headers: {
                        'Content-Type': 'appliction/json'
                    },
                }
            ),
        {
            onSuccess: ({ data }) => {
                setUser(data.user)
            }
        }
    )

>>>>>>> butt
    return (
        <>
            <DivMain>
                <div className="relative">
<<<<<<< HEAD
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
=======
                    {!user ? (
                        <>
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
                                            value={email}
                                            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
                                        />
                                        <b>
                                            Пароль
                                        </b>
                                        <Input
                                            type="password"
                                            placeholder="Введите ваш пароль"
                                            autoComplete="On"
                                            value={password}
                                            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}
                                        />
                                        <p className="ml-64">
                                            <Link to='/retrieval'>Забыли пароль</Link>
                                        </p>
                                        <Button
                                            type="submit"
                                            onClick={() => mutate()}
                                            disabled={isLoading}
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
                        </>) : ( <Link to="/posts"/> )}

>>>>>>> butt
                </div>
            </DivMain>
        </>
    )
}