import React from "react";
import SPACING from "@/utils/spacing";
import FONT_SIZE from "@/utils/fontSize";

const DEFAULT_STYLE = {
	backgroundImage: "linear-gradient(90deg, #FFA800 0%, #FFD600 100%)",
	borderRadius: "5px",
	cursor: "pointer",
	width: "130px",
	height: "50px",
	marginTop: SPACING["LARGE"],
	padding: "3px",
	border: "none",
};

const INNER = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "0px 20px 0 23px",
	fontSize: FONT_SIZE["MEDIUM"],
	backgroundImage: "linear-gradient(90deg, #FFA800 0%, #FFD600 100%)",
	color: "white",
	borderRadius: "3px",
	cursor: "pointer",
	height: "100%",
	marginLeft: "0.2px",
};

const ARROW_AREA = {
	backgroundColor: "#fff",
	width: "20px",
	height: "20px",
	borderRadius: "50%",
	position: "relative",
};

const ARROW = {
	width: "8px",
	height: "8px",
	borderTop: "2.5px solid #FFA800",
	borderRight: "2.5px solid #FFA800",
	boxSizing: "border-box",
	transform: "rotate(45deg)",
	position: "absolute",
	top: "0",
	left: "4.5px",
	bottom: "0",
	margin: "auto",
	transition: "0.3s",
};

const Button = ({ url, context }) => {
	return (
		<a href={url}>
			<button style={DEFAULT_STYLE}>
				<div style={INNER}>
					{context}
					<div style={ARROW_AREA}>
						<span style={ARROW}></span>
					</div>
				</div>
			</button>
		</a>
	);
};

export default Button;
