import styled from "styled-components";

export const PlanillaContainerStyled = styled.div`
    padding-top: 100px;
`
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ButtonMatch = styled.button`
    display: flex;
    padding: 10px 12px;
    gap: 10px;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    background-color: var(--green);
    color: var(--white);
    height: fit-content;
    border: 1px solid var(--green);
    border-radius: 10px;
    cursor: pointer;

    &&.started {
        background: transparent;
    }

    &&.finish {
        background: red;
        border: 1px solid red;
        cursor: not-allowed
    }
`