import React from 'react'
import styled from 'styled-components'
import {darkTheme} from '../../themes'
import Logo from '../../images/pmlflogotransparent.svg'
import FootballFan from '../../images/claque.svg'
import FootballFanBorders from '../../images/claque_borders.svg'

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
        height: 400px;
        position: absolute;
        right: 0;
        bottom: 0;
        margin: 0;

        &:hover {
            background: url(${FootballFan}) no-repeat;
            background-size: 100% auto;

            img {
                visibility: hidden;
            }
        }
        img {
            margin: 0;
            height: 100%;
        }
    }
`

const Name = styled('h1')`
    font-size: 70px;
    @media only screen and (max-width: ${darkTheme.breakpoint.md}) {
        font-size: 58px;
    }
`

const Face = styled('img')`
    max-height: 70%;
    margin: 20px auto 0;
    position: relative;
    z-index: 1;
    max-width: 75%;
    
    @media only screen and (max-width: ${darkTheme.breakpoint.lg}) {
        margin: 40px auto 0;
        max-width: 70%;
    }
`

export default function Landing() {

    return (
        <SectionStyled>
            <Name>Pedro Fonseca</Name>
            <h2>Front End dev | Football fan</h2>
            <Face src={Logo} alt="Logo" className="logo" />
            <div className="footballFan">
                <img src={FootballFanBorders} alt="Football fan"/>
            </div>
        </SectionStyled>
    )
}
