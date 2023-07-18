import React from "react";
import FONT_SIZE from "@/utils/fontSize";

const A = {
	borderBottom: "solid 1px",
	position: "relative",
	display: "flex",
	alignItems: "center",
	margin: "80px auto 100px",
	maxWidth: "210px",
	padding: "10px 25px",
	color: "#313131",
	transition: "0.3s ease-in-out",
	fontWeight: "500",
	cursor: "pointer",
	textDecoration: "none",
	fontSize: FONT_SIZE["MEDIUM"],
};

const BEFORE = {
	position: "absolute",
	top: "calc(50% - 2px)",
	right: "1em",
	transform: "translateY(calc(-50% - 2px)) rotate(30deg)",
	width: "15px",
	height: "0.5px",
	backgroundColor: "#000",
	transition: "0.3s",
};

const AFTER = {
	position: "absolute",
	top: "50%",
	right: "1em",
	transform: "translateY(-50%)",
	width: "45px",
	height: "0.5px",
	backgroundColor: "#000",
	transition: "0.3s",
};

const GOLists = ({ url, context }) => {
	return (
		<a href={url} style={A}>
			{context}
			<span style={BEFORE}></span>
			<span style={AFTER}></span>
		</a>
	);
};

export default GOLists;
