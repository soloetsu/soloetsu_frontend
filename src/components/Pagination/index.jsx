import React from "react";

const Pagination = () => {
	const paginationStyle = {
		display: "flex",
		justifyContent: "center",
		marginTop: "20px",
	};

	const pageStyle = {
		padding: "5px 10px",
		margin: "0 5px",
		backgroundColor: "lightgray",
		textDecoration: "none",
		color: "black",
		transition: "background-color 0.3s, color 0.3s",
	};

	const handlePageClick = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<div style={paginationStyle}>
				<a href="#" style={pageStyle} onClick={handlePageClick}>
					1
				</a>
				<a href="#" style={pageStyle} onClick={handlePageClick}>
					2
				</a>
				<a href="#" style={pageStyle} onClick={handlePageClick}>
					3
				</a>
				<a href="#" style={pageStyle} onClick={handlePageClick}>
					4
				</a>
				<a href="#" style={pageStyle} onClick={handlePageClick}>
					5
				</a>
			</div>
		</div>
	);
};

export default Pagination;
