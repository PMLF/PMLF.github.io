import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../../themes'
import BuilderImg from '../../images/workingonit.png'

const SectionStyled = styled('section')`
    padding: 50px;
    text-align: center;
    background-color: ${darkTheme.colors.greyLight};
    img {
        width: 20%;
        min-width: 200px;
    }
`

export default function WorkingOnIt() {
    return (
        <SectionStyled>
            <img src={BuilderImg} alt="Website's builder" />
        </SectionStyled>
    )
}
