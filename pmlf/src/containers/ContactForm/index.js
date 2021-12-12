import React from "react";
import SectionWithTitle from "../SectionWithTitle";
import styled from "styled-components";
import { Formik } from "formik";
import TextField from "../../components/Form/TextField";
import Button from "../../components/Button";
import { Send } from "@material-ui/icons";

const FormikWrapper = styled(Formik)`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const FormStyled = styled("form")`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const ButtonStyled = styled(Button)`
	margin-top: 16px;
`;

const formValidation = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = "Let me know what to call you by 😅";
	}
	if (!values.message) {
		errors.message = "Did you forget what you wanted to say?";
	}
	if (!values.email) {
		errors.email = "Let me know how to get to you";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = "Seems like there's something wrong with your email 🤔";
	}
	return errors;
};

export default function ContactForm() {
	return (
		<SectionWithTitle title="Get in touch">
			<FormikWrapper
				initialValues={{
					name: "",
					email: "",
					subject: "",
					message: "",
				}}
				validate={(values) => formValidation(values)}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<FormStyled onSubmit={handleSubmit}>
						<TextField
							type="name"
							name="name"
							placeholder="Your name..."
							handleChange={handleChange}
							handleBlur={handleBlur}
							value={values.name}
							error={errors.name}
							touched={touched.name}
							required={true}
						/>
						<TextField
							type="email"
							name="email"
							placeholder="Your email..."
							handleChange={handleChange}
							handleBlur={handleBlur}
							value={values.email}
							error={errors.email}
							touched={touched.email}
							required={true}
						/>
						<TextField
							type="subject"
							name="subject"
							placeholder="Subject..."
							handleChange={handleChange}
							handleBlur={handleBlur}
							value={values.subject}
							error={errors.subject}
							touched={touched.subject}
							required={false}
						/>
						<TextField
							type="message"
							name="message"
							placeholder="Your message..."
							handleChange={handleChange}
							handleBlur={handleBlur}
							value={values.message}
							error={errors.message}
							touched={touched.message}
							required={true}
						/>
						<ButtonStyled
							type="submit"
							disabled={isSubmitting}
							icon={Send}
							label="Send"
						>
							Submit
						</ButtonStyled>
					</FormStyled>
				)}
			</FormikWrapper>
		</SectionWithTitle>
	);
}
