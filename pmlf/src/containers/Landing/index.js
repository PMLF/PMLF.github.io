import React, {useState} from 'react'
import useMousePosition from '../../utils/hooks/useMousePosition'
import styled from 'styled-components'
import {darkTheme} from '../../themes'
import Logo from '../../images/pmlflogotransparent.svg'
import FootballFan from '../../images/claque.svg'
import FootballFanBorders from '../../images/claque_borders.svg'
import CursorMask from '../../images/cursor-mask.gif'

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
        background: url(${FootballFanBorders}) no-repeat;
        background-size: 100% auto;
        height: 300px;
        position: absolute;
        right: 0;
        bottom: 0;
        margin: 0;

        img {
            margin: 0;
            height: 100%;
            mask-image: url(${CursorMask});
            mask-repeat: no-repeat;
            mask-size: 150px;
        }
    }
`

export default function Landing() {

    const { x, y } = useMousePosition();
    const mask = {
        webkitMaskPositionX: 1920 - x,        
        webkitMaskPositionY: 1080 - y,
    }

    return (
        <SectionStyled>
            <h1>Pedro Fonseca</h1>
            <h2>Front End dev | Football fan</h2>
            <p>{x},{y}</p>
            <img src={Logo} alt="Logo" />
            <div className="footballFan">
                <img src={FootballFan} alt="Football fan" style={mask} />
            </div>
        </SectionStyled>
    )
}
