import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../../themes";
import { capitalizeFirstLetterOfString } from "../../../utils";

const Wrapper = styled("div")`
	font-family: ${darkTheme.fontFamily.main};
	width: 100%;
`;

const Label = styled("p")`
	margin-bottom: 4px;
`;

const InputStyled = styled("input")`
	width: calc(100% - 32px);
	line-height: 40px;
	font-size: 20px;
	border: none;
	border-radius: 10px;
	padding: 0 16px;

	::placeholder {
		color: ${darkTheme.colors.placeholderText};
	}
`;

const ErrorMessage = styled("p")`
	color: ${darkTheme.colors.red1};
	margin: 0;
`;

const Required = styled("span")`
	color: ${darkTheme.colors.requiredAsterisk};
`;

export default function TextField({
	type,
	name,
	placeholder,
	handleChange,
	handleBlur,
	value,
	error,
	touched,
	required,
}) {
	return (
		<Wrapper>
			<Label>
				{capitalizeFirstLetterOfString(name)}{" "}
				{required && <Required>*</Required>}
			</Label>
			<InputStyled
				type={type}
				name={name}
				onChange={handleChange}
				onBlur={handleBlur}
				value={value}
				placeholder={placeholder}
			/>
			<ErrorMessage>{error && touched && error}</ErrorMessage>
		</Wrapper>
	);
}
