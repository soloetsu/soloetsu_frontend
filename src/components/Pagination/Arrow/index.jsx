import React, { useState } from "react";

const Arrow = ({ style, direction, totalPages, currentPage, setCurrentPage }) => {
	const DEFAULT_STYLE = style;
	const HOVER_STYLE = {
		...DEFAULT_STYLE,
		backgroundColor: "#eaeaea",
	};

	const [hovered, setHovered] = useState(false);

	const handleClick = () => {
		if (direction === "left" && currentPage > 1) {
			setCurrentPage(currentPage - 1);
		} else if (direction === "right" && currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<button
			style={hovered ? HOVER_STYLE : DEFAULT_STYLE}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onClick={handleClick}
		>
			{direction === "left" ? "<" : ">"}
		</button>
	);
};

export default Arrow;
