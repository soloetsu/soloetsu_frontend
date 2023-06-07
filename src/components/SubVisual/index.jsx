import React from "react";

const DEFAULT_STYLE = {
	fontSize: "10px",
	display: "flex",
	justifyContent: "flex-end",
};

const DEFAULT_STYLE_TEXT = {
	width: "344px",
	height: "184px",
	display: "block",
};

const DEFAULT_STYLE_H1 = {
	fontSize: "4rem",
};

const DEFAULT_STYLE_P = {
	fontSize: "3.2rem",
};

const DEFAULT_STYLE_IMG = {
	width: "1431px",
	height: "555px",
	backgroundColor: "#D9D9D9",
	marginLeft: "53px",
};

const SubVisual = ({ context, outline }) => {
	return (
		<div style={DEFAULT_STYLE}>
			<div style={DEFAULT_STYLE_TEXT}>
				<h1 style={DEFAULT_STYLE_H1}>{context}</h1>
				<p style={DEFAULT_STYLE_P}>{outline}</p>
			</div>
			<img style={DEFAULT_STYLE_IMG} src="" alt="" />
		</div>
	);
};

export default SubVisual;
