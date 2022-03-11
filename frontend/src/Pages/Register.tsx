import React from "react";
import { Navigation } from "../Components/Navbar";
import { RegisterForm } from "../Components/RegisterForm";
import background from "../Pictures/background-sign-pic.jpeg";

export const Register: React.FC = () => {



    return (
        <div style={{
            backgroundImage: `url(${background})`,
            width: '',
            height: '969px'
        }}>
            <Navigation />
            <RegisterForm />
        </div>
    );
}

