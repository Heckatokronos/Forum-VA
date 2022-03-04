import React from "react";
import { Button } from "react-bootstrap";
import { styled } from "@linaria/react";
import background from "./Pictures/background-sign-pic.jpeg";

const RegisterForm: React.FC = () => {



    return (
        <StyledDiv className="card" style={{
            backgroundImage: `url(${background})`,
            width: '100%',
            height: '969px'
          }}>
            <StyledH4 className="text">Присоединяйтесь к Vinyl Alliance</StyledH4>
            <StyledImg src="https://images.pexels.com/photos/3693108/pexels-photo-3693108.jpeg" />
            <StyledLabelLogin htmlFor="title" className="form"><b>Логин</b></StyledLabelLogin>
            <StyledInputLogin className="form" type="login" id="title" placeholder="Введите ваш Логин" />
            <StyledLabelEmail htmlFor="title" className="form"><b>Email</b></StyledLabelEmail>
            <StyledInputEmail className="form" type="text" id="title" placeholder="Введите ваш Email адрес" />
            <StyledLabelPassword htmlFor="title" className="form">Пароль</StyledLabelPassword>
            <StyledInputPassword className="form" type="password" id="title" placeholder="Введите ваш пароль" />
            <StyledInputPasswordRepeat className="input" type="password" id="title" placeholder="Повторите ваш пароль" />
            <Button
                variant="dark"
                style={{
                    width: 150,
                    height: 40,
                    marginLeft: 93,
                    marginTop: 611
                }}
            >Присоединиться</Button>
        </StyledDiv>
    );
};


export default RegisterForm;

// Styled Classes + etc

const StyledDiv = styled.div`
    position: absolute;
    width: 1100px;
    height: 780px;
    left: 445px;
    margin-top: 5rem;
    background: linear-gradient(116.52deg, rgba(255, 255, 255, 0.22) -0.3%, rgba(255, 255, 255, 0.2) 81.34%);
    backdrop-filter: blur(20px);
    border-radius: 25px;
`

const StyledH4 = styled.h4`
    position: absolute;
    width: 404px;
    height: 125px;
    left: 71px;
    top: 96px;

    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 68px;

    color: #FFFFFF;
`

// Styled Labels

const StyledLabelLogin = styled.label`
    position: absolute;
    width: 190px;
    height: 21px;
    left: 93px;
    top: 274px;

    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    color: #FFFFFF;
`

const StyledLabelEmail = styled.label`
    position: absolute;
    width: 190px;
    height: 21px;
    left: 93px;
    top: 359px; 

    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    color: #FFFFFF;
`
const StyledLabelPassword = styled.label`
    position: absolute;
    width: 190px;
    height: 21px;
    margin-left: 93px;
    margin-top: 449px;

    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    color: #FFFFFF;
`
// Styled Inputs

const StyledInputEmail = styled.input`
    position: absolute;
    width: 349px;
    height: 36px;
    margin-left: 93px;
    margin-top: 394px;

    background: linear-gradient(92.01deg, rgba(255, 255, 255, 0.02) -8.99%, rgba(255, 255, 255, 0.14) 101.74%);
    backdrop-filter: blur(40px);
    border-radius: 5px;
`
const StyledInputPassword = styled.input`
    position: absolute;
    width: 349px;
    height: 36px;
    left: 93px;
    top: 484px;

    background: linear-gradient(92.01deg, rgba(255, 255, 255, 0.02) -8.99%, rgba(255, 255, 255, 0.14) 101.74%);
    backdrop-filter: blur(40px);
    border-radius: 5px;
`
const StyledInputPasswordRepeat = styled.input`
    position: absolute;
    width: 349px;
    height: 36px;
    left: 93px;
    top: 543px;

    background: linear-gradient(92.01deg, rgba(255, 255, 255, 0.02) -8.99%, rgba(255, 255, 255, 0.14) 101.74%);
    backdrop-filter: blur(40px);
    border-radius: 5px;
`
const StyledInputLogin = styled.input`
    position: absolute;
    width: 349px;
    height: 36px;
    left: 93px;
    top: 309px;

    background: linear-gradient(92.01deg, rgba(255, 255, 255, 0.02) -8.99%, rgba(255, 255, 255, 0.14) 101.74%);
    backdrop-filter: blur(40px);
    border-radius: 5px;
`

// Styled Img

const StyledImg = styled.img`
    position: absolute;
    width: 480px;
    height: 705px;
    left: 525px;
    top: 35px;
    
    mix-blend-mode: luminosity;
    border-radius: 25px;
`