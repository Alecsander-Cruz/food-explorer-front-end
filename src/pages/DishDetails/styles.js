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

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        padding: 24px 121px 50px 121px;

        flex-direction: row;

        gap: 48px;

        height: max-content;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        padding: 24px 50px 155px 50px;

        flex-direction: row;

        gap: 48px;

        height: max-content;
    }
    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        padding: 24px 121px 155px 121px;

        flex-direction: row;

        gap: 48px;

        height: max-content;
    }

`;

export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    

    @media(min-width:${DEVICE_BREAKPOINTS.MD}){
        flex-direction: column;

        width: fit-content;
        

    }
    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        flex-direction: column;

        width: 390px;
        height: 100%;

    }
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

    @media(min-width:${DEVICE_BREAKPOINTS.MD}){
        margin-bottom: 42px;
    }

    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        margin-bottom: 42px;
    }
`


export const RightDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        @media(min-width:${DEVICE_BREAKPOINTS.MD}){
            flex-direction: column;
            align-items: self-start;
            justify-content: flex-start;
        }

        @media(min-width:${DEVICE_BREAKPOINTS.LG}){
            flex-direction: column;
            align-items: self-start;
            justify-content: flex-start;
        }
`

export const Photo = styled.img`
    width: 264px;
    height: 264px;

    border-radius: 50%;

    margin-bottom: 16px;

    @media(min-width:${DEVICE_BREAKPOINTS.MD}){
        width: 330px;
        height: 330px;
    }

    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        width: 390px;
        height: 390px;
    }
`

export const Name = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 27px;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
    margin-bottom: 24px;
    
    text-align: center;
    
    @media(min-width:${DEVICE_BREAKPOINTS.MD}){
        text-align: start;
        font-size: 32px;
        font-weight: 500;
    }
    
    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        font-size: 40px;
        font-weight: 500;
        text-align: start;
    }
`

export const Description = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 300;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 24px;

    text-align: center;

    @media(min-width:${DEVICE_BREAKPOINTS.MD}){
        text-align: start;
        font-size: 20px;
    }

    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        font-size: 24px;
        text-align: start;
    }
`

export const Tags = styled.section`
    margin-bottom: 48px;
`

export const LastDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;

    width: 100%;
    
    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        gap: 33px;
    }

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

    padding: 8px 30px;
    
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    width: 188px;
    height: 38px;

    svg{
        font-size: 22px;
    }
`

export const Edit = styled.button`
    border: none;
    border-radius: 3px;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    padding: 12px 24px;
    
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    width: 100%;
    height: 48px;
    
    @media(min-width:${DEVICE_BREAKPOINTS.MD}){
        width: 131px;

        font-size: 14px;
    }

    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        width: 131px;

        font-size: 14px;
    }
`