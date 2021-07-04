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

    h1,
    h2 {
        text-transform: uppercase;
        color: white;
        font-family: ${darkTheme.fontFamily.main};
        font-weight: 400;
        text-align: center;
        margin: 0;
    }
    h1 {
        font-size: 70px;
    }
    img {
        height: 70%;
        margin-top: 20px;
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

export default function Landing() {

    return (
        <SectionStyled>
            <h1>Pedro Fonseca</h1>
            <h2>Front End dev | Football fan</h2>
            <img src={Logo} alt="Logo" />
            <div className="footballFan">
                <img src={FootballFanBorders} alt="Football fan"/>
            </div>
        </SectionStyled>
    )
}
