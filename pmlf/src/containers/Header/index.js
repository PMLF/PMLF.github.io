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
            svg, img:nth-of-type(n+2) {
                font-size: 40px;
                height: 40px;
                margin: 0 20px;

                &:hover {
                    transform: scale(1.1);
                    transition: 0.1s all;
                }
            }
            svg:first-of-type {
                border-radius: 6px;
                &:hover {
                    background-image: linear-gradient(#0E76A8, #084561);
                }
            }
            svg:nth-of-type(2) {
                border-radius: 50%;
                &:hover {
                    background-image: linear-gradient(#0D2634, #266F99);
                }
            }
            svg:nth-of-type(3) {
                border-radius: 50%;
                &:hover {
                    background-image: linear-gradient(#0F70D0, #4FD8FF);
                }
            }
            svg:nth-of-type(4) {
                border-radius: 12px;
                &:hover {
                    background-image: linear-gradient(#3E6BC9, #B63A9D, #FC5245, #FEDA55);
                };
            }
            img:nth-of-type(2) {
                border-radius: 50%;
                &:hover {
                    background-image: linear-gradient(#118A3D, #118A3D, #1A1414);
                }
            }
            img:nth-of-type(3) {
                border-radius: 6px;
                &:hover {
                    background-color: #CD0001;
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
