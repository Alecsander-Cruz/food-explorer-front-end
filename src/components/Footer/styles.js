import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    padding: 28px 0;


    gap: 8px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 7px;
        
        svg{
            transform: rotate(90deg) scale(0.945, 1.334);
            fill: ${({ theme }) => theme.COLORS.LIGHT_700};

            font-size: 22px;

        }
    
        strong{
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
            width: 114px;

            font-family: "Roboto", sans-serif;
            font-size: 15px;
        }
    }

    span {
        font-family: sans-serif;
        font-size: 12px;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};

        min-width: 222px;
    }


`