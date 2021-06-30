import React from 'react'
import styled from 'styled-components'
import {darkTheme} from '../../themes'

const SectionStyled = styled('section')`
    ${() => `
        height: 900px;
        background-color: ${darkTheme.colors.greyDark};
    ` }
`

export default function Landing() {
    return (
        <SectionStyled>
            
        </SectionStyled>
    )
}
