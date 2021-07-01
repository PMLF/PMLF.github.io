import React from 'react'
import styled from 'styled-components'

const ImageStyled = styled('img')`
    max-height: 60px;
    margin-left: 90px;
`

export default function NavBarImg({ src, alt }) {
    return (
        <ImageStyled src={src} alt={alt} />
    )
}
