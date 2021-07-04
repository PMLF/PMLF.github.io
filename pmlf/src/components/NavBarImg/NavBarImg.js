import React from 'react'
import styled from 'styled-components'

const ImageStyled = styled('img')`
    max-height: 60px;
    margin: 0 20px 0 90px;
`

export default function NavBarImg({ src, alt }) {
    return (
        <a href="/">
            <ImageStyled src={src} alt={alt} />
        </a>
    )
}
