import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionBack, ActionConfirmedContainer, ActionConfirmedWrapper, ActionNext, ActionTitle, ActionsContainer } from '../ActionConfirmed/ActionConfirmedStyles';
import { AlignmentDivider } from '../../Stats/Alignment/AlignmentStyles';
import { HiArrowLeft } from "react-icons/hi2";
import Input2 from '../../UI/Input/Input2';

import { toggleHiddenDorsal } from '../../../redux/Planillero/planilleroSlice'
import { setDorsal } from '../../../redux/Matches/matchesSlice';

const EditDorsal = () => {
    const dispatch = useDispatch();
    const hiddenDorsal = useSelector((state) => state.planillero.dorsal.hidden);

    const playerSelected = useSelector((state) => state.planillero.dorsal.playerSelected);
    const [dorsalValue, setDorsalValue] = useState('');

    const playerNameSelected = useSelector((state) => state.planillero.dorsal.playerSelectedName);
    
    //Logica validar solo numeros
    const handleInputChange = (value) => {
        if (/^\d{0,3}$/.test(value) || value === '') {
            setDorsalValue(value);
        }
    };

    //Mandar al store del partido el numero y el id del jugador seleccionado
    const handleConfirm = () => {
        if (playerSelected !== null) {
            console.log({ playerId: playerSelected, dorsal: dorsalValue });  
            dispatch(setDorsal({ playerId: playerSelected, dorsal: dorsalValue }));
        }
        dispatch(toggleHiddenDorsal());
        setDorsalValue('');
    };

    return (
        <>
            {!hiddenDorsal && (
                <ActionConfirmedContainer>
                    <ActionConfirmedWrapper>
                        <ActionBack>
                            <HiArrowLeft onClick={() => dispatch(toggleHiddenDorsal())}/>
                            <p>Volver</p>
                        </ActionBack>
                        <ActionTitle>
                            <h3>Asignar dorsal al jugador {playerNameSelected}</h3>
                            <AlignmentDivider/>
                        </ActionTitle>
                        <ActionsContainer>
                            <h4>Dorsal</h4>
                            <Input2
                                placeholder={"ej: 10"}
                                value={dorsalValue}
                                onValueChange={handleInputChange}  // Cambiado a onValueChange
                            />
                        </ActionsContainer>
                        <ActionNext onClick={handleConfirm}>
                            Confirmar
                        </ActionNext>
                    </ActionConfirmedWrapper>
                </ActionConfirmedContainer>
            )}
        </>
    );
}

export default EditDorsal;
