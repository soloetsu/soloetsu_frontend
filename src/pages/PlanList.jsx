import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import SubVisual from "@/components/SubVisual";
import TagArea from "@/components/TagArea";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import axios from "axios";

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
			<Breadcrumb pages={["TOP", "プラン一覧"]} />
			<SubVisual context="プラン一覧" />
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<TagArea width="20%" tags={tags} />
				<div style={{ width: "30%" }}>
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
			<Pagination pages={20} />
			<Footer />
		</>
	);
};

export default PlanList;
