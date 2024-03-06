import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

const Button = ({ 
    to,
    background = 'green',
    border = 'green',
    children }) => {
    return (
        <ButtonWrapper
            to={to}
            background={background}
            border={border}
            >{children}
        </ButtonWrapper>
    )
}

export default Button