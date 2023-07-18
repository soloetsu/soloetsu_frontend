import React from "react";
import Header from "@/components/Header";
import AboutArea from "@/components/AboutArea";
import PickupArea from "@/components/PickupArea";
import Heading from "@/components/general/Heading";
import List from "@/components/List";
import GoLists from "@/components/GoLists";
import Footer from "@/components/Footer";

const Index = () => {
	const MV = {
		width: "100%",
		height: "90vh",
		backGroundColor: "#FFF",
		padding: "0 40px",
	};

	const MV_IMG = {
		width: "100%",
		height: "100%",
	};

	const LIST_AREA = {
		display: "grid",
		gap: "40px",
		margin: "60px 0 0 0",
	};

	return (
		<>
			<Header unique={true} />
			<div style={MV}>
				<img src="/jpg/MainVisual.jpg" alt="top" style={MV_IMG} />
			</div>
			<AboutArea />
			<PickupArea />
			<div style={{ width: "80%", margin: "auto" }}>
				<Heading fontSize="LARGE" context="酒巡りの旅" />
				<div style={LIST_AREA}>
					<List
						props={{
							id: 1,
							name: "お酒飲み歩き、上越酒造・ワイナリーツアー",
							overview:
								"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
							tags: ["#お酒", "#趣味"],
							img: "https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg",
						}}
						type="plan"
					/>
					<List
						props={{
							id: 1,
							name: "お酒飲み歩き、上越酒造・ワイナリーツアー",
							overview:
								"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
							tags: ["#お酒", "#趣味"],
							img: "https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg",
						}}
						type="plan"
					/>
				</div>
				<GoLists type="plan" context="一覧へ" />
			</div>

			<div style={{ width: "80%", margin: "auto" }}>
				<Heading fontSize="LARGE" context="酒巡りの旅" />
				<div style={LIST_AREA}>
					<List
						props={{
							id: 1,
							name: "お酒飲み歩き、上越酒造・ワイナリーツアー",
							overview:
								"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
							tags: ["#お酒", "#趣味"],
							img: "https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg",
						}}
						type="plan"
					/>
					<List
						props={{
							id: 1,
							name: "お酒飲み歩き、上越酒造・ワイナリーツアー",
							overview:
								"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
							tags: ["#お酒", "#趣味"],
							img: "https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg",
						}}
						type="plan"
					/>
				</div>
				<GoLists type="plan" context="一覧へ" />
			</div>
			<Footer />
		</>
	);
};

export default Index;
