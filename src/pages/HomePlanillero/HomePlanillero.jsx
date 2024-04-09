import React from 'react'
import { HomeWrapper } from '../Home/HomeStyles'
import Section from '../../components/Section/Section'
import { HomePlanilleroContainer } from './HomePlanilleroStyles'
import CardPartido from '../../components/Stats/CardPartido/CardPartido'

const HomePlanillero = () => {
  return (
    <HomePlanilleroContainer>
        <HomeWrapper>
            <Section>
                <h2>Mis Partidos</h2>
                <CardPartido observer/>
                <CardPartido observer/>
                <CardPartido observer/>
            </Section>
        </HomeWrapper>
    </HomePlanilleroContainer>
  )
}

export default HomePlanillero