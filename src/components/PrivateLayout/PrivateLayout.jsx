import React from 'react'
import { PrivateLayoutContainerStyled } from '../Layout/LayoutStyles'
import { Navbar } from '../Navbar/Navbar'
import MenuBottom from '../MenuBottom/MenuBottom'

const PrivateLayout = ({children}) => {
  return (
    <>
        <Navbar/>
        <PrivateLayoutContainerStyled>
            {
                children
            }
        </PrivateLayoutContainerStyled>
        <MenuBottom/>
    </>
  )
}

export default PrivateLayout