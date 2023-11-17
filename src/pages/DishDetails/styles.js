import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 114px auto 78px;;
    grid-template-areas:
        'header'
        'content'
        'footer';

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
    grid-area: content;
    padding: 16px 56px 34px 56px;
    
    
    min-height: 700px;
    overflow-y: auto;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Back = styled.button`
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
`

export const Photo = styled.img`
    width: 264px;
    height: 264px;

    border-radius: 50%;

    margin-bottom: 16px;
`

export const Name = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 27px;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 24px;

    text-align: center;
    `

export const Description = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 16px;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 24px;

    text-align: center;
`

export const Tags = styled.section`
    margin-bottom: 48px;
`

export const LastDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    

`

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    font-family: "Roboto", sans-serif;
    font-size: 16px;
    
`

export const Controls = styled.button`
    border: none;
    background: transparent;

    display: flex;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 22px;
    font-family: "Roboto", sans-serif;
    
    svg{
        font-size: 27px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
    }
`

export const Add = styled.button`
    border: none;
    border-radius: 3px;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    padding: 8px 44px;
    
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    width: 188px;
    height: 38px;
`