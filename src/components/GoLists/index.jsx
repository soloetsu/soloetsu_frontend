import React from "react";
// import FONT_SIZE from "@/utils/fontSize";

const A = {
	borderBottom: "solid 1px",
	position: "relative",
	display: "flex",
	alignItems: "center",
	margin: "0 auto",
	maxWidth: "210px",
	padding: "10px 25px",
	color: "#313131",
	transition: "0.3s ease-in-out",
	fontWeight: "500",
	cursor: "pointer",
	textDecoration: "none",
};

const BEFORE = {
	position: "absolute",
	top: "calc(50% - 2px)",
	right: "1em",
	transform: "translateY(calc(-50% - 2px)) rotate(30deg)",
	width: "15px",
	height: "1px",
	backgroundColor: "#000",
	transition: "0.3s",
};

const AFTER = {
	position: "absolute",
	top: "50%",
	right: "1em",
	transform: "translateY(-50%)",
	width: "45px",
	height: "1px",
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

// import React from "react";
// import
// // const DEFAULT_AREA = {
// // 	display: "flex",
// // };

// .yazirusi {
// 	position: relative;
// 	width: 100px;
// 	margin: 30px;
// }
// .line01 {
// 	height: 1px;
// 	background-color: #000;
// }
// .line02 {
// 	position: absolute;
// 	top: 0;
// 	right: 0;
// 	transform-origin: right bottom;
// 	width: 20px;
// 	height: 1px;
// 	background-color: #000;
// 	transform: rotate(45deg);
// }

// const GoLists = ({ context }) => {
// 	return (
// 		<a href="" style={DEFAULT_AREA}>
// 			<div>{context}</div>
// 			<div class="yazirusi">
// 				<div class="line01"></div>
// 				<div class="line02"></div>
// 			</div>
// 		</a>
// 	);
// };

// export default GoLists;
