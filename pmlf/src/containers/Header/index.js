import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../../themes'

const NavStyled = styled('nav')`
    ${() => `
        background-color: ${darkTheme.colors.greyDarker};
        padding: 20px;

        ul {
            margin: 10px;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            padding-right: 100px;

            li {
                font-size: 24px;
                list-style-type: none;
                margin-left: 20px;
                background-color: ${darkTheme.colors.greyMid};
                padding: 5px 10px;
                border-radius: 4px;

                &:first-of-type {
                    margin-left: 0;
                }
                &:hover {
                    transform: scale(1.02);
                    background-color: ${darkTheme.colors.greyMidHover};
                }

                a {
                    text-decoration: none;
                    color: ${darkTheme.colors.white1};
                    font-family: ${darkTheme.fontFamily.main};
                    display: flex;
                    align-items: center;
                    
                    svg {
                        margin-right: 8px;
                    }
                }
            }
        }
    `}
`

export default function Header(props) {
    return (
        <NavStyled>
          <ul>
            {props.children}
          </ul>
        </NavStyled>
    )
}
