// ActionAsisted.js

import React from 'react';
import { ActionBack, ActionConfirmedContainer, ActionConfirmedWrapper, ActionNext, ActionTitle, ActionsContainer, AssistOptContainer, OptionGolContainer, OptionGolWrapper } from '../ActionConfirmed/ActionConfirmedStyles';
import { AlignmentDivider } from '../../Stats/Alignment/AlignmentStyles';
import { HiArrowLeft } from "react-icons/hi2";
import Input2 from '../../UI/Input/Input2';


import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenAction, toggleHiddenAsist, toggleHiddenTime } from '../../../redux/Planillero/planilleroSlice';

const ActionAsisted = () => {
    const dispatch = useDispatch();
    const hiddenAsist = useSelector((state) => state.planillero.asist.hidden);

    const handleNext = () => {
        dispatch(toggleHiddenAsist());
        dispatch(toggleHiddenTime());
    };

    const handleBack = () => {
        dispatch(toggleHiddenAsist());
        dispatch(toggleHiddenAction());
    };


    return (
        <>
        {!hiddenAsist && (
            <ActionConfirmedContainer>
                <ActionConfirmedWrapper>
                    <ActionBack onClick={handleBack}>
                        <HiArrowLeft />
                        <p>Volver</p>
                    </ActionBack>
                    <ActionTitle>
                        <h3>Indique la opción del Gol</h3>
                        <AlignmentDivider/>
                    </ActionTitle>

                    <ActionsContainer>
                        <OptionGolWrapper>
                        <OptionGolContainer>
                            <h4>El gol fue de penal?</h4>
                            <AssistOptContainer>
                                <input 
                                    type="radio" 
                                    name="opt3" 
                                    id=""
                                    value="si"
                                />
                                <p>Si</p>
                                </AssistOptContainer>
                                <AssistOptContainer>
                                    <input 
                                        type="radio" 
                                        name="opt4" 
                                        id=""
                                        value="no"
                                    />
                                    <p>No</p>    
                                </AssistOptContainer>
                            </OptionGolContainer>

                            <OptionGolContainer>
                            <h4>El gol fue en contra?</h4>
                            <AssistOptContainer>
                                <input 
                                    type="radio" 
                                    name="opt3" 
                                    id=""
                                    value="si"
                                />
                                <p>Si</p>
                                </AssistOptContainer>
                                <AssistOptContainer>
                                    <input 
                                        type="radio" 
                                        name="opt4" 
                                        id=""
                                        value="no"
                                    />
                                    <p>No</p>    
                            </AssistOptContainer>
                        </OptionGolContainer>
                        </OptionGolWrapper>

                        <h4>¿Hubo asistencia?</h4>
                        <AssistOptContainer>
                            <input 
                                type="radio" 
                                name="opt1" 
                                id=""
                                value="si"
                            />
                            <p>Si</p>
                            </AssistOptContainer>
                            <AssistOptContainer>
                                <input 
                                    type="radio" 
                                    name="opt1" 
                                    id=""
                                    value="si"
                                />
                                <p>No</p>    
                            </AssistOptContainer>
                        <Input2 placeholder={"Indique dorsal del asistidor"}/>
                    </ActionsContainer>
                    <ActionNext
                    onClick={handleNext}>
                        Siguiente
                    </ActionNext>
                </ActionConfirmedWrapper>
            </ActionConfirmedContainer>
        )}
        </>
    );
}

export default ActionAsisted;
