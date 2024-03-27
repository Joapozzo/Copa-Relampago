import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionBack, ActionConfirmedContainer, ActionConfirmedWrapper, ActionNext, ActionTitle, ButtonContainer } from '../../FormacionesPlanilla/ActionConfirmed/ActionConfirmedStyles';
import { AlignmentDivider } from '../../Stats/Alignment/AlignmentStyles';
import { HiArrowLeft } from "react-icons/hi";
import { toggleHiddenModal, deleteAction, eliminarAccionesPorDorsal } from '../../../redux/Planillero/planilleroSlice';
import { manageDorsal } from '../../../redux/Matches/matchesSlice';

const ModalConfirmation = () => {

    const dispatch = useDispatch()

    //Logica para eliminar accion o dorsal de la planilla
    const hiddenModal = useSelector((state) => state.planillero.modal.hidden);
    const stateModal = useSelector((state) => state.planillero.modal.modalState)
    const deleteDorsal = useSelector((state) => state.planillero.modal.dorsalDelete)
    const deleteIdDorsal = useSelector((state) => state.planillero.modal.idDorsalDelete)
    const actionToDelete = useSelector((state) => state.planillero.actionToDelete)
    const currenTeamDelete= useSelector((state) => state.planillero.modal.currentTeam)
    

    const handleModalConfirm = () => {
        if (stateModal === 'action') {
            dispatch(deleteAction(actionToDelete))
        } else {
            dispatch(manageDorsal({ playerId: deleteIdDorsal, dorsal: deleteDorsal, assign: false }))
            dispatch(eliminarAccionesPorDorsal({ dorsal: deleteDorsal, isLocalTeam: currenTeamDelete }));
        }
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
                            {
                                stateModal === 'action' ? <h3>¿Estas seguro de que quieres eliminar la acción?</h3> :
                                <h3>¿Estas seguro de que quieres eliminar el dorsal {deleteDorsal}?</h3>
                            }
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
