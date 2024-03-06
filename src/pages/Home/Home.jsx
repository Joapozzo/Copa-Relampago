import React from 'react'
import CardPartido from '../../components/Stats/CardPartido/CardPartido'
import { HomeWrapper, HomeContainerStyled, CardsMatchesContainer, CardsMatchesWrapper } from './HomeStyles'
import Section from '../../components/Section/Section'
import Table from '../../components/Stats/Table/Table'

const Home = () => {
    return (
        <>
            <HomeContainerStyled className='container'>
                <HomeWrapper className='wrapper'>
                    <Section>
                        <h2>Próximo partido</h2>
                        <CardPartido/>
                    </Section>
                    <Section>
                        <h2>Fecha 10 - Apertura 2024</h2>
                        <CardsMatchesContainer>
                            <CardsMatchesWrapper>
                                <CardPartido finished/>
                                <CardPartido finished/>
                                <CardPartido finished/>
                                <CardPartido finished/>
                                <CardPartido finished/>
                                <CardPartido finished/>
                            </CardsMatchesWrapper>
                        </CardsMatchesContainer>
                    </Section>
                    <Section>
                        <h2>Posiciones</h2>
                        <Table/>
                    </Section>
                </HomeWrapper>
            </HomeContainerStyled>
        </> 
    )
}

export default Home