import React from 'react';

export type ContactTemplateProps = {
	firstName: string
}

const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = (props) => {
	return (
		<div>
			<h1>{props.firstName}</h1>
		</div>
	);
};

export default ContactTemplate;
