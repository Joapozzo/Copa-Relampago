import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ButtonWrapper = styled(NavLink)`
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
    border: 1px solid ${({ border }) => `var(--${border})`};
    border-radius: 10px;
    cursor: pointer;
    background: ${({ background }) => `var(--${background})`};
`