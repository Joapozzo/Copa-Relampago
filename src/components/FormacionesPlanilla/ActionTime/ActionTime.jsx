import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionBack, ActionConfirmedContainer, ActionConfirmedWrapper, ActionNext, ActionTitle, ActionsContainer } from '../ActionConfirmed/ActionConfirmedStyles';
import { AlignmentDivider } from '../../Stats/Alignment/AlignmentStyles';
import { HiArrowLeft } from "react-icons/hi2";
import Input2 from '../../UI/Input/Input2';

import { setNewTime, toggleHiddenTime, toggleHiddenAction, toggleHiddenAsist, handleConfirm, deleteAction } from '../../../redux/Planillero/planilleroSlice';

const ActionConfirmed = () => {

    const reviewDataGol = useSelector((state) => state.planillero.asist.dataGol)

    // Logica de navegacion
    const dispatch = useDispatch();
    const hiddenTime = useSelector((state) => state.planillero.planillaTime.hidden);
    const navigationSource = useSelector((state) => state.planillero.planilla.navigationSource);

    //Logica para navegar en caso de que si es gol se abra la ventana assited
    const handleBack = () => {
        if (navigationSource === 'Assisted') {
            dispatch(toggleHiddenAsist());
            dispatch(toggleHiddenTime());
        } else {
            dispatch(toggleHiddenAction());
            dispatch(toggleHiddenTime());
        }
    };

    // Logica enabled
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        // Verificar si el valor ingresado contiene solo dos números
        if (/^\d{0,2}$/.test(value) || value === '') {
            setInputValue(value);
        }
    };
    
    // Logica payload
    const { localTeam, playerSelected, playerName ,dorsalPlayer, actionPlayer } = useSelector((state) => state.planillero.planilla)
    const { newTime } = useSelector((state) => state.planillero.planillaTime)
    const actions = useSelector((state) => state.planillero.planilla.actions)

    const actionToDelete = useSelector((state) => state.planillero.actionToDelete)

    const handleTimeConfirm = () => {
        //si actionToDelelte === null
        dispatch(setNewTime(inputValue))
        const actionData = {
            isLocalTeam: localTeam,
            idJugador: playerSelected,
            nombreJugador: playerName,
            dorsal: dorsalPlayer,
            accion: actionPlayer,
            minuto: newTime
        }

        actionData.minuto = inputValue;
        dispatch(handleConfirm(actionData));
        // dispatch(deleteAction({ editedAction: actionData, isEdit: true }));

        dispatch(toggleHiddenTime())
        setInputValue('')
    }

    return (
        <>
            {!hiddenTime && (
                <ActionConfirmedContainer>
                    <ActionConfirmedWrapper>
                        <ActionBack onClick={handleBack}>
                            <HiArrowLeft />
                            <p>Volver</p>
                        </ActionBack>
                        <ActionTitle>
                            <h3>Indique el minuto de la acción</h3> 
                            <AlignmentDivider/>
                        </ActionTitle>
                        <ActionsContainer>
                            <Input2 
                                placeholder={"ej: 00:00"}
                                value={inputValue}
                                onValueChange={handleInputChange}
                            />
                        </ActionsContainer>
                        <ActionNext
                            disabled={!inputValue.trim()}
                            className={!inputValue.trim() ? 'disabled' : ''}
                            onClick={handleTimeConfirm}
                        >
                            Confirmar
                        </ActionNext>
                    </ActionConfirmedWrapper>
                </ActionConfirmedContainer>
            )}
        </>
    );
};

export default ActionConfirmed;
