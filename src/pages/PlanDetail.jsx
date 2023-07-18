import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ImageTile from "@/components/ImageTile";
import Plan from "@/components/Plan";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";

const PlanDetail = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const planId = searchParams.get("id");

	const [plan, usePlan] = useState({});

	const getPlan = async () => {
		const res = await axios.get(`http://soloetsu.haltokyo.live/api/plans/detail/${planId}`);
		usePlan(res.data[0]);
	};

	const [roots, useRoots] = useState([]);
	const getRoots = async () => {
		const res = await axios.get(`http://soloetsu.haltokyo.live/api//roots/${planId}`);
		console.log(res.data);
		useRoots(res.data);
	};
	useEffect(() => {
		getPlan();
		getRoots();
	}, []);

	return (
		<>
			<Header />
			<div style={{ width: "80%", margin: "60px auto 0" }}>
				<Breadcrumb pages={["TOP", "プラン一覧", "プラン詳細"]} />
			</div>
			{plan.image ? (
				<ImageTile
					props={{
						title: plan.name,
						overview: plan.overview,
						images: [
							`data:image/jpeg;base64,${Buffer.from(plan.image[0]).toString("base64")}`,
							`data:image/jpeg;base64,${Buffer.from(plan.image[1]).toString("base64")}`,
							`data:image/jpeg;base64,${Buffer.from(plan.image[2]).toString("base64")}`,
							`data:image/jpeg;base64,${Buffer.from(plan.image[3]).toString("base64")}`,
							`data:image/jpeg;base64,${Buffer.from(plan.image[4]).toString("base64")}`,
						],
					}}
				/>
			) : (
				""
			)}
			{roots ? <Plan roots={roots} /> : ""}
			<Footer />
		</>
	);
};

export default PlanDetail;
