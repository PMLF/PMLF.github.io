import React from "react";
import SectionWithTitle from "../SectionWithTitle";
import DescriptiveHorizontalCard from "../../components/DescriptiveHorizontalCard";
import styled from "styled-components";

//Images
import UALogo from "../../images/ua.jpg";
import EditLogo from "../../images/edit.png";
import TULLogo from "../../images/lodzka.png";
import EngCentreLogo from "../../images/engcentre.jpg";

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
						The last project involved{" "}
						<a href="https://www.ccb.pt/">
							Centro Cultural de Belém
						</a>{" "}
						, and it consisted of preparing the launch of an app to
						bring this brand to the digital world. I worked closely
						with UIUX and Marketing teams as their sole developer
						and created a{" "}
						<a href="https://github.com/PMLF/centro-cultural-belem-projeto360">
							website
						</a>{" "}
						for the launch campaign of our app.
					</li>
				</UlStyled>
			</DescriptiveHorizontalCard>
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
				imgSrc={TULLogo}
				imgAlt="Politechnika Łódzka logo"
				title="ERASMUS+ Mobility Semester"
				subtitle="Politechnika Łódzka | TUŁ"
			>
				<UlStyled>
					<li>
						I had the opportunity to go and live in{" "}
						<strong>Łódź, Poland</strong>, for a semester. I studied
						under foreign professors and got to drink in the
						knowledge and culture of another country in first
						person.
					</li>
					<li>
						Going alone on this journey joined with the fact that I
						was in a country where English isn't that popular and
						whose language I knew close to nothing of meant I was{" "}
						<strong>way out of my comfort zone</strong> and had a
						lot of work to do to get myself around this completely
						new place. I loved that about it because I got to grow a
						lot.
					</li>
					<li>
						I came back knowing a bit of Polish, having made a whole
						new array of friends, having visited different cities
						and countries and having improved my skills, especially
						my <strong>soft skills</strong>.
					</li>
					<li>
						Another thing I learned was that I don't like pierogi
						(Polish traditional dumplings) that much, I'd rather
						have a big doner kebab! *shuckles*
					</li>
				</UlStyled>
			</DescriptiveHorizontalCard>
			<DescriptiveHorizontalCard
				imgSrc={EngCentreLogo}
				imgAlt="The English Centre logo"
				title="Certificate in Advanced English | C1 level"
				subtitle="The English Centre"
			>
				<UlStyled>
					<li>
						For six years I had English classes with Brittish,
						American and Canadian teachers.
					</li>
					<li>
						These days it is critical to have great{" "}
						<strong>fluency in English</strong> and this school
						helped me massively getting there.
					</li>
					<li>
						After a few different exams, I got the{" "}
						<strong>C1 level certified by Cambridge</strong>. I got
						a <strong>196 mark out of 210</strong> after being
						evaluated in many aspects such as reading, writing,
						listening and speaking. Four points away from a 200 mark
						which would mean me getting the C2 level, but I am proud
						of my achievement there.
					</li>
				</UlStyled>
			</DescriptiveHorizontalCard>
		</SectionWithTitle>
	);
}
