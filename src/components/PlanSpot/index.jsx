import React from "react";
import Heading from "@/components/Heading";
import FONT_SIZE from "@/utils/fontSize";

const PLAN_STYLE = {
	display: "flex",
	flexDirection: "column",
	width: "60%",
	margin: "auto",
	marginBottom: "24px",
};

const CONTEXT_STYLE = {
	display: "flex",
	width: "50%",
	marginBottom: "20px",
};

const SPOT_STYLE = {
	display: "flex",
};

const OUTLINE_STYLE = {
	display: "flex",
	flexDirection: "column",
	marginLeft: "72px",
	width: "60%",
	height: "350px",
};

const DEFAULT_STYLE_IMG = {
	width: "40%",
	height: "350px",
	borderRadius: "0 32px 0 32px",
};

const BORDER_STYLE = {
	borderLeft: "6px solid #000000",
	marginLeft: "3.5%",
	paddingRight: "5%",
	height: "400px",
};

const ICON_STYLE = {
	width: "92px",
	height: "92px",
	marginRight: "68px",
	backgroundColor: "red",
};

const PlanSpot = ({ title, name, outline, src }) => {
	return (
		<div style={PLAN_STYLE}>
			<div style={CONTEXT_STYLE}>
				<div style={ICON_STYLE}></div>
				<Heading fontSize="MEDIUM" context={title} />
			</div>
			<div style={SPOT_STYLE}>
				<div style={BORDER_STYLE}></div>
				<img style={DEFAULT_STYLE_IMG} src={src} alt="" />
				<div style={OUTLINE_STYLE}>
					<p style={{ fontSize: FONT_SIZE["MEDIUM"] }}>{name}</p>
					<p style={{ fontSize: FONT_SIZE["SMALL"] }}>{outline}</p>
					<button style={{ fontSize: FONT_SIZE["MEDIUM"], marginLeft: "auto", marginTop: "auto" }}>
						詳細
					</button>
				</div>
			</div>
		</div>
	);
};

export default PlanSpot;
