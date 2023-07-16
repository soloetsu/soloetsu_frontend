import React from "react";

const DEFAULT_STYLE = {
	display: "inline-block",
	padding: "0.5rem 1rem",
	border: "1px solid #ccc",
	borderRadius: "0.25rem",
	backgroundColor: "#fff",
	fontSize: "1rem",
	fontWeight: "400",
	lineHeight: "1.5",
	color: "#212529",
	textAlign: "center",
	whiteSpace: "nowrap",
	verticalAlign: "middle",
	cursor: "pointer",
	userSelect: "none",
};

const Button = ({ url, context }) => {
	return (
		<a href={url}>
			<button style={DEFAULT_STYLE}>{context}</button>
		</a>
	);
};

export default Button;
