import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding: 56px 28px 24px 28px;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    div {
        gap: 8px;
    }

    .div-search{
        display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){

        padding: 24px 123px;


        .div-search{
            display: block;
            width: 100%;

            margin: 0 32px;

            svg{
                transform: rotate(0);
                font-size: 24px;
                fill: ${({ theme }) => theme.COLORS.DARK_900};
            }

        }


    }

`

export const Menu = styled.button`
    background: none;
    border: none;
    display: block;

    .menu{
            transform: scale(0.77, 0.74);
        }
    
    > svg {
        font-size: 32px;
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: none;
    }
`

export const Counter = styled.div`
    position: relative;

    span{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

        font-family: 'poppins', sans-serif;
        font-size: 14px;
        border-radius: 50%;

        width: 20px;
        height: 20px;

        position: absolute;
        bottom: 20px;
        right: -6px;
    }

    p{
        display: none;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        span{
            display: none;
        }

        p{
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
            font-family: 'poppins', sans-serif;
            font-size: 14px;
    
            display: block;
        }
    }
`

export const LogoAdmin = styled.button`

    border: none;
    background: transparent;
    gap: 8px;

    min-width: 170px;
    display: flex;
    justify-content: flex-start;
    justify-self: center;



    /* position: relative; */

    margin-right: 60px;


    
    svg{
        transform: rotate(90deg) scaleY(1.155);
        font-size: 30px;
        fill: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    div{
        display: flex;
        align-items: center;
        
        strong {
            font-family: "roboto", sans-serif;
            font-size: 21px;
    
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    
    
        span{
            color: ${({ theme }) => theme.COLORS.CAKE_200};
            font-family: 'Roboto', sans-serif;
            font-size: 12px;
        }
    }




    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        
        align-items: stretch;
        

        div {
            display: flex;
            flex-direction: column;

            align-items: center;
            justify-content: center;

            gap: 0;



            span{
                align-self: flex-end;
            }
        }
    }
    
`

export const LogoCustomer = styled.button`

    border: none;
    background: transparent;
    gap: 8px;
    
    min-width: 190px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    svg{
            transform: rotate(90deg) scaleY(1.155);
            font-size: 30px;
            fill: ${({ theme }) => theme.COLORS.CAKE_100};
        }

    strong {
        font-family: "roboto", sans-serif;
        font-size: 21px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        strong{
            font-size: 24px;
        }
    }
`
export const NewDish = styled.button`
    display: none;

    @media(min-width:${DEVICE_BREAKPOINTS.LG}){

        border: none;

        display: block;
        
        min-width: 216px;
        
        padding: 12px 0;
        border-radius: 5px;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: ${({ theme }) => theme.COLORS.TOMATO_100};

        font-family: 'Poppins', sans-serif;
        font-size: 14px;
    }
`

export const Orders = styled.button`
    background: transparent;
    border: none;

    svg{
        font-size: 32px;
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        min-width: 216px;
        display: flex;
        align-items: center;
        gap: 8px;

        padding: 12px 46px;
        border-radius: 5px;

        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }
`

export const Logout = styled.button`
    background: transparent;
    border: none;

    display: none;

    svg{
        font-size: 32px;
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        display: block;
            margin-left: 32px;

            svg{
                transform: rotate(180deg);
            }
    }
`