import React from "react";
import Heading from "@/components/general/Heading";
import List from "@/components/List";

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
	paddingRight: "5%",
	height: "400px",
};

const ICON_STYLE = {
	width: "92px",
	height: "92px",
	marginRight: "68px",
	backgroundColor: "red",
};

const PlanSpot = ({ root, last }) => {
	return (
		<div style={PLAN_STYLE}>
			<div style={CONTEXT_STYLE}>
				<div style={ICON_STYLE}></div>
				<Heading fontSize="MEDIUM" context={root.title} />
			</div>
			<div style={SPOT_STYLE}>
				{last ? null : <div style={BORDER_STYLE}></div>}
				<List
					props={{
						plan_id: 1,
						name: root.name,
						overview: root.overview,
						img: "https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg",
					}}
					tag={false}
				/>
			</div>
		</div>
	);
};

export default PlanSpot;
