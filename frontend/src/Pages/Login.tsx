import React from "react";
import { Navigation } from "../Components/Navbar";
import { LoginForm } from "../Components/LoginForm";
import background from "../Pictures/background-sign-pic.jpeg";

export const Login: React.FC = () => {



    return (
        <div style={{
            backgroundImage: `url(${background})`,
            width: '',
            height: '969px'
        }}>
            <Navigation />
            <LoginForm />
        </div>
    );
}

