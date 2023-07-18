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

const SpotList = () => {
	const [spotsData, useSpotsData] = useState([]);
	useEffect(() => {
		getSpotsData();
	}, []);

	const getSpotsData = async () => {
		const res = await axios.get("http://soloetsu.haltokyo.live/api/spots");
		console.log(res.data);
		useSpotsData(res.data);
	};

	const [currentPage, setCurrentPage] = useState(1);

	const [tags, useTags] = useState([]);
	const [areas, useAreas] = useState([]);

	return (
		<>
			<Header />
			<SubVisual context="スポット一覧" image="./jpg/spot.jpg" />
			<div style={CONTENT_AREA}>
				<div style={TAGS_LIST}>
					{spotsData.tags && (
						<TagArea
							context="タグ"
							width="100%"
							tags={spotsData.tags}
							margin="0 0 80px 0"
							useTags={useTags}
						/>
					)}
					{spotsData.areas && (
						<TagArea context="エリア" width="100%" tags={spotsData.areas} useTags={useAreas} />
					)}
				</div>

				<div style={CARD_LIST}>
					{spotsData.spots &&
						spotsData.spots
							.filter((spot) => {
								if (tags.length === 0 && areas.length === 0) {
									return spot;
								} else if (tags.length === 0) {
									return areas.includes(spot.area);
								} else if (areas.length === 0) {
									return tags.some((tag) => spot.tags.includes(tag));
								} else {
									return areas.includes(spot.area) && tags.some((tag) => spot.tags.includes(tag));
								}
							})
							.slice((currentPage - 1) * 4, currentPage * 4)
							.map((spot, index) => (
								<Card
									key={index}
									type="spot"
									id={spot.id}
									img={`data:image/jpeg;base64,${Buffer.from(spot.image).toString("base64")}`}
									context={spot.name}
									tags={spot.tags}
								/>
							))}
				</div>
			</div>
			<div style={PAGINATION_AREA}>
				{spotsData.spots && (
					<Pagination
						pages={Math.ceil(spotsData.spots.length / 4)}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				)}
			</div>
			<Footer />
		</>
	);
};

export default SpotList;
