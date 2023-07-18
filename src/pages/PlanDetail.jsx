import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ImageTile from "@/components/ImageTile";
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
		console.log(res.data[0]);
		usePlan(res.data[0]);
	};

	useEffect(() => {
		getPlan();
	}, []);

	return (
		<>
			<Header />
			<Breadcrumb pages={["TOP", "プラン一覧", "プラン詳細"]} />
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
		</>
	);
};

export default PlanDetail;
