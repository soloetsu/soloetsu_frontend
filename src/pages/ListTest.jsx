import React from "react";
import List from "@/components/List";

const ListTest = () => {
	return (
		<div style={{ width: "80%", margin: "auto" }}>
			<List
				props={{
					plan_id: 1,
					name: "お酒飲み歩き、上越酒造・ワイナリーツアー",
					description:
						"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
					tags: ["#お酒", "#趣味"],
					img: "https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg",
				}}
			/>
		</div>
	);
};

export default ListTest;
