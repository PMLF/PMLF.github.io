import React from "react";
import SectionWithTitle from "../SectionWithTitle";
import DescriptiveHorizontalCard from "../../components/DescriptiveHorizontalCard";
import styled from "styled-components";

//Images
import UALogo from "../../images/ua.jpg";
import EditLogo from "../../images/edit.png";

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
			<DescriptiveHorizontalCard
				imgSrc={EditLogo}
				imgAlt="EDIT logo"
				title="Front End Development Course"
				subtitle="EDIT - Disruptive Digital Education"
			>
				<UlStyled>
					<li>
						Looking to specialize myself further as a{" "}
						<strong>Front End Web Developer</strong>, I found in
						EDIT's 5-month intensive course the perfect fit.
					</li>
					<li>
						I reviewed some of the HTML5, CSS3 and JavaScript basics
						but also got to take my first few steps with{" "}
						<strong>React JS</strong>, a technology that I had been
						eager to learn due to its popularity, efficiency and
						philosophy of reutilization.
					</li>
					<li>
						The last project involved Centro Cultural de Belém (
						<a href="ccb.pt">ccb.pt</a>), and it consisted of
						preparing the launch of an app to bring this brand to
						the digital world. I worked closely with UIUX and
						Marketing teams as their sole developer and created a{" "}
						<a href="https://github.com/PMLF/centro-cultural-belem-projeto360">
							website
						</a>{" "}
						for the launch campaign of our app.
					</li>
				</UlStyled>
			</DescriptiveHorizontalCard>
		</SectionWithTitle>
	);
}
