import React from "react";
import FONT_SIZE from "@/utils/fontSize";
import mergeStyle from "@/utils/mergeStyle";

const DEFAULT_STYLE = {
	display: "flex",
	alignItems: "center",
	fontSize: FONT_SIZE["MEDIUM"],
};

const Title = ({ icon, context, fontSize }) => {
	const styleMerged = mergeStyle(DEFAULT_STYLE, { fontSize: FONT_SIZE[fontSize] });
	return (
		<div style={styleMerged}>
			{icon}
			<div style={{ marginLeft: "10px", height: "40px" }}>{context}</div>
		</div>
	);
};

export default Title;
