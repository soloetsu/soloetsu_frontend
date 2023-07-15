import React from "react";
import List from "@/components/List";

const ListTest = () => {
	return (
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
	);
};

export default ListTest;
