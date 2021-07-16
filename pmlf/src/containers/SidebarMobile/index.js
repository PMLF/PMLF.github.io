import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../../themes'

const SidebarStyled = styled('div')`
    height: 100%;
    width: 40%;
    background-color: ${darkTheme.colors.greyDarker};
    position:fixed;
    right: 0;
    top: 0;
    z-index: 10;
    padding: 80px 40px 0 40px;
    flex-direction: column;
    align-items: flex-start;

    & > li,
    & > a {
        margin: 10px 0;
    }

    & > a {
        display: flex;
        flex-direction: row;
        align-items: center;
        svg, img {
            margin: 0 20px 0 0;
        }
        p {
            position: static;
            transform: none;
            display: block;
            text-align: left;
            font-size: 16px;
        }
    }
`

const Backdrop = styled('div')`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${darkTheme.colors.greyDark};
    opacity: 0.6;
    z-index: 9;
`

const SidebarContainer = styled('div')`
    display: none;
    @media only screen and (max-width: ${darkTheme.breakpoint.md}) {
        display:flex;
    }
`

export default function SidebarMobile({ children }) {
    return (
        <SidebarContainer>
            <Backdrop />
            <SidebarStyled>
                {children}
            </SidebarStyled>
        </SidebarContainer>
    )
}
