import React from "react";
import Heading from "@/components/Heading";

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

const BORDER_STYLE = {
	borderLeft: "6px solid #000000",
	marginLeft: "3.5%",
	padding: "5%",
	height: "20%",
};

const ICON_STYLE = {
	width: "92px",
	height: "92px",
	marginRight: "68px",
	backgroundColor: "red",
};

const PlanTraffic = ({ title, link, type }) => {
	return (
		<div style={PLAN_STYLE}>
			<div style={CONTEXT_STYLE}>
				<div>
					{type === "train" ? (
						<img
							style={ICON_STYLE}
							src="https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg"
							alt="train"
						/>
					) : type === "bus" ? (
						<img
							style={ICON_STYLE}
							src="https://fujifilmsquare.jp/assets/img/column/column_24_02.jpg"
							alt="bus"
						/>
					) : (
						<img
							style={ICON_STYLE}
							src="https://fujifilmsquare.jp/assets/img/column/column_24_03.jpg"
							alt="foot"
						/>
					)}
				</div>
				<Heading fontSize="MEDIUM" context={title} />
			</div>
			<div style={SPOT_STYLE}>
				<div style={BORDER_STYLE}></div>
				<p>{link}</p>
			</div>
		</div>
	);
};

export default PlanTraffic;
