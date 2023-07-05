import React from "react";
//import mergeStyle from "@/utils/mergeStyle";

const DEFAULT_BREAD = {
	display: "flex",
};

const DEFAULT_HREF = {
	textDecoration: "none",
	color: "Black",
};
const BreadCrumbs = () => {
	const breadcrumbs = ["TOP", "プラン", "プラン名"]; // パンくずリストの項目

	return (
		<div style={DEFAULT_BREAD}>
			{breadcrumbs.map((crumb, index) => (
				<div key={index}>
					<a href="#" style={DEFAULT_HREF}>
						{crumb}
					</a>
					{index !== breadcrumbs.length - 1 && <span>{">"}</span>}
				</div>
			))}
		</div>
	);
};

export default BreadCrumbs;
