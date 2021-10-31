import React, { useState, useEffect } from "react";
import SectionWithTitle from "../SectionWithTitle";
import DescriptiveHorizontalCard from "../../components/DescriptiveHorizontalCard";
import styled from "styled-components";

//Images
import AuthorImg from "../../images/leeds.jpg";
import { darkTheme } from "../../themes";

const UlStyled = styled("ul")`
	margin-bottom: 26px;
`;

const AnchorStyled = styled("a")`
	color: ${darkTheme.colors.blue1};
	text-decoration: none;
	font-weight: 700;
	background-color: ${darkTheme.colors.greyLight};
	padding: 2px 4px;
	border-radius: 4px;
	&:hover {
		bacground-color: ${darkTheme.colors.greyMid};
	}
`;

export default function AuthorNote() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleWidthResize() {
			setWindowWidth(window.innerWidth);
		}

		window.addEventListener("resize", handleWidthResize);
		return () =>
			window.removeEventListener("resize", () => handleWidthResize);
	}, []);

	return (
		<SectionWithTitle>
			<DescriptiveHorizontalCard
				imgSrc={AuthorImg}
				imgAlt="PMLF's picture"
				title="About this website"
				roundImg
				imgFullHeight={windowWidth >= 768}
			>
				<UlStyled>
					<li>
						This is where I share my love for football, what I do
						for work, among other things.
					</li>
					<li>
						Everything was developed by me using{" "}
						<strong>React JS</strong>. It is{" "}
						<strong>open source</strong> and you can find all the
						code{" "}
						<AnchorStyled href="https://github.com/PMLF/PMLF.github.io">
							here
						</AnchorStyled>
						.
					</li>
					<li>
						All the vectorized images were done in{" "}
						<strong>Figma</strong> and they may or may not have
						taken me as much time as the rest of the website. 😁
					</li>
					<li>
						Feel free to{" "}
						<AnchorStyled href="https://www.linkedin.com/in/pedromlfonseca/">
							get in touch
						</AnchorStyled>
						!
					</li>
				</UlStyled>
			</DescriptiveHorizontalCard>
		</SectionWithTitle>
	);
}
