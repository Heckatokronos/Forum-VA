import { Button, DivMain, Input } from "../../../styled-components"
import tw from "tailwind-styled-components";


export function Retrieval() {
    return (
        <>
            <DivMain>
                <form className="flex flex-col space-y-4 text-center">
                    <b className="text-3xl">
                        Сброс пароля
                    </b>
                    <p className="">
                        Введите <b>имя пользователя Vinyl Alliance</b> или <b>адрес электронной почты</b>, который вы указали при регистрации.
                        Мы отправим вам письмо с именем пользователя и ссылкой для сброса пароля.
                    </p>
                    <Input
                        type="email"
                        placeholder="Электронная почта или имя пользователя"
                        autoComplete="on"
                        className="ml-auto mr-auto"
                    />
                    <Button className="ml-auto mr-auto">
                        Отправить
                    </Button>
                </form>
            </DivMain>
        </>
    )
}