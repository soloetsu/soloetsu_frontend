import React from "react";

const MAIN = {
	width: "100%" /* 画面の幅 */,
	height: "75vh" /* 画面の高さ */,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	maxWidth: "100%",
	maxHeight: "100%",
};

const FONT = {
	color: "white",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	top: "59%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	padding: "1px",
};

const LINE = {
	justifyContent: "center",
	color: "white",
	position: "absolute",
	top: "53%",
	left: "11%",
	width: "79%",
	alignItems: "center",
};

const FooterTest = () => {
	return (
		<div>
			<img
				src="https://d1f5hsy4d47upe.cloudfront.net/bc/bcc0835efc897e90a43da8eed177dc28_t.jpeg"
				alt="メイン画像"
				style={MAIN}
			/>
			<hr style={LINE} />
			<div>
				<a style={FONT}>
					<p>© 2023 SOLO ETSU</p>
				</a>
			</div>
		</div>
	);
};

export default FooterTest;
