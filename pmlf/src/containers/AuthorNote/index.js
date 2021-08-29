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
				id="zzzzzzzzzzzzzzzzz"
				imgSrc={AuthorImg}
				imgAlt="PMLF's picture"
				title="A note about this website"
				roundImg
			>
				<UlStyled>
					<li>
						Since I was a little kid I always got fascinated about
						how a website could be created and had no idea how to do
						one.
					</li>
					<li>
						Here I have a space to show my journey to those who
						might be interested. From school, to work and even
						hobbies, I'm sharing it all in this space.
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
