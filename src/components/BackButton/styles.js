import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
    border: none;
    background: transparent;

    align-self: flex-start;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 24px;
    font-family: "Poppins", sans-serif;

    margin-bottom: 16px;
    
    svg{
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 32px;
    }

    @media(min-width:${DEVICE_BREAKPOINTS.MD}){
        margin-bottom: 42px;
    }

    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        margin-bottom: 42px;
    }
`
