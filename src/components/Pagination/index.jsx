import React, { useState } from "react";

// const DEFAULT_STYLE = {

// }

function pagination() {
	const leftSlide = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const rightSlide = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};
	const [currentPage, setCurrentPage] = useState(1);

	// ページネーションの総ページ数
	const totalPages = 20;

	// ページを変更する関数
	const changePage = (page) => {
		setCurrentPage(page);
	};

	// ページネーションのボタンを生成する関数

	const renderPageButtons = () => {
		const buttons = [];

		// 省略記号の表示の閾値
		const threshold = 2;

		// 先頭のページボタンを表示
		buttons.push(
			<button key={1} className={currentPage === 1 ? "active" : ""} onClick={() => changePage(1)}>
				1
			</button>
		);

		if (currentPage > threshold + 2) {
			buttons.push(
				<span key="ellipsis1" className="ellipsis">
					•••
				</span>
			);
		}

		// 現在のページを中心に表示する範囲を計算
		let start = Math.max(currentPage - threshold, 2);
		let end = Math.min(currentPage + threshold, totalPages - 1);

		for (let page = start; page <= end; page++) {
			buttons.push(
				<button key={page} className={currentPage === page ? "active" : ""} onClick={() => changePage(page)}>
					{page}
				</button>
			);
		}

		if (currentPage < totalPages - threshold - 1) {
			buttons.push(
				<span key="ellipsis2" className="ellipsis">
					•••
				</span>
			);
		}

		// 最後のページボタンを表示
		if (totalPages > 1) {
			buttons.push(
				<button
					key={totalPages}
					className={currentPage === totalPages ? "active" : ""}
					onClick={() => changePage(totalPages)}
				>
					{totalPages}
				</button>
			);
		}

		return buttons;
	};

	return (
		<div>
			{/* ページのコンテンツを表示 */}
			<h1>Page {currentPage}</h1>
			<p>This is the content of page {currentPage}.</p>

			{/* ページネーションのボタンを表示 */}

			<div className="pagination">
				<button
					onClick={() => {
						leftSlide();
					}}
				>
					‹
				</button>
				{renderPageButtons()}
				<button
					onClick={() => {
						rightSlide();
					}}
				>
					›
				</button>
			</div>
		</div>
	);
}

export default pagination;
