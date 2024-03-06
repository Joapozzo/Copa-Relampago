import React from 'react'
import { LoginContainerStyled, LoginWrapperUp, LoginWrapperDown, LoginDataContainer, LoginDataWrapper, LoginDataInputs, LoginDataPassword } from "./LoginStyles"
import IsotipoCR from "/Logos/CR-Logo.png"
import Button from '../../components/UI/Button/Button'
import { NavLink } from 'react-router-dom'
import Input from '../../components/UI/Input/Input'
import { HiKey, HiUser } from 'react-icons/hi2'
import InputPassword from '../../components/UI/Input/InputPassword'

const Login = () => {
    return (
        <LoginContainerStyled>
            <LoginWrapperUp>
                <img src={IsotipoCR} alt="" srcset="" />
            </LoginWrapperUp>
            <LoginWrapperDown>
                <LoginDataContainer>
                    <LoginDataWrapper>
                        <h1>¡Bienvenido!</h1>
                        <LoginDataInputs>
                            <Input placeholder='DNI'>
                                <HiUser/>
                            </Input>
                            <InputPassword placeholder='Contraseña'>
                                <HiKey/>
                            </InputPassword>
                        </LoginDataInputs>
                        <LoginDataPassword>
                            <NavLink>¿Olvidaste tu contraseña?</NavLink>
                        </LoginDataPassword>
                    </LoginDataWrapper>
                    <Button to={'/'}>Iniciar Sesion</Button>
                </LoginDataContainer>
                <p>¿No tienes cuenta? <NavLink to={'/create-account'}>Crea tu cuenta</NavLink></p>
            </LoginWrapperDown>

        </LoginContainerStyled>
    )
}

export default Login