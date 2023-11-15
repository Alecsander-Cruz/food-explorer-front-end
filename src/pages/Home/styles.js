import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    grid-template-areas: "header" "content" "footer";
    grid-template-rows: 114px auto 78px;

    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
     grid-template-rows: 104px auto 78px;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    grid-area: content;
`

export const FixedHeader = styled.section`
    grid-area: header;
`

export const FixedFooter = styled.section`
    grid-area: footer;
`