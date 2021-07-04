import React from 'react'
import styled from 'styled-components'
import { SvgIcon } from '@material-ui/core'

export default function SocialMediaButton({ href, icon, colorArray, borderRadius, alt=null, download=null }) {
    
    const SocialStyled = styled('a')`
        svg, img {
            border-radius: ${borderRadius};
            &:hover {
                background-image: linear-gradient(${colorArray.join(',')});
            }
        }
    `

    return (
        <SocialStyled href={href} target="_blank" rel="noopener noreferrer">
            {
                typeof icon === "string"
                    ? <img src={icon} alt={alt} download={download} />
                    : <SvgIcon component={icon} />
            }
        </SocialStyled>
    )
}
