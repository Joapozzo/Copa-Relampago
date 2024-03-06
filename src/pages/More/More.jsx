import React from 'react'
import { MoreAction, MoreContainerImg, MoreIconContainer, MoreMid, MoreStyledContainer, MoreTop, MoreWrapper } from './MoreStyles'
import { HiMiniUser, HiDocumentMinus, HiFolderMinus, HiPhone  } from "react-icons/hi2";

const More = () => {
  return (
    <MoreStyledContainer>
        <MoreWrapper>
            <MoreTop>
                <h2>Más</h2>
                <MoreContainerImg>
                    <img src="/public/imagen_log.png" alt="" />
                </MoreContainerImg>
            </MoreTop>
            <MoreMid>
                <MoreAction>
                    <MoreIconContainer>
                        <HiMiniUser />
                    </MoreIconContainer>
                    <h4>Mi perfil</h4>
                </MoreAction>
                <MoreAction>
                    <MoreIconContainer>
                        <HiDocumentMinus />
                    </MoreIconContainer>
                    <h4>Reglamento</h4>
                </MoreAction>
                <MoreAction>
                    <MoreIconContainer>
                        <HiFolderMinus />
                    </MoreIconContainer>
                    <h4>Archivo histórico</h4>
                </MoreAction>
                <MoreAction>
                    <MoreIconContainer>
                        <HiPhone/>
                    </MoreIconContainer>
                    <h4>Contacto</h4>
                </MoreAction>
            </MoreMid>

        </MoreWrapper>
    </MoreStyledContainer>
  )
}

export default More