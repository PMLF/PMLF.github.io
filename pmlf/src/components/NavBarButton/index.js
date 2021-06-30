import React from 'react'
import { Link } from 'react-router-dom'
import { SvgIcon } from '@material-ui/core';

export default function NavBarButton({link, icon, text, fontSize=28}) {
    return (
        <li>
            <Link to={link}>
                <SvgIcon
                    component={icon}
                    style={{fontSize: fontSize}}
                />
                {` ${text}`}
            </Link>
        </li>
    )
}
