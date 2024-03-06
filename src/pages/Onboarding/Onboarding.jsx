import { OnboardingButtonsWrapper, OnboardingContainerStyled, OnboardingWrapper } from './OnboardingStyles'
import Button from '../../components/UI/Button/Button'
import IsotipoCR from "/Logos/CR-Logo.png"
const Onboarding = () => {
    return (
        <OnboardingContainerStyled>
            <OnboardingWrapper>
                <img src={IsotipoCR} alt="" srcset="" />
                <OnboardingButtonsWrapper>
                    <Button to='/login'>Iniciar Sesion</Button>
                    <Button to='/create-account' border='white' background='transparent'>Crear Cuenta</Button>
                </OnboardingButtonsWrapper> 
            </OnboardingWrapper>
        </OnboardingContainerStyled> 
    )
}

export default Onboarding