import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionBack, ActionConfirmedContainer, ActionConfirmedWrapper, ActionNext, ActionTitle, ButtonContainer } from '../../FormacionesPlanilla/ActionConfirmed/ActionConfirmedStyles';
import { AlignmentDivider } from '../../Stats/Alignment/AlignmentStyles';
import { HiArrowLeft } from "react-icons/hi";
import { toggleHiddenModal, deleteAction } from '../../../redux/Planillero/planilleroSlice';

const ModalConfirmation = () => {

    const dispatch = useDispatch()
    const hiddenModal = useSelector((state) => state.planillero.modal)
    const actionToDelete = useSelector((state) => state.planillero.actionToDelete)


    const handleModalConfirm = () => {
        console.log("prueba desde el modal",actionToDelete);
        dispatch(deleteAction(actionToDelete))
        dispatch(toggleHiddenModal())
    }

    const handleModalCancel = () => {
        dispatch(toggleHiddenModal())
    }

    return (
        <>
            {!hiddenModal && (
                <ActionConfirmedContainer>
                    <ActionConfirmedWrapper>
                        <ActionBack>
                            <HiArrowLeft onClick={handleModalCancel}/>
                            <p>Volver</p>
                        </ActionBack>
                        <ActionTitle>
                            <h3>¿Estas seguro de que quieres eliminar la acción?</h3>
                            <AlignmentDivider />
                        </ActionTitle>
                        <ButtonContainer>
                        <ActionNext onClick={handleModalConfirm}>
                            Confirmar
                        </ActionNext>
                        <ActionNext onClick={handleModalCancel}>
                            Cancelar
                        </ActionNext>
                        </ButtonContainer>

                    </ActionConfirmedWrapper>
                </ActionConfirmedContainer>
            )}
        </>
    );
}

export default ModalConfirmation;
