import React from 'react'
import { StatsContainerStyled, StatsFilter, StatsFilterButton, StatsHeadContainer, StatsWrapper } from './StatsStyles'
import Select  from "../../components/UI/Select/Select"
import Table from "../../components/Stats/Table/Table"
import Fixture from '../../components/Stats/Fixture/Fixture'

const Stats = () => {
    return (
        <StatsContainerStyled className='container'>
            <StatsWrapper className='wrapper'>

                <StatsHeadContainer>
                    <Select>
                        
                    </Select>
                    <StatsFilter>

                        <StatsFilterButton>
                            Fixture
                        </StatsFilterButton>

                        <StatsFilterButton className='active'>
                            Posiciones
                        </StatsFilterButton>
                        
                        <StatsFilterButton>
                            Goleadores
                        </StatsFilterButton>

                        <StatsFilterButton>
                            Asistencias
                        </StatsFilterButton>

                        <StatsFilterButton>
                            Expulsados
                        </StatsFilterButton>
                    </StatsFilter>
                </StatsHeadContainer>

                <Table>

                </Table>

                <Table>
                    
                </Table>

                <Fixture/>
                
            </StatsWrapper>
        </StatsContainerStyled>
    )
}

export default Stats