import React from "react";
import Heading from "@/components/Heading";
import FONT_SIZE from "@/utils/fontSize";

const DEFAULT_AREA = {
	fontSize: "10px",
	display: "flex",
	justifyContent: "space-between",
	width: "1350px",
	marginLeft: "auto",
};
const DEFAULT_CONTEXT = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
};

const DEFAULT_STYLE_IMG = {
	width: "1050px",
	height: "350px",
};

const SubVisual = ({ context, outline, src }) => {
	return (
		<div style={DEFAULT_AREA}>
			<div style={DEFAULT_CONTEXT}>
				<Heading fontSize="LARGE" context={context} />
				<p style={{ fontSize: FONT_SIZE["SMALL"] }}>{outline}</p>
			</div>
			<img style={DEFAULT_STYLE_IMG} src={src} alt="" />
		</div>
	);
};

export default SubVisual;
