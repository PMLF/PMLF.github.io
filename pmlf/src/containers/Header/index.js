import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../../themes'

const NavStyled = styled('nav')`
    ${() => `
        background-color: ${darkTheme.colors.greyDarker};
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            color: white;
            display: flex;
            align-items: center;

            a {
                text-decoration: none;
                color: ${darkTheme.colors.white1};
            }
            a:first-of-type {
                margin: 0 20px 0 90px;
                height: 60px;
                &:hover {
                    transform: none;
                }
            }
            a:nth-of-type(n+2) {
                svg,
                img {
                    font-size: 40px;
                    height: 40px;
                    margin: 0 20px;
    
                    &:hover {
                        transform: scale(1.1);
                        transition: 0.1s all;
                    }
                }
            }
        }

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
                    padding: 5px 10px;
                    
                    svg {
                        margin-right: 8px;
                    }
                }
            }
        }
    `}
`

export default function Header({ children }) {
    return (
        <NavStyled>
            {children}
        </NavStyled>
    )
}
