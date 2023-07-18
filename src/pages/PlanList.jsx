import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import SubVisual from "@/components/SubVisual";
import TagArea from "@/components/TagArea";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import axios from "axios";
import { Buffer } from "buffer";

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
	const [plansData, usePlansData] = useState([]);
	useEffect(() => {
		getPlansData();
	}, []);

	const getPlansData = async () => {
		const res = await axios.get("http://soloetsu.haltokyo.live/api/plans");
		console.log(res.data);
		usePlansData(res.data);
	};

	const [currentPage, setCurrentPage] = useState(1);

	return (
		<>
			<Header />
			<SubVisual context="プラン一覧" image="./jpg/plan.jpg" />
			<div style={CONTENT_AREA}>
				<div style={TAGS_LIST}>
					{plansData.tags && (
						<TagArea context="タグ" width="100%" tags={plansData.tags} margin="0 0 80px 0" />
					)}
				</div>

				<div style={CARD_LIST}>
					{plansData.plans &&
						plansData.plans
							.slice((currentPage - 1) * 4, currentPage * 4)
							.map((plan, index) => (
								<Card
									key={index}
									type="plan"
									id={plan.id}
									img={`data:image/jpeg;base64,${Buffer.from(plan.image).toString("base64")}`}
									context={plan.name}
									tags={plan.tags}
								/>
							))}
				</div>
			</div>
			<div style={PAGINATION_AREA}>
				{plansData.plans && (
					<Pagination
						pages={Math.ceil(plansData.plans.length / 4)}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				)}
			</div>
			<Footer />
		</>
	);
};

export default PlanList;
