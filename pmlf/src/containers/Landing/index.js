import React from 'react'
import styled from 'styled-components'
import {darkTheme} from '../../themes'
import Logo from '../../images/pmlflogotransparent.svg'
import FootballFan from '../../images/claque.svg'
import FootballFanBorders from '../../images/claque_borders.svg'
import FrontEndDev from '../../images/frontenddev.svg'
import FrontEndDevBorders from '../../images/frontenddev_borders.svg'

const SectionStyled = styled('section')`
    height: 825px;
    background-color: ${darkTheme.colors.greyDark};
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: relative;

    @media only screen and (max-width: ${darkTheme.breakpoint.md}) {
        height: 700px;
    }
    @media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
        height: 500px;
    }
    h1,
    h2 {
        text-transform: uppercase;
        color: white;
        font-family: ${darkTheme.fontFamily.main};
        font-weight: 400;
        text-align: center;
        margin: 0;
    }
    .footballFan {
        
    }
`

const Name = styled('h1')`
    font-size: 70px;
    
    @media only screen and (max-width: ${darkTheme.breakpoint.md}) {
        font-size: 58px;
    }
    @media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
        font-size: 40px;
    }
`

const Description = styled('h2')`
    @media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
        font-size: 20px;
    }
`

const Face = styled('img')`
    max-height: 70%;
    margin: 20px auto 0;
    position: relative;
    z-index: 2;
    max-width: 75%;
    
    @media only screen and (max-width: ${darkTheme.breakpoint.lg}) {
        margin: 40px auto 0;
        max-width: 70%;
    }
    @media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
        max-width: 85%;
    }
`

const BackImageStyled = styled('div')`
    position: absolute;
    bottom: 0;
    margin: 0;

    &:hover {
        img {
            visibility: hidden;
        }
    }
    img {
        height: 100%;
        margin: 0;
    }
    &:first-of-type {
        height: 350px;
        left: 0;
        z-index: 1;
        &:hover {
            background: url(${FrontEndDev}) no-repeat;
            background-size: 100% auto;
        }
        @media only screen and (max-width: ${darkTheme.breakpoint.md}) {
            height: 280px;
        }
        @media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
            height: 210px;
            background: url(${FrontEndDev}) no-repeat;
            background-size: 100% auto;
            img {
                visibility: hidden;
            }
        }
    }
    &:last-of-type {
        height: 450px;
        right: 0;
        &:hover {
            background: url(${FootballFan}) no-repeat;
            background-size: 100% auto;
        }
        @media only screen and (max-width: ${darkTheme.breakpoint.md}) {
            height: 350px;
        }
        @media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
            height: 220px;
            background: url(${FootballFan}) no-repeat;
            background-size: 100% auto;
            img {
                visibility: hidden;
            }
        }
    }
`

export default function Landing() {

    return (
        <SectionStyled>
            <Name>Pedro Fonseca</Name>
            <Description>Front End dev | Football fan</Description>
            <Face src={Logo} alt="Logo" className="logo" />
            <BackImageStyled>
                <img src={FrontEndDevBorders} alt="Front End developer"/>
            </BackImageStyled>
            <BackImageStyled>
                <img src={FootballFanBorders} alt="Football fan"/>
            </BackImageStyled>
        </SectionStyled>
    )
}
