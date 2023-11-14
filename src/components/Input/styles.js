import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    border-radius: 0.57rem;

    > input {
        height: 3.4rem;
        width: 100%;
        font-size: 1.15rem;
        padding: 1rem 1.15rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        background: transparent;
        border: 0;

        font-family: 'roboto', sans-serif;
        
        &::placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > svg {
        font-size: 1.7rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`;

