import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    grid-template-areas: "header" "content" "footer";
    grid-template-rows: 114px auto 78px;

    @media(min-width:${DEVICE_BREAKPOINTS.LG}){
     grid-template-rows: 104px auto 78px;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-area: content;

    overflow-y: auto;
    overflow-x: hidden;

    padding: 44px 16px 0 36px;

    .banner{
        min-width: 376px;
        height: 120px;
        background: linear-gradient(to right, ${({ theme }) => theme.COLORS.GRADIENTS_200_0}, ${({ theme }) => theme.COLORS.GRADIENTS_200_100});

        margin-bottom: 62px;

        display: flex;
        align-items: center;
        
        font-family: "Poppins", sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        .foodsMobile{
            width: 191px;
            height: 149px;

            position: relative;
            bottom: 15px;
            left: -30px;
        }

        .foodsDesktop{
            display: none;

            width: 632px;
            height: 406px;

            position: relative;
            bottom: 73px;
            left: -54px;
            
        }

        div{
            display: flex;
            flex-direction: column;

            position: relative;
            left: -30px;

            h1{
                font-size: 18px;
                min-width: 215px;
                font-weight: 500;
                
            }
    
            p{
                font-size: 12px;
                min-width: 205px;
            }
        }

    }

    .meals, .desserts, .drinks{
        margin-bottom: 25px;
        h1{
            font-family: "Poppins", sans-serif;
            font-size: 18px;

            margin-bottom: 24px;
        }
    }
    
    .meals{
    }
    .desserts{
    }
    .drinks{
    }

    .navigation-wrapper {
        position: relative;
    }
    .arrow {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        fill: #fff;
        cursor: pointer;
    }

    .arrow--left {
        left: 5px;
    }

    .arrow--right {
        left: auto;
        right: 5px;
    }

    .keen-slider{
        min-width: 150px;
        max-width: 90vw;
        /* overflow: hidden; */
        height: 292px;

    }
    
    
    .keen-slider__slide{
        min-width: 210px;
        max-width: 210px;

        height: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        /* margin-left: 16px; */
        

        box-sizing: border-box;

    }

    @media(min-width:${DEVICE_BREAKPOINTS.MD}){
        .keen-slider{
            max-width: 94vw;

            height: 400px;
        
        }
    }

    @media(min-width:${DEVICE_BREAKPOINTS.LG}){

        padding-top: 164px;

        .banner{

            min-width: 1024px;
            height: 260px;

            /* margin: 164px 124px 0 124px; */

            div{

                h1{
                    font-size: 40px;
                    min-width: 422px;
                }
                
                p{
                    font-size: 16px;
                    min-width: 418px;
                }
            }


            .foodsMobile{
                display: none;
            }

            .foodsDesktop{
                display: block;
            }
        }
        .keen-slider{
            max-width: 95vw;

            height: 462px;
        
        }
    
    
        .keen-slider__slide{
            min-width: 304px;
            /* margin-right: 27px; */
        }

    }

`

export const FixedHeader = styled.section`
    grid-area: header;
    width: 100%;
`

export const FixedFooter = styled.section`
    grid-area: footer;
    width: 100%;
`