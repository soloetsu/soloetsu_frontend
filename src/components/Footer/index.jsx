import React from "react";

const MAIN = {
	width: "100%" /* 画面の幅 */,
	height: "75vh" /* 画面の高さ */,
	display: "flex",
	justifycontent: "center",
	alignitems: "center",
	maxwidth: "100%",
	maxheight: "100%",
};

const FONT = {
	color: "white",
	alignitems: "center",
	justifycontent: "center",
	position: "absolute",
	top: "59%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	padding: "1px",
};

const LINE = {
	justifycontent: "center",
	color: "white",
	position: "absolute",
	top: "53%",
	left: "11%",
	width: "79%",
	alignitems: "center",
};

const FooterTest = ({ img, context }) => {
	return (
		<div>
			<img src={img} alt="メイン画像" style={MAIN} />
			<hr style={LINE} />
			<div>
				<a style={FONT}>{context}</a>
			</div>
		</div>
	);
};

export default FooterTest;
