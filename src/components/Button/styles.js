import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: 'poppins', sans-serif;

    
    border: 0;
    border-radius: 0.35rem;
    padding: 0 0.85rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.35px;

    width: 100%;
    height: 3.4rem;
    
    > span {
        font-size: 1rem;
        font-weight: medium;
    }

    > svg {
        font-size: 0.85rem;
    }

    &:disabled{
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    opacity: 0.8;
        
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    }
`