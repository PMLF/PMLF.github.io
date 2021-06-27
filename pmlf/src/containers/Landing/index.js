import React from 'react'
import styled from 'styled-components'
import bgImg from '../../images/bg.png'

const SectionStyled = styled.section`
    height: 100%;
`

const BgImage = styled.img`
    height: 100%;
    max-width:100%;
`

export default function Landing() {
    return (
        <SectionStyled>
            <BgImage src={bgImg} />
        </SectionStyled>
    )
}
