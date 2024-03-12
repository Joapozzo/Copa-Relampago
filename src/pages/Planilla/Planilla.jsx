import React, { useEffect, useState } from 'react';
import { MatchStatsContainer, MatchStatsWrapper } from '../MatchStats/MatchStatsStyles';
import Section from '../../components/Section/Section';
import CardFinalPartido from '../../components/Stats/CardFinalPartido/CardFinalPartido';
import Incidents from '../../components/Stats/Incidents/Incidents';
import FormacionesPlanilla from '../../components/FormacionesPlanilla/FormacionesPlanilla';
import ActionConfirmed from '../../components/FormacionesPlanilla/ActionConfirmed/ActionConfirmed';
import ActionTime from '../../components/FormacionesPlanilla/ActionTime/ActionTime';
import ActionAsisted from '../../components/FormacionesPlanilla/ActionAsisted/ActionAsisted';
import Cronometro from '../../components/FormacionesPlanilla/Cronometro/Cronometro.jsx';
import { ButtonContainer, ButtonMatch, InputDescContainer, PlanillaContainerStyled } from './PlanillaStyles.js';
import EditDorsal from '../../components/FormacionesPlanilla/EditDorsal/EditDorsal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStateMatch } from '../../redux/Planillero/planilleroSlice.js';
import ModalConfirmation from '../../components/Stats/Incidents/ModalConfirmation.jsx';
import InputLong from '../../components/UI/Input/InputLong.jsx';

const Planilla = () => {

    const dispatch = useDispatch();
    const estadoPartido = useSelector((state) => state.planillero.timeMatch.matchState);

    const match = useSelector((state) => state.match);
    const [canStartMatch, setCanStartMatch] = useState(false);

    useEffect(() => {
        const canStart = match.every(team => {
            const playersWithStatusTrue = team.Player.filter(player => player.status);
            return playersWithStatusTrue.length >= 5;
        });

        setCanStartMatch(canStart);
    }, [match]);

    const handleStartMatch = () => {
        if (canStartMatch) {
            dispatch(toggleStateMatch());
        } else {
            alert("Para comenzar el partido debe haber un mínimo de 5 jugadores por equipo.");
        }
    }

    return (
        <PlanillaContainerStyled className='container'>
            <MatchStatsWrapper className='wrapper'>
                <Cronometro/>
                <Section>
                    <h2>Ficha de partido</h2>
                    <CardFinalPartido/>
                </Section>
                <FormacionesPlanilla/>
                <Incidents/>

                <InputDescContainer>
                    <p>Escriba aquí alguna observacion o descripción del partido</p>
                    <InputLong/>
                    <ButtonMatch>
                        Enviar
                    </ButtonMatch>
                </InputDescContainer>

                <ButtonContainer>
                    {estadoPartido === null && (
                        <ButtonMatch className='started' onClick={handleStartMatch}>
                            Comenzar Partido
                        </ButtonMatch>
                    )}
                    {estadoPartido === 'isFinish' && (
                        <ButtonMatch 
                        className='finish'
                        onClick={handleStartMatch}>
                            Partido Finalizado
                        </ButtonMatch>
                    )}
                    {estadoPartido === 'isStarted' && (
                        <ButtonMatch onClick={handleStartMatch}>
                            Finalizar Partido
                        </ButtonMatch>
                    )}
                    {estadoPartido === 'finish' && (
                        <ButtonMatch 
                        className='finish'
                        onClick={handleStartMatch}>
                            Partido Finalizado
                        </ButtonMatch>
                    )}
                </ButtonContainer>
                
                {/* Ventanas */}
                <ActionConfirmed/>
                <ActionAsisted/>
                <ActionTime/>
                <EditDorsal/>
                <ModalConfirmation/>

            </MatchStatsWrapper>
        </PlanillaContainerStyled>
    );
}

export default Planilla;
