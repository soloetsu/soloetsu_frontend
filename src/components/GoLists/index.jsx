import React from "react";
import 
// const DEFAULT_AREA = {
// 	display: "flex",
// };

.yazirusi {
	position: relative;
	width: 100px;
	margin: 30px;
}
.line01 {
	height: 1px;
	background-color: #000;
}
.line02 {
	position: absolute;
	top: 0;
	right: 0;
	transform-origin: right bottom;
	width: 20px;
	height: 1px;
	background-color: #000;
	transform: rotate(45deg);
}


const GoLists = ({ context }) => {
	return (
		<a href="" style={DEFAULT_AREA}>
			<div>{context}</div>
			<div class="yazirusi">
				<div class="line01"></div>
				<div class="line02"></div>
			</div>
		</a>
	);
};

export default GoLists;
