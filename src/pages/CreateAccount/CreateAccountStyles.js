import styled from "styled-components";

export const CreateAccountContainerStyled = styled.div`
    padding: 30px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const CreateAccountWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    width: 100%;
    height: 100%;

    p a {
        color: var(--green);
    }
`

export const CreateAccountData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 30px;
    h2 {
        font-size: 18px;
        font-weight: 600;
        width: 100%;
    }

    a {
        width: 100%;
    }
`

export const CreateAccountInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    input {
        width: 100%;
    }
`