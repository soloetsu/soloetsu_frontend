import React, { useState } from "react";
import Page from "./Page";
import Arrow from "./Arrow";

const DEFAULT_STYLE = {
	display: "block",
	justifyContent: "center",
	width: "35px",
	padding: "8px 9px",
	margin: "0 3px",
	color: "#333",
	fontSize: "13px",
	cursor: "pointer",
	border: "none",
	borderRadius: "50%",
};

const pagination = ({ pages }) => {
	// ページネーションの総ページ数
	const totalPages = pages;

	const [currentPage, setCurrentPage] = useState(1);

	// ページネーションのボタンを生成する関数
	const renderPageButtons = () => {
		const buttons = [];
		const threshold = 1;

		const createPage = (pageNumber) => (
			<Page
				style={DEFAULT_STYLE}
				key={pageNumber}
				pageNumber={pageNumber}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		);

		const createEllipsis = (key) => (
			<span key={key} className="ellipsis" style={DEFAULT_STYLE}>
				…
			</span>
		);

		if (totalPages <= threshold * 2 + 4) {
			for (let page = 1; page <= totalPages; page++) {
				buttons.push(createPage(page));
			}
		} else if (currentPage <= threshold + 2) {
			for (let page = 1; page <= threshold * 2 + 3; page++) {
				buttons.push(createPage(page));
			}
			buttons.push(createEllipsis("ellipsis1"));
			buttons.push(createPage(totalPages));
		} else if (currentPage >= totalPages - threshold - 1) {
			buttons.push(createPage(1));
			buttons.push(createEllipsis("ellipsis1"));

			for (let page = totalPages - threshold * 2 - 2; page <= totalPages; page++) {
				buttons.push(createPage(page));
			}
		} else {
			buttons.push(createPage(1));
			buttons.push(createEllipsis("ellipsis1"));

			let start = currentPage - threshold;
			let end = currentPage + threshold;
			for (let page = start; page <= end; page++) {
				buttons.push(createPage(page));
			}

			buttons.push(createEllipsis("ellipsis2"));
			buttons.push(createPage(totalPages));
		}

		return buttons;
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Arrow
				style={DEFAULT_STYLE}
				direction="left"
				totalPages={totalPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
			<div style={{ display: "flex", justifyContent: "center" }}>{renderPageButtons()}</div>
			<Arrow
				style={DEFAULT_STYLE}
				direction="right"
				totalPages={totalPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
};

export default pagination;
