import React from "react";
import SectionWithTitle from "../SectionWithTitle";
import DescriptiveHorizontalCard from "../../components/DescriptiveHorizontalCard";
import UALogo from "../../images/ua.jpg";
import styled from "styled-components";

const UlStyled = styled("ul")`
	margin-bottom: 26px;
`;

export default function Background() {
	return (
		<SectionWithTitle
			title="Background"
			subtitle="Here you'll find some of skills and studies"
		>
			<DescriptiveHorizontalCard
				imgSrc={UALogo}
				imgAlt="Universidade de Aveiro logo"
				title="Software Engineering Bachelor's degree"
				subtitle="Universidade de Aveiro | DETI"
			>
				<UlStyled>
					<li>
						I chose Aveiro because it is{" "}
						<strong>one of the best engineering schools</strong> in
						Portugal, never disregarding the fact that it's a
						beautiful place to live in.
					</li>
					<li>
						I took my first steps as a dev here by participated in
						many solo and team projects.
					</li>
					<li>
						I went from Python to Java, learned a bit of Assembly
						and about how compilers make our code do wonders. The
						classes where I enjoyed myself the most were the ones
						related to <strong>Web development</strong> and to{" "}
						<strong>how users interact</strong> with the what we
						code.
					</li>
				</UlStyled>
			</DescriptiveHorizontalCard>
		</SectionWithTitle>
	);
}
