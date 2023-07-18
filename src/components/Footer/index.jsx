import React from "react";

const MAIN = {
	width: "100%" /* 画面の幅 */,
	height: "45vh" /* 画面の高さ */,
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
	top: "76%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	padding: "1px",
};

const LINE = {
	justifyContent: "center",
	color: "white",
	position: "absolute",
	top: "62%",
	left: "11%",
	width: "79%",
	alignItems: "center",
};

const LOGO = {
	position: "absolute",
	top: "35%",
	left: "51%",
	transform: "translate(-50%, -50%)",
	width: "120px",
};

const MAIN_COVER = {
	width: "100%",
	height: "100%",
	position: "absolute",
	top: "0%",
	left: "0%",
	backgroundColor: "black",
	opacity: "0.1",
};

const FooterTest = () => {
	return (
		<div
			style={{
				position: "relative",
			}}
		>
			<img
				src="https://d1f5hsy4d47upe.cloudfront.net/bc/bcc0835efc897e90a43da8eed177dc28_t.jpeg"
				alt="メイン画像"
				style={MAIN}
			/>
			<div style={MAIN_COVER}></div>
			<a href="">
				<img src="./png/penguin03.png" alt="ロゴ" style={LOGO} />
			</a>
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
