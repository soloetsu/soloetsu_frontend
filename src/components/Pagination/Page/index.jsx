import React, { useState } from "react";

const Button = ({ style, pageNumber, currentPage, setCurrentPage }) => {
	const DEFAULT_STYLE = style;

	const ACTIVE_STYLE = {
		...DEFAULT_STYLE,
		color: "#fff",
		backgroundColor: "#333",
	};

	const HOVER_STYLE = {
		...DEFAULT_STYLE,
		backgroundColor: "#eaeaea",
	};

	const [hovered, setHovered] = useState(false);

	return (
		<button
			style={currentPage === pageNumber ? ACTIVE_STYLE : hovered ? HOVER_STYLE : DEFAULT_STYLE}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onClick={() => setCurrentPage(pageNumber)}
		>
			{pageNumber}
		</button>
	);
};

export default Button;
