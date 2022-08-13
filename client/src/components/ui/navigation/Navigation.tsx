import { Link } from "react-router-dom";

export function Navigation() {

    return (
        <nav>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <span className="font-bold bg:dark-text-white ">
                        Vinyl Alliance
                    </span>
                    <button
                        type='button'
                        className="
                        bg-orange-400
                        rounded
                        p-2
                        text-white
                        hover:text-black
                        "
                    >
                        <Link to='register'>Регистрация</Link>
                    </button>
                    <button
                        type="button"
                        className="
                      bg-gray-200
                        p-2
                        rounded
                      text-blue-400
                        hover:text-black
                   "
                    >
                        <Link to='login'>Вход</Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}