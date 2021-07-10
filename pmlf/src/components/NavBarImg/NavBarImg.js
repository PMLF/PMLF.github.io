import React from 'react'
import styled from 'styled-components'

const ImageStyled = styled('img')`
    max-height: 60px;
    margin: 0 20px 0 5%;
    height: 60px;
    &:hover {
        transform: none;
    }
    @media only screen and (max-width: 1200px) {
        height: 50px;
    }
`

export default function NavBarImg({ src, alt }) {
    return (
        <a href="/">
            <ImageStyled src={src} alt={alt} />
        </a>
    )
}
