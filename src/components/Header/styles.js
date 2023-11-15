import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 56px 28px 24px 28px;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

   
    button{
        background: transparent;
        border: none;

        svg{
            font-size: 32px;
            fill: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }
    
    div {

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 8px;
        
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

    }

    .logo{
        min-width: 170px;
        display: flex;
        justify-content: flex-start;
    }

    .div-search, .logout{
        display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){

        padding: 24px 123px;


        .orders{
            min-width: 216px;
            display: flex;
            align-items: center;
            gap: 8px;

            padding: 12px 46px;
            border-radius: 5px;

            background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        }

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

        .logout{
            display: block;
            margin-left: 32px;

            svg{
                transform: rotate(180deg);
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