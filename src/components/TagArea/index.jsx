import React from "react";
import Checkbox from "@/components/Checkbox";
import mergeStyle from "@/utils/mergeStyle";

const DEFAULT_STYLE = {
	position: "relative",
};

const UNDERLINE_STYLE = {
	content: "''",
	position: "absolute",
	left: 0,
	width: "100%",
	height: "1px",
	backgroundColor: "#000000",
	margin: "10px 0 20px",
};

const BOXES_STYLE = {
	display: "flex",
	alignItems: "flex-start",
	flexWrap: "wrap",
	height: "100%",
	marginTop: "31px",
};

const TagArea = ({ width, tags }) => {
	const styleMerged = mergeStyle(DEFAULT_STYLE, { width: width });
	return (
		<div style={styleMerged}>
			<h2>タグ</h2>
			<span style={UNDERLINE_STYLE} />
			<div style={BOXES_STYLE}>
				{tags.map((tag, index) => (
					<Checkbox key={index} context={tag} />
				))}
			</div>
		</div>
	);
};

export default TagArea;
