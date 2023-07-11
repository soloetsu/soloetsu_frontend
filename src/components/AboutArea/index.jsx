import React from "react";
import allow from "@/images/AboutArea_yajirusi.png";
import Heading from "@/components/Heading";
import FONT_SIZE from "@/utils/fontSize";

const DEFAULT_AREA = {
	width: "80%",
	height: "100vh",
	margin: "auto",
	display: "flex",
};

const DEFAULT_LEFT = {
	width: "50%",
	display: "flex",
	marginTop: "60px",
	marginRight: "30px",
};

const DEFAULT_RIGHT = {
	width: "50%",
};

const DEFAULT_TEXT_AREA = {
	width: "70%",
};

const DEFAULT_BIGTEXT_AREA = {
	width: "30%",
};

const DEFAULT_BIGTEXT = {
	fontSize: "70px",
	color: "#B1C7CF",
	fontFamily: "'playfair display', serif",
	transform: "rotate(-90deg)",
	// transformOrigin: "left bottom",
	// whiteSpace: "nowrap",
	margin: "100px 0px 0px -75px",
	letterSpacing: "20px",
	width: "fit-content",
};

const DEFAULT_TEXT = {
	fontSize: FONT_SIZE["SMALL"],
	marginTop: "60px",
	marginBottom: "30px",
};

const DEFAULT_TEXT_2 = {
	fontSize: FONT_SIZE["MEDIUM"],
	marginBottom: "100px",
};

const DEFAULT_IMG_AREA = {
	position: "relative",
	width: "100%",
	height: "600px",
	marginTop: "60px",
	marginLeft: "50px",
};

const IMG_1 = {
	position: "absolute",
	width: "400px",
	height: "400px",
	left: "120px",
	top: "0px",
	zIndex: "1",
};

const IMG_2 = {
	position: "absolute",
	width: "280px",
	height: "350px",
	left: "0px",
	bottom: "0",
	zIndex: "2",
};

const AboutArea = () => {
	return (
		<div style={DEFAULT_AREA}>
			<div style={DEFAULT_LEFT}>
				<div style={DEFAULT_BIGTEXT_AREA}>
					<div style={DEFAULT_BIGTEXT}>ABOUT</div>
				</div>
				<div style={DEFAULT_TEXT_AREA}>
					<Heading context="上越とソロ旅" fontSize="LARGE" />
					<p style={DEFAULT_TEXT}>
						上越市とソロ旅の組み合わせはとても魅力的で多くの人がソロで訪れています。～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
					</p>
					<p style={DEFAULT_TEXT_2}>上越の旅、一人ならではの感動を求めて</p>
					<img src={allow} alt="yajirusi" />
				</div>
			</div>
			<div style={DEFAULT_RIGHT}>
				<div style={DEFAULT_IMG_AREA}>
					<img src="https://picsum.photos/300/300" alt="Image01" style={IMG_1} />
					<img src="https://picsum.photos/200/250" alt="Image02" style={IMG_2} />
				</div>
			</div>
		</div>
	);
};

export default AboutArea;
