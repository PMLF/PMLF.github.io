import React from "react";
import styled from "styled-components";
import { SvgIcon } from "@material-ui/core";
import { darkTheme } from "../../themes";

const SocialStyled = styled("a")`
	position: relative;
	text-decoration: none;
	color: ${darkTheme.colors.white1};

	svg,
	img {
		font-size: 40px;
		height: 40px;
		margin: 0 20px;
		${({ borderRadius }) => `border-radius: ${borderRadius};`}

		&:hover {
			transform: scale(1.1);
			transition: 0.1s all;
			${({ colorArray }) =>
				`background-image: linear-gradient(${colorArray.join(",")});`}
		}
		&:hover + p {
			display: block;
		}
	}
	p {
		position: absolute;
		left: 50%;
		transform: translate(-50%);
		top: 34px;
		display: none;
		font-size: 14px;
		font-family: ${darkTheme.fontFamily.main};
		text-align: center;
		width: 100px;
	}
	@media only screen and (max-width: ${darkTheme.breakpoint.xl}) {
		svg,
		img {
			font-size: 32px;
			height: 32px;
			margin: 0 12px;
		}
		p {
			top: 26px;
		}
	}
`;

export default function SocialMediaButton({
	href,
	icon,
	colorArray,
	borderRadius,
	label,
	alt = null,
	download = null,
}) {
	return (
		<SocialStyled
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			borderRadius={borderRadius}
			colorArray={colorArray}
		>
			{typeof icon === "string" ? (
				<img src={icon} alt={alt} download={download} />
			) : (
				<SvgIcon component={icon} />
			)}
			<p>{label}</p>
		</SocialStyled>
	);
}
