import React from "react";
import allow from "@/images/AboutArea_yajirusi.png";
import Heading from "@/components/general/Heading";
import FONT_SIZE from "@/utils/fontSize";

const DEFAULT_AREA = {
	width: "80%",
	height: "100vh",
	margin: "auto",
	display: "flex",
	marginBottom: "0px",
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
						上越市とソロ旅の組み合わせはとても魅力的で、多くの人が一人で訪れています。
						<br />
						<br />
						都会の喧騒から離れて静かな木漏れ日を感じるもよし。
						<br />
						少し大人なレジャーを楽しむもよし。
						<br />
						<br />
						上越は、アナタの知らなかったアナタを知る事ができる場所です。
					</p>
					<p style={DEFAULT_TEXT_2}>上越の旅、一人ならではの感動を求めて</p>
					<img src={allow} alt="yajirusi" />
				</div>
			</div>
			<div style={DEFAULT_RIGHT}>
				<div style={DEFAULT_IMG_AREA}>
					<img src="/jpg/AboutFront.jpg" alt="Image01" style={IMG_1} />
					<img src="/jpg/AboutBack.jpg" alt="Image02" style={IMG_2} />
				</div>
			</div>
		</div>
	);
};

export default AboutArea;
