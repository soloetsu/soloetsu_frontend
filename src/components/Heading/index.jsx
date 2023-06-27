import React from "react";
import FONT_SIZE from "@/utils/fontSize";

const Heading = ({ fontSize, context }) => {
	const headingStyle = {
		fontSize: FONT_SIZE[fontSize],
		position: "relative",
	};

	const underlineStyle = {
		content: "''",
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "75px",
		height: "5px",
		backgroundColor: "#000000",
		background: "linear-gradient(90deg, #FFA800 0%, #FFD600 100%)",
	};

	return (
		<h1 style={headingStyle}>
			{context}
			<span style={underlineStyle}></span>
		</h1>
	);
};

export default Heading;
