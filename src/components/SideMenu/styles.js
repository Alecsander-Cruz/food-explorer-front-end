import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    grid-template-areas: "header" "content" "footer";
    grid-template-rows: 114px auto 78px;

    display: flex;
    flex-direction: column;

    position: absolute;
    z-index: 1;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"]{
        transform: translateX(0);
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        display: none;
    }
`

export const Header = styled.header`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content:flex-start;

    margin-bottom: 36px;

    gap: 16px;

    padding: 56px 28px 24px 28px;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    h1{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 21px;
        font-family: 'Roboto', sans-serif;
    }
`

export const Button = styled.button`
    background: transparent;
    border: none;

    svg {
        font-size: 35px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

    }
`

export const Nav = styled.nav`
    grid-area: content;
    width: 100%;
    height: 100%;


    display: flex;
    flex-direction: column;
    flex: 1;

    padding-left: 28px;
    padding-right: 28px;

    /* margin-left: 28px; */
    
    a {
        padding: 10px 0 10px 10px ;

        margin-top: 36px;


        color:${({ theme }) => theme.COLORS.LIGHT_300} ;
        font-family: 'Poppins', sans-serif;
        font-size: 24px;

        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }
`

export const FixedFooter = styled.footer`
    grid-area: footer;
`