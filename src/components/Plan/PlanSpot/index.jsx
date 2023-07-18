import React from "react";
import FONT_SIZE from "@/utils/fontSize";
import List from "@/components/List";
import { Buffer } from "buffer";

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
	alignItems: "center",
};

const SPOT_STYLE = {
	display: "flex",
};

const BORDER_STYLE = {
	borderLeft: "3px solid #D9D9D9",
	marginLeft: "3.5%",
	paddingRight: "5%",
	height: "400px",
};

const DEFAULT_NUM_AREA = {
	position: "relative",
	color: "#FFA800",

	marginRight: "40px",
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
	backgroundColor: "#FFA800",
	top: "0",
	left: "-20px",
};

const PlanSpot = ({ root, last }) => {
	return (
		<div style={PLAN_STYLE}>
			<div style={CONTEXT_STYLE}>
				<div style={DEFAULT_NUM_AREA}>
					<div style={DEFAULT_NUM_TITLE}>SPOT</div>
					<p style={DEFAULT_NUM}>01</p>
					<div style={DEFAULT_NUM_ALIGN}></div>
				</div>
				<p style={{ fontSize: FONT_SIZE["MEDIUM"] }}>{root.comment}</p>
			</div>
			<div style={SPOT_STYLE}>
				{last ? null : <div style={BORDER_STYLE}></div>}
				<List
					props={{
						plan_id: root.spot_id,
						name: root.spot.name,
						overview: root.spot.overview,
						img: `data:image/jpeg;base64,${Buffer.from(root.spot.image).toString("base64")}`,
					}}
					tag={false}
				/>
			</div>
		</div>
	);
};

export default PlanSpot;
