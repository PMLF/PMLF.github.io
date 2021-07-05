import React from 'react'
import styled from 'styled-components'
import { SvgIcon } from '@material-ui/core'
import { darkTheme } from '../../themes'

export default function SocialMediaButton({ href, icon, colorArray, borderRadius, label, alt=null, download=null }) {
    
    const SocialStyled = styled('a')`
        position: relative;
        svg, img {
            border-radius: ${borderRadius};
            &:hover {
                background-image: linear-gradient(${colorArray.join(',')});
            }
            &:hover + p {
                display: block;
            }
        }
        p {
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            top: 28px;
            display: none;
            font-size: 14px;
            font-family: ${darkTheme.fontFamily.main};
            text-align: center;
            width: 100px;
        }
    `

    return (
        <SocialStyled href={href} target="_blank" rel="noopener noreferrer">
            {
                typeof icon === "string"
                    ? <img src={icon} alt={alt} download={download} />
                    : <SvgIcon component={icon} />
            }
            <p>{label}</p>
        </SocialStyled>
    )
}
