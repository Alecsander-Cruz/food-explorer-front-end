import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 24px;
    
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        padding-top: 55px;
        padding-bottom: 55px;
        
    }

`
export const LikeOrEdit = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;

    z-index: 1;


    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};


    width: 24px;
    height: 24px;

        svg{
        font-size: 24px;
        }
`

export const DishDetails = styled.button`
    background: transparent;
    border: none;

    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 12px;
    
    > :hover{
        filter: brightness(1)
    }
    
    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        margin-bottom: 15px;

    }
`

export const Photo = styled.img`
    width: 88px;
    height: 88px;

    border-radius: 50%;
`

export const Name = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};


    font-family: "Poppins", sans-serif;
    font-size: 14px;
    
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        font-size: 18px;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        font-size: 24px;
    }



`

export const Description = styled.p`
    display: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: "Roboto", sans-serif;
    font-size: 14px;
    
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        display: block;
    }
    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        display: block;
    }
`

export const Price = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    
    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        font-size: 32px;
    }
    `

export const LastDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        flex-direction: row;
    }
    
`

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    font-family: "Roboto", sans-serif;
    font-size: 16px;
    
    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        font-size: 20px;

    }
`

export const Controls = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    svg{
        font-size: 30px;
    }
`

export const Add = styled.button`
    border: none;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    width: 162px;
    height: 32px;
    
    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 92px;
        height: 48px;
    }
`