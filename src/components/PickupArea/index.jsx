import React from "react";
import Heading from "@/components/Heading";
import FONT_SIZE from "@/utils/fontSize";

const DEFAULT_AREA = {
	width: "80%",
	margin: "auto",
};

const DEFAULT_BOX_AREA = {
	display: "flex",
	position: "relative",
	marginTop: "130px",
};

const DEFAULT_BOX = {
	display: "flex",
	width: "25%",
	position: "relative",
	marginRight: "6%",
};

const DEFAULT_TITLE = {
	MsWritingMode: "tb-rl",
	writingMode: "vertical-rl",
	fontSize: FONT_SIZE["SMALL"],
	marginTop: "65px",
	marginRight: "15px",
};

const DEFAULT_IMG = {
	width: "100%",
	height: "25vw",
	objectFit: "cover",
	boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)",
};

const DEFAULT_NUM_AREA = {
	position: "absolute",
	color: "rgba(132, 169, 183, 0.85)",
	top: "-70px",
	left: "20px",
};

const DEFAULT_NUM_TITLE = {
	fontSize: FONT_SIZE["MEDIUM"],
};

const DEFAULT_NUM = {
	fontSize: "85px",
	fontFamily: "'Cardo', serif",
	textShadow: "2px 2px 0px rgba(255, 255, 255, 0.80)",
	lineHeight: "0.8",
};

const DEFAULT_NUM_ALIGN = {
	position: "absolute",
	width: "3px",
	height: "100%",
	backgroundColor: "rgba(132, 169, 183, 0.85)",
	top: "0",
	left: "-20px",
};

const DEFAULT_BACK = {
	position: "absolute",
	width: "90vw",
	height: "15vw",
	zIndex: "-1",
	top: "30%",
	left: "-13%",
	backgroundImage:
		"linear-gradient(168deg, rgba(125, 221, 228, 1) 15%, rgba(255, 240, 162, 0.42) 80%, rgba(193, 235, 237, 0) 95%)",
};

const DEFAULT_BIGTEXT = {
	position: "absolute",
	fontSize: "80px",
	fontFamily: "'playfair display', serif",
	color: "#B1C7CF",
	letterSpacing: "20px",
	right: "9%",
};

const PickupArea = ({ props }) => {
	return (
		<div style={DEFAULT_AREA}>
			<Heading context="定番のプラン" />
			<div style={DEFAULT_BOX_AREA}>
				{props.map((prop, index) => {
					return (
						<div style={DEFAULT_BOX} key={index}>
							<p style={DEFAULT_TITLE}>{prop.title}</p>
							<a href={prop.url} style={{ textDecoration: "none" }}>
								<img src={prop.img} alt="画像1" style={DEFAULT_IMG} />
							</a>
							<div style={DEFAULT_NUM_AREA}>
								<div style={DEFAULT_NUM_TITLE}>PICKUP</div>
								<p style={DEFAULT_NUM}>{index + 1}</p>
								<div style={DEFAULT_NUM_ALIGN}></div>
							</div>
						</div>
					);
				})}
				<div style={DEFAULT_BACK}></div>
			</div>
			<div style={DEFAULT_BIGTEXT}>PICKUP</div>
		</div>
	);
};

export default PickupArea;
