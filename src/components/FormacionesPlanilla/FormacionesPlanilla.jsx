import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormacionesPlanillaTitle, FormacionesPlanillaWrapper, PlanillaButtons, TablePlanillaWrapper } from './FormacionesPlanillaStyles';
import { AlignmentDivider } from '../Stats/Alignment/AlignmentStyles';
import EscudoCelta from '/Escudos/celta-de-vino.png';
import EscudoPuraQuimica from '/Escudos/pura-quimica.png';
import { HiMiniPencil } from "react-icons/hi2";

import { setNamePlayer, setPlayerSelected, setPlayerSelectedAction, setdorsalPlayer, toggleHiddenAction, toggleHiddenDorsal, setIsLocalTeam } from '../../redux/Planillero/planilleroSlice';

const FormacionesPlanilla = () => {
    const dispatch = useDispatch();
    const [activeButton, setActiveButton] = useState('local');

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    //Logica toggle local-visita
    const matchState = useSelector((state) => state.match);
    const currentTeam = activeButton === 'local' ? matchState.find(team => team.Local === true) : matchState.find(team => team.Local === false);

    // Enviar ID del jugador seleccionado , Dorsal, Nombre y definir localia
    const [selectedPlayerIdAction, setSelectedPlayerIdAction] = useState(''); 
    const [playerDorsal, setPlayerDorsal] = useState('')
    const [playerName, setPlayerName] = useState('')

    const handleNext = (playerID, playerDorsal, namePlayer) => {
        setSelectedPlayerIdAction(playerID)
        dispatch(setPlayerSelectedAction(playerID))

        setPlayerDorsal(playerDorsal)
        dispatch(setdorsalPlayer(playerDorsal))

        setPlayerName(namePlayer)
        dispatch(setNamePlayer(namePlayer))

        // Definir si el equipo es local o visitante
        dispatch(setIsLocalTeam(activeButton === 'local'));

        dispatch(toggleHiddenAction());
    }

    //Seleccionar jugador mediante click en edit
    const [selectedPlayerId, setSelectedPlayerId] = useState(''); 

    // Función para manejar el clic en el lápiz y abrir el componente EditDorsal
    const handleEditDorsal = (playerId) => {
        setSelectedPlayerId(playerId);
        dispatch(setPlayerSelected(playerId))
        dispatch(toggleHiddenDorsal());
    };

    return (
        <FormacionesPlanillaWrapper>
            <FormacionesPlanillaTitle>
                <PlanillaButtons
                    className={`local ${activeButton === 'local' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('local')}
                >
                    Local
                </PlanillaButtons>
                <img src={EscudoCelta} alt="" />
                <h3>Formaciones</h3>
                <img src={EscudoPuraQuimica} alt="" />
                <PlanillaButtons
                    className={`visitante ${activeButton === 'visitante' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('visitante')}
                >
                    Visitante
                </PlanillaButtons>
            </FormacionesPlanillaTitle>
            <AlignmentDivider />
            <TablePlanillaWrapper>
                <thead>
                    <tr className='head'>
                        <th>Dorsal</th>
                        <th>DNI</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTeam && currentTeam.Player.map(player => (
                        <tr key={player.ID} className='bodyRow'>
                            <td
                                className={`dorsal ${!player.Dorsal && 'disabled'}`}
                                onClick={player.Dorsal ? () => handleNext(player.ID, player.Dorsal, player.Nombre) : null}
                            >
                                {player.Dorsal}
                            </td>
                            <td className='dni'>{player.DNI}</td>
                            <td className='text'>{player.Nombre}</td>
                            <td className='edit'>
                                <HiMiniPencil
                                    onClick={() => handleEditDorsal(player.ID)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </TablePlanillaWrapper>
        </FormacionesPlanillaWrapper>
    );
};

export default FormacionesPlanilla;
