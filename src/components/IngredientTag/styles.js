import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.span`
    font-size: 14px;

    padding: 4px 8px;

    height: 32px;

    border-radius: 5px;
    margin-right: 24px;
    margin-bottom: 24px;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    
    @media(min-width:${DEVICE_BREAKPOINTS.MD}){
        margin-right: 12px;
    }
`