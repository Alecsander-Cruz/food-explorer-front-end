import styled from "styled-components";
import ArrowRight from '../../assets/ArrowRight.svg'
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
`

export const Content = styled.div`
    grid-area: content;
    padding: 11px 32px 50px 32px;



    > button:first-child{
        font-size: 16px;
    
        margin-bottom: 24px;
    
        svg{
            font-size: 22px;
        }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        padding: 40px 125px 100px 125px;

        > button:first-child{
            font-size: 24px;
    
            svg{
                font-size: 30px;
            }
        }

    }
   


`
export const Form = styled.form`

    span{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        font-family: "Roboto", sans-serif;
        font-size: 16px;
        
    }

`
export const Title = styled.h1`

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 400;

    margin-bottom: 24px;
    
    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        margin-bottom: 32px;
    }

`

export const FirstDiv = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        flex-direction: row;
        gap: 32px;
    }

`

export const SecondDiv = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        flex-direction: row;
        gap: 32px;
    }
`

export const ThirdDiv = styled.div`
`

export const FourthDiv = styled.div`

    display: flex;
    justify-content: flex-end;

    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
        
        button{
            width: 20%;

        }
    }

`

export const Photo = styled.div`
    display: flex;
    flex-direction: column;


    gap: 16px;
    margin-bottom: 24px;

    label{
        background: ${({ theme }) => theme.COLORS.DARK_900};
    
        width: 100%;
        height: 48px;
    
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;

        padding: 12px 32px;

        font-family: "Poppins", sans-serif;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        
        svg{
            font-size: 24px;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
        
        
        input[type="file"]{
            display: none;
        }

    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 30%;
    }
    
`

export const Name = styled.div`
    display: flex;
    flex-direction: column;


    gap: 16px;
    margin-bottom: 24px;

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 40%;
    }

`

export const Category = styled.div`
    display: flex;
    flex-direction: column;


    gap: 16px;
    margin-bottom: 24px;

    select{
        background: url(${ArrowRight}) no-repeat right;
        background-position: right 20px bottom 20px;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 16px;
        font-family: "Roboto", sans-serif;
        font-weight: 400;



        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        
        width: 100%;
        height: 48px;
        
        border-radius: 8px;
        padding: 13px 16px;

        outline: none;

        width: 100%;
        cursor: pointer;
        appearance: none;

        
        svg{
        }
    }

    .placeholder{
        display: none;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 30%;
    }
    
`
export const Ingredients = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;
    margin-bottom: 24px;

    

    section{
        display: flex;
        gap: 16px;

        padding: 8px;
        border-radius: 8px;

        background: ${({ theme }) => theme.COLORS.DARK_900};


        flex-wrap: wrap;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 80%;
    }

`
export const Price = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;
    margin-bottom: 24px;

`
export const Description = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;
    margin-bottom: 24px;


    textarea{
        width: 100%;
        height: 172px;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 16px;

        border: none;
        resize: none;

        border-radius: 8px;
        padding: 14px;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`