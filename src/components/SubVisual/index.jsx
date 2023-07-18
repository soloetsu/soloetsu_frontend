import React from "react";
import Heading from "@/components/general/Heading";
import FONT_SIZE from "@/utils/fontSize";
import Breadcrumb from "@/components/Breadcrumb";

const DEFAULT_AREA = {
	display: "flex",
	justifyContent: "space-between",
	width: "90%",
	marginLeft: "auto",
	marginTop: "60px",
};
const DEFAULT_CONTEXT = {
	display: "flex",
	flexDirection: "column",
	width: "15%",
};

const DEFAULT_STYLE_IMG = {
	width: "80%",
	height: "350px",
};

const SubVisual = ({ context, outline }) => {
	return (
		<div style={DEFAULT_AREA}>
			<div style={DEFAULT_CONTEXT}>
				<Breadcrumb pages={["TOP"]} />
				<Heading fontSize="LARGE" context={context} margin="15px 0 45px 0" />
				<p style={{ fontSize: FONT_SIZE["SMALL"] }}>{outline}</p>
			</div>
			{/* TODO 画像差し替え */}
			<img style={DEFAULT_STYLE_IMG} src="./jpg/sub.jpg" alt="" />
		</div>
	);
};

export default SubVisual;
