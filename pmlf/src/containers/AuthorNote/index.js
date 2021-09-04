import React from "react";
import SectionWithTitle from "../SectionWithTitle";
import DescriptiveHorizontalCard from "../../components/DescriptiveHorizontalCard";
import styled from "styled-components";

//Images
import AuthorImg from "../../images/leeds.jpg";

const UlStyled = styled("ul")`
	margin-bottom: 26px;
`;

export default function AuthorNote() {
	return (
		<SectionWithTitle>
			<DescriptiveHorizontalCard
				imgSrc={AuthorImg}
				imgAlt="PMLF's picture"
				title="About this website"
				roundImg
				imgFullHeight
			>
				<UlStyled>
					<li>
						Since I was a kid I always got fascinated by websites
						and how they were created. I had no idea how they were
						made.
					</li>
					<li>
						Here I have a space to tell my journey to those who
						might be interested. From school, to work and even
						hobbies, I'm sharing it all here.
					</li>
					<li>
						This website was developed by me using React JS. It is
						open source and you can find all the code{" "}
						<a href="https://github.com/PMLF/PMLF.github.io">
							here
						</a>
						.
					</li>
					<li>
						Feel free to send me feature or improvement suggestions!
					</li>
				</UlStyled>
			</DescriptiveHorizontalCard>
		</SectionWithTitle>
	);
}
