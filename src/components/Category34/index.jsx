import React from "react";

const DEFAULT_STYLE = {
	display: "flex",
	padding: "0 38px 0 0",
};

const DEFAULT_STYLE_IMG = {
	width: "500px",
	height: "337px",
};

const DEFAULT_STYLE_TEXT = {
	padding: "27px 0 0 0",
	textAlign: "center",
	fontSize: "1rem",
};

const Category34 = ({ url, img, context }) => {
	return (
		<div style={DEFAULT_STYLE}>
			<a href={url}>
            	<img src={img} alt="no image" style={DEFAULT_STYLE_IMG} />
				<p style={DEFAULT_STYLE_TEXT}>{context}</p>
			</a>
		</div>
	);
};

export default Category34;
