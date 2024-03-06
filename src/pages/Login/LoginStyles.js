import styled from "styled-components";

export const LoginContainerStyled = styled.div`
    height: 100vh;
    position: relative;
`
export const LoginWrapperUp = styled.div`
    display: flex;
    height: 40%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-image: url(/back_login.jpg);
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    img {
        width: 60px;
        z-index: 1;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: .8;
        z-index: 0;
    }
`
export const LoginWrapperDown = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 64%;
    background-color: var(--gray-400);
    width: 100%;
    padding: 30px;
    border-radius: 30px 30px 0 0;

    p a {
        font-weight: 400;
        color: var(--green)
    }
`
export const LoginDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 50px;
`

export const LoginDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;

    h1 {
        font-size: 18px;
        font-weight: 500;
    }
`
export const LoginDataInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const LoginDataPassword = styled.div`
    display: flex;
    justify-content: end;

    a {
        font-weight: 400;
        color: var(--white)
    }
`
