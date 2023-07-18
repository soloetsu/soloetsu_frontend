import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import SubVisual from "@/components/SubVisual";
import TagArea from "@/components/TagArea";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import axios from "axios";

const CONTENT_AREA = {
	display: "flex",
	width: "80%",
	margin: "125px auto 0",
	justifyContent: "space-between",
};

const TAGS_LIST = {
	width: "25%",
};

const CARD_LIST = {
	width: "67%",
	display: "grid",
	gridTemplateColumns: " repeat(2, 1fr)",
	gap: "60px 50px",
};

const PAGINATION_AREA = {
	margin: "70px 30vw 150px",
	width: "66%",
};

const PlanList = () => {
	const [tags, useTags] = useState([]);
	useEffect(() => {
		getPlansTags();
	}, []);

	const getPlansTags = async () => {
		const res = await axios.get("http://soloetsu.haltokyo.live/api/plans/tags");
		useTags(res.data);
	};

	return (
		<>
			<Header />
			<SubVisual context="プラン一覧" />
			<div style={CONTENT_AREA}>
				<div style={TAGS_LIST}>
					<TagArea width="100%" tags={tags} margin="0 0 80px 0" />
					<TagArea width="100%" tags={tags} />
				</div>

				<div style={CARD_LIST}>
					<Card
						id="1"
						img="https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg"
						context="カード"
						tags={[
							"#タグ",
							"#タグタグタグタグタグタグタグタグタグタグタグタグタグタグタグタグタグタグ",
							"#タグ",
						]}
					/>
					<Card
						id="1"
						img="https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg"
						context="カード"
						tags={[
							"#タグ",
							"#タグタグタグタグタグタグタグタグタグタグタグタグタグタグタグタグタグタグ",
							"#タグ",
						]}
					/>
					<Card
						id="1"
						img="https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg"
						context="カード"
						tags={[
							"#タグ",
							"#タグタグタグタグタグタグタグタグタグタグタグタグタグタグタグタグタグタグ",
							"#タグ",
						]}
					/>
				</div>
			</div>
			<div style={PAGINATION_AREA}>
				<Pagination pages={20} />
			</div>
			<Footer />
		</>
	);
};

export default PlanList;
