import React from "react";
import FONT_SIZE from "@/utils/fontSize";
import mergeStyle from "@/utils/mergeStyle";

const DEFAULT_STYLE = {
	display: "flex",
	alignItems: "center",
	fontSize: FONT_SIZE["MEDIUM"],
};

const TEXT_STYLE = {
	marginLeft: "10px",
	marginBottom: "6px",
	height: "40px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
};

const Title = ({ icon, context, fontSize }) => {
	const styleMerged = mergeStyle(DEFAULT_STYLE, { fontSize: FONT_SIZE[fontSize] });
	return (
		<div style={styleMerged}>
			{icon}
			<p style={TEXT_STYLE}>{context}</p>
		</div>
	);
};

export default Title;
