import React from 'react'
import { Link } from 'react-router-dom'
import { SvgIcon } from '@material-ui/core';
import styled from 'styled-components';
import { darkTheme } from '../../themes';

const LiStyled = styled('li')`
    font-size: 24px;
    list-style-type: none;
    margin-left: 20px;
    background-color: ${darkTheme.colors.greyMid};
    border-radius: 4px;

    &:hover {
        transform: scale(1.02);
        background-color: ${darkTheme.colors.greyMidHover};
    }
    @media only screen and (max-width: ${darkTheme.breakpoint.xl}) {
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
`

export default function NavBarButton({link, icon, text, fontSize=28}) {
    return (
        <LiStyled>
            <Link to={link}>
                <SvgIcon
                    component={icon}
                    style={{fontSize: fontSize}}
                />
                {` ${text}`}
            </Link>
        </LiStyled>
    )
}
