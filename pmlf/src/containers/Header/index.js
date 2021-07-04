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

        svg {
            margin-right: 20px;
        }
        div {
            color: white;
            display: flex;
            align-items: center;

            img:first-of-type {
                margin: 0 20px 0 90px;
                height: 60px;
                &:hover {
                    transform: none;
                }
            }
            svg, img:last-of-type {
                font-size: 40px;
                height: 40px;
                margin: 0 20px;

                &:hover {
                    transform: scale(1.1);
                    transition: 0.1s all;
                    // background-image: linear-gradient(red, yellow);
                    // border-radius: 10px;
                }
            }
            img:last-of-type:hover {
                background-image: linear-gradient(#118A3D, #118A3D, #1A1414);
                border-radius: 50%;
            }
            svg:first-of-type:hover {
                background-image: linear-gradient(#0E76A8, #084561);
                border-radius: 6px;
            }
            svg:nth-of-type(2):hover {
                background-image: linear-gradient(#0D2634, #266F99);
                border-radius: 50%;
            }
            svg:nth-of-type(3):hover {
                background-image: linear-gradient(#0F70D0, #4FD8FF);
                border-radius: 50%;
            }
            svg:nth-of-type(4):hover {
                background-image: linear-gradient(#3E6BC9, #B63A9D, #FC5245, #FEDA55);
                border-radius: 12px;
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
