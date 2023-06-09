import React from "react";
import FONT_SIZE from "@/utils/fontSize";

const Heading = ({ fontSize, context }) => {
	const headingStyle = {
		fontSize: FONT_SIZE[fontSize],
		position: "relative",
		marginBottom: "40px",
	};

	const underlineStyle = {
		content: "''",
		position: "absolute",
		bottom: "-8px",
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
