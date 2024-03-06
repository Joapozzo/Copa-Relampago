import React from 'react'
import { CreateAccountContainerStyled, CreateAccountData, CreateAccountInputs, CreateAccountWrapper } from './CreateAccountStyles'
import Input from '../../components/UI/Input/Input'
import { HiCalendar, HiKey, HiOutlineCreditCard, HiUser, HiPhone, HiEnvelope, HiOutlineShieldCheck } from 'react-icons/hi2'
import Button from '../../components/UI/Button/Button'
import { NavLink } from 'react-router-dom'
import InputPassword from '../../components/UI/Input/InputPassword'
import Select from '../../components/UI/Select/Select'

const CreateAccount = () => {
    return (
        <CreateAccountContainerStyled>
            <CreateAccountWrapper>
                <CreateAccountData>
                    <h2>Creá tu cuenta</h2>
                    <CreateAccountInputs>
                        <Input placeholder={'DNI'}><HiOutlineCreditCard/></Input>
                        <Input placeholder={'Nombre'}><HiUser/></Input>
                        <Input placeholder={'Apellido'}><HiUser/></Input>
                        <Input type="date" placeholder={'Fecha de nacimiento'}><HiCalendar/></Input>
                        <Input placeholder={'Telefono'}><HiPhone/></Input>
                        <Input type="email" placeholder={'Email'}><HiEnvelope/></Input>
                        <Select>
                            <HiOutlineShieldCheck/>
                        </Select>
                        <InputPassword placeholder='Contraseña'>
                            <HiKey/>
                        </InputPassword>
                        <InputPassword placeholder='Confirmar contraseña'>
                            <HiKey/>
                        </InputPassword>
                    </CreateAccountInputs>
                    <Button>Crear cuenta</Button>
                </CreateAccountData>
                
                <p>¿Ya tienes cuenta? <NavLink to={'/login'}>Inicia Sesion</NavLink></p>
            </CreateAccountWrapper>
        </CreateAccountContainerStyled>
    )
}

export default CreateAccount