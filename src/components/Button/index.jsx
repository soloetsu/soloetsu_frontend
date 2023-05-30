import React from "react";
import mergeStyle from "@/utils/mergeStyle";

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

const Button = ({ url, context, style }) => {
	const styleMerged = mergeStyle(DEFAULT_STYLE, style);
	return (
		<a href={url}>
			<button style={styleMerged}>{context}</button>
		</a>
	);
};

export default Button;
