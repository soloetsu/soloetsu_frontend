import React from "react";
import FONT_SIZE from "@/utils/fontSize";
import { ReactComponent as Car } from "@/assets/svg/car.svg";

const PLAN_STYLE = {
	display: "flex",
	flexDirection: "column",
	width: "100%",
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
	padding: "5%",
	height: "20%",
};

const ICON_STYLE = {
	width: "92px",
	height: "92px",
	marginRight: "40px",
};

const PlanTraffic = ({ root }) => {
	return (
		<div style={PLAN_STYLE}>
			<div style={CONTEXT_STYLE}>
				<div>
					<Car style={ICON_STYLE} />
				</div>
				<p style={{ fontSize: FONT_SIZE["MEDIUM"] }}>{root.comment}</p>
			</div>
			<div style={SPOT_STYLE}>
				<div style={BORDER_STYLE}></div>
				<p>
					<a href={root.link}>GoogleMapはこちら</a>
				</p>
			</div>
		</div>
	);
};

export default PlanTraffic;
