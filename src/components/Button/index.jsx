import React from "react";

const Button = ({ url, context }) => {
	return (
		<a href={url}>
			<button>{context}</button>
		</a>
	);
};

export default Button;
