import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        /* font-size: 12px; */
        font-size: ${({ theme }) => theme.FONT.POPPINS.S100};
        
        @media (min-width : ${DEVICE_BREAKPOINTS.LG}){
            font-size: ${({ theme }) => theme.FONT.ROBOTO.SMALLER};
        }
    }
    
    body{
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        font-family: 'poppins';

        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        -webkit-font-smoothing: antialiased;
    }

    a{
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.7)
    }


    @media (min-width : ${DEVICE_BREAKPOINTS.LG}){


        /* --- SCROLLBAR STYLE --- */
        *::-webkit-scrollbar {
            width: 10px;
        }
        
        *::-webkit-scrollbar-track {
            border-radius: 20px;
            background: ${({ theme }) => theme.COLORS.DARK_100};
        }
        
        *::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.CAKE_100};
            border-radius: 20px;
        }
        
        *::-webkit-scrollbar-thumb:hover {
            cursor: grab;
        }

        /* --- SCROLLBAR STYLE --- */
    }


`;
