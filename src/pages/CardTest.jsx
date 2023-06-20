import React from "react";
import Card from "@/components/Card";

const CardTest = () => {
	return (
		<Card
			url="https://www.google.com/"
			img="https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg"
			context="カード"
			tags={["#タグ", "#タグタグタグタグタグタグタグタグタグタグタグタグタグタグタグタグタグタグ", "#タグ"]}
		/>
	);
};

export default CardTest;
