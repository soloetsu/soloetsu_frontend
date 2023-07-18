import React from "react";
import FONT_SIZE from "@/utils/fontSize";
import PATH from "@/utils/path";

const DEFAULT_BREAD = {
	display: "flex",
};

const Breadcrumb = ({ pages }) => {
	return (
		<div style={{ ...DEFAULT_BREAD, fontSize: FONT_SIZE["SMALL"] }}>
			{pages.map((page, index) => (
				<div key={index}>
					<a href={PATH[page]}>{page}</a>
					<span>{">"}</span>
				</div>
			))}
		</div>
	);
};

export default Breadcrumb;
