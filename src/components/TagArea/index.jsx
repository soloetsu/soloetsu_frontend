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

const TagArea = ({ context, width, tags, margin }) => {
	const styleMerged = mergeStyle(DEFAULT_STYLE, { width: width }, { margin: margin });
	return (
		<div style={styleMerged}>
			<h2>{context}</h2>
			<span style={UNDERLINE_STYLE} />
			<div style={BOXES_STYLE}>
				{tags.map((tag) => (
					<Checkbox key={tag.id} context={tag.name} />
				))}
			</div>
		</div>
	);
};

export default TagArea;
