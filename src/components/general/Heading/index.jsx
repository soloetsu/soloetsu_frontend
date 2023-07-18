import React from "react";
import FONT_SIZE from "@/utils/fontSize";

const Heading = ({ fontSize, context, margin }) => {
	const headingStyle = {
		fontSize: FONT_SIZE[fontSize],
		position: "relative",
		margin: margin,
		marginBottom: "30px",
		//太字のほうがよかったら消して
		fontWeight: "300",
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
