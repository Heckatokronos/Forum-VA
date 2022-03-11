import React from "react";
import * as Yup from 'yup';
import { Button } from "react-bootstrap";
import { styled } from "@linaria/react";
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps, validateYupSchema } from 'formik';


interface RegisterFormValues {
    login: string,
    email: string,
    password: string,
}

export const RegisterForm: React.FC = () => {



    return (

        <StyledDiv>
            <StyledH4 className="text">Присоединяйтесь к Vinyl Alliance</StyledH4>
            <StyledImg src="https://images.pexels.com/photos/3693108/pexels-photo-3693108.jpeg" />
            <Formik
                initialValues={{
                    login: '',
                    email: '',
                    password: '',
                }}
                // validate={values => {
                //     const errors = {};
                //     if (!values.email) {
                //         errors.email = 'Required';
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //     ) {
                //         errors.email = 'Invalid email address';
                //     }
                //     return errors;
                // }}
                validateOnBlur
                onSubmit={(values) => { console.log(values) }}
            >
                <Form>
                    <StyledLabel htmlFor="login" className="form" style={{ marginTop: 274 }}><b>Логин</b></StyledLabel>
                    <StyledInput className="form" type="login" id="title" placeholder="Введите ваш Логин" style={{ marginTop: 309 }} />
                    <StyledLabel htmlFor="email" className="form" style={{ marginTop: 359 }}><b>Email</b></StyledLabel>
                    <StyledInput name="email" type="email" placeholder="Введите ваш Email адрес" style={{ marginTop: 394 }} />
                    <StyledLabel htmlFor="password" className="form" style={{ marginTop: 449 }}>Пароль</StyledLabel>
                    <StyledInput className="form" type="password" id="title" placeholder="Введите ваш пароль" style={{ marginTop: 484 }} />
                    <StyledInput className="input" type="password" id="title" placeholder="Повторите ваш пароль" style={{ marginTop: 543 }} />
                    <Button
                        variant="dark"
                        style={{
                            width: 150,
                            height: 40,
                            marginLeft: 93,
                            marginTop: 611
                        }}
                    >Присоединиться</Button></Form>
            </Formik>
        </StyledDiv>
    );
};


// Styled Classes + etc

const StyledDiv = styled.div`
    position: sticky;
    width: 1080px;
    height: 780px;
    margin-left: 25%;
    margin-top: 5%;
    background: linear-gradient(116.52deg, rgba(255, 255, 255, 0.22) -0.3%, rgba(255, 255, 255, 0.2) 81.34%);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    border-color: 4px rgba(255, 255, 255, 0.76),rgba(255, 255, 255, 0.48);
`

const StyledH4 = styled.h4`
    position: absolute;
    width: 404px;
    height: 125px;
    margin-left: 71px;
    margin-top: 96px;

    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 68px;

    color: #FFFFFF;
`

// Styled Labels

const StyledLabel = styled.label`
    position: absolute;
    width: 190px;
    height: 21px;
    margin-left: 93px;

    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    color: #FFFFFF;
`

// Styled Inputs

const StyledInput = styled.input`
    position: absolute;
    width: 349px;
    height: 36px;
    margin-left: 93px;

    background: linear-gradient(92.01deg, rgba(255, 255, 255, 0.02) -8.99%, rgba(255, 255, 255, 0.14) 101.74%);
    backdrop-filter: blur(40px);
    border-radius: 10px;
`

// Styled Img

const StyledImg = styled.img`
    position: absolute;
    width: 480px;
    height: 705px;
    margin-left: 530px;
    margin-top: 35px;
    
    mix-blend-mode: luminosity;
    border-radius: 25px;
`