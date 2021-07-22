import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../../themes'

const NavStyled = styled('nav')`
    background-color: ${darkTheme.colors.greyDarker};
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        margin: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 5%;
    }
`

export default function Header({ children }) {
    return (
        <NavStyled>
            {children}
        </NavStyled>
    )
}
