import React from "react";
import Heading from "@/components/general/Heading";
import FONT_SIZE from "@/utils/fontSize";

const DEFAULT_AREA = {
	display: "flex",
	justifyContent: "space-between",
	width: "90%",
	marginLeft: "auto",
};
const DEFAULT_CONTEXT = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
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
				<Heading fontSize="LARGE" context={context} />
				<p style={{ fontSize: FONT_SIZE["SMALL"] }}>{outline}</p>
			</div>
			{/* TODO 画像差し替え */}
			<img style={DEFAULT_STYLE_IMG} src="https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg" alt="" />
		</div>
	);
};

export default SubVisual;
