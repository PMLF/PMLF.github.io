import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../../themes'
import CloseIcon from '@material-ui/icons/Close';

const SidebarContainer = styled('div')`
    @media only screen and (min-width: calc(${darkTheme.breakpoint.md} + 1px)) {
        display:none;
    }
`

const SidebarStyled = styled('div')`
    height: 100%;
    width: 50%;
    background-color: ${darkTheme.colors.greyDarker};
    position:fixed;
    right: 0;
    top: 0;
    z-index: 10;
    padding: 80px 40px 0 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    -moz-box-shadow:    0px 0px 30px 0px rgba(20, 20, 20, 0.7);
    -webkit-box-shadow: 0px 0px 30px 0px rgba(20, 20, 20, 0.7);
    box-shadow:         px 0px 30px 0px rgba(20, 20, 20, 0.7);

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

const CloseSidebar = styled(CloseIcon)`
    color: white;
    && { font-size: 40px; }
    position: absolute;
    z-index: 11;
    right: 30px;
    top: 30px;
    
`

export default function SidebarMobile({ children, hidden, hiddenToggle }) {
    return (
        <SidebarContainer hidden={hidden}>
            <CloseSidebar onClick={() => hiddenToggle()} />
            <Backdrop onClick={() => hiddenToggle()} />
            <SidebarStyled>
                {children}
            </SidebarStyled>
        </SidebarContainer>
    )
}
