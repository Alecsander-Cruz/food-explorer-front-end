import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;

    font-family: "roboto";


    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;

        

        img {
            height: 43px;
            width: 43px;
        }
        
        h1{
            width: 250px;
            font-size: 37px;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            
        }

    }

    div:first-child{
        margin-top: 158px;
        margin-bottom: 73px;

        position: relative;
        left: -10px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        align-items: center;
        justify-content: center;
        flex-direction: row;

        margin-left: 108px;
        margin-right: 108px;

        div{
            margin-right: clamp(100px, 25%, 300px);
        }



    }
    
`;

export const Form = styled.form`
    width: 316px;

    
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
    
    text-align: center;

    h2 {
        font-family: "poppins", sans-serif;
        font-size: 32px;
        align-self: center;

        margin-bottom: 32px;

        display: none;
    }
    
    p {
        font-size: ${({ theme }) => theme.FONT.ROBOTO.SMALL};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        
        margin-bottom: 8px;
    }

    p:nth-child(4), p:nth-child(6){
        margin-top: 32px;
    }
    
    a {
        align-self: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin-top: 32px;
    }

    button {
        margin-top: 32px;
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){

        min-width: 476px;

        padding: 64px;
     
        background-color: ${({ theme }) => theme.COLORS.DARK_700};


        border-radius: 16px;

        h2{
            display: block;
        }

    }
    

    

    

`;