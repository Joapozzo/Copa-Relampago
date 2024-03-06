import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionBack, ActionConfirmedContainer, ActionConfirmedWrapper, ActionNext, ActionTitle, ActionsContainer } from '../ActionConfirmed/ActionConfirmedStyles';
import { AlignmentDivider } from '../../Stats/Alignment/AlignmentStyles';
import { HiArrowLeft } from "react-icons/hi2";
import Input2 from '../../UI/Input/Input2';

import { setNewTime, toggleHiddenTime, toggleHiddenAction, toggleHiddenAsist, handleConfirm } from '../../../redux/Planillero/planilleroSlice';

const ActionConfirmed = () => {
    // Logica de navegacion
    const dispatch = useDispatch();
    const hiddenTime = useSelector((state) => state.planillero.planillaTime.hidden);
    const navigationSource = useSelector((state) => state.planillero.planilla.navigationSource);

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
        setInputValue(value);
    };

    // Logica payload
    const { localTeam, playerSelected, playerName ,dorsalPlayer, actionPlayer } = useSelector((state) => state.planillero.planilla)
    const { newTime } = useSelector((state) => state.planillero.planillaTime)
    const actions = useSelector((state) => state.planillero.planilla.actions)

    const handleTimeConfirm = () => {
        dispatch(setNewTime(inputValue))

        const actionData = {
            isLocalTeam: localTeam,
            idJugador: playerSelected,
            nombreJugador: playerName,
            dorsal: dorsalPlayer,
            accion: actionPlayer,
            minuto: newTime
        }

        // Agregar el tiempo a los datos totales
        actionData.minuto = inputValue;

        dispatch(handleConfirm(actionData))
        console.log(actions);
        dispatch(toggleHiddenTime())
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
                                onChange={(e) => setInputValue(e.target.value)}
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
