import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 120px;

    background-color: ${({ theme, isNew }) =>
        isNew ? 'transparent' : theme.COLORS.LIGHT_600};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: ${({ theme, isNew }) =>
        isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : `none`};

    border-radius: 8px;
    padding-right: 8px 16px;

    > button {
        border: none;
        background: none;
        width: 20%;

        display: flex;
        align-items: center;
        justify-content: center;

    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    
    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    input {
        height: 32px;
        width: 70%;

        padding: 8px 0 8px 16px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

        text-align: center;
    }

    input:focus{
        outline: none;
    }
`