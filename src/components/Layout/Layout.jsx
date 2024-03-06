import React from 'react'
import { LayoutContainerStyled } from './LayoutStyles'

const Layout = ({children}) => {
    return (
        <LayoutContainerStyled>
            {children}
        </LayoutContainerStyled>
    )
}

export default Layout