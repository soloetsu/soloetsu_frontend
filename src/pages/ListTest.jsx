import React from "react";
import List from "@/components/List";

const ListTest = () => {
	return (
		<List
			url="https://www.google.com/"
			img="https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg"
			context="お酒飲み歩き、上越酒造・ワイナリーツアー"
			tags={["#お酒", "#趣味"]}
			description="~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
			button="詳細"
		/>
	);
};

export default ListTest;
