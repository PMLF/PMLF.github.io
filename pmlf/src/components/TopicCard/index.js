import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../themes";

const DivStyled = styled("div")`
	height: 500px;
	width: 30%;
	background-color: red;
	margin: 5% 50px;
	border-radius: 20px;
`;

export default function TopicCard() {
	return <DivStyled></DivStyled>;
}
