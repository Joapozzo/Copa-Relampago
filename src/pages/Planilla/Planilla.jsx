import React from 'react'
import { MatchStatsContainer, MatchStatsWrapper } from '../MatchStats/MatchStatsStyles'
import Section from '../../components/Section/Section'
import CardFinalPartido from '../../components/Stats/CardFinalPartido/CardFinalPartido'
import Incidents from '../../components/Stats/Incidents/Incidents'
import FormacionesPlanilla from '../../components/FormacionesPlanilla/FormacionesPlanilla'
import ActionConfirmed from '../../components/FormacionesPlanilla/ActionConfirmed/ActionConfirmed'
import ActionTime from '../../components/FormacionesPlanilla/ActionTime/ActionTime'
import ActionAsisted from '../../components/FormacionesPlanilla/ActionAsisted/ActionAsisted'
import Cronometro from '../../components/FormacionesPlanilla/Cronometro/Cronometro.jsx'
import { PlanillaContainerStyled } from './PlanillaStyles.js'
import EditDorsal from '../../components/FormacionesPlanilla/EditDorsal/EditDorsal.jsx'

const Planilla = () => {
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
            <ActionConfirmed/>
            <ActionAsisted/>
            <ActionTime/>
            <EditDorsal/>
        </MatchStatsWrapper>
    </PlanillaContainerStyled>
    )
}

export default Planilla