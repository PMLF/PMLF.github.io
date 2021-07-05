import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../../themes'

const NavStyled = styled('nav')`
    background-color: ${darkTheme.colors.greyDarker};
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        color: white;
        display: flex;
        align-items: center;
        margin-left: 5%;
    }

    ul {
        margin: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 5%;

        li {
            font-size: 24px;
            list-style-type: none;
            margin-left: 20px;
            background-color: ${darkTheme.colors.greyMid};
            border-radius: 4px;

            &:first-of-type {
                margin-left: 0;
            }
            &:hover {
                transform: scale(1.02);
                background-color: ${darkTheme.colors.greyMidHover};
            }
            @media only screen and (max-width: 1200px) {
                font-size: 20px;
            }

            a {
                text-decoration: none;
                color: ${darkTheme.colors.white1};
                font-family: ${darkTheme.fontFamily.main};
                display: flex;
                align-items: center;
                padding: 5px 10px;

                svg {
                    margin-right: 8px;
                }
            }
        }
    }
`

export default function Header({ children }) {
    return (
        <NavStyled>
            {children}
        </NavStyled>
    )
}
