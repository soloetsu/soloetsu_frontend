import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import AboutArea from "@/components/AboutArea";
import PickupArea from "@/components/PickupArea";
import Heading from "@/components/general/Heading";
import List from "@/components/List";
import GoLists from "@/components/GoLists";
import Footer from "@/components/Footer";
import axios from "axios";
import { Buffer } from "buffer";

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

	const [samples, setSamples] = useState([]);

	useEffect(() => {
		getSamples();
	}, []);

	const getSamples = async () => {
		const res = await axios.get("http://soloetsu.haltokyo.live/api/plans/samples");
		setSamples(res.data);
	};

	return (
		<>
			<Header unique={true} />
			<div style={MV}>
				<img src="/jpg/MainVisual.jpg" alt="top" style={MV_IMG} />
			</div>
			<AboutArea />
			<PickupArea />
			{samples &&
				samples.map((sample, index) => {
					return (
						<div style={{ width: "80%", margin: "auto" }} key={index}>
							<Heading fontSize="LARGE" context={sample[2]} />
							<div style={LIST_AREA}>
								<List
									props={{
										id: sample[0].id,
										name: sample[0].name,
										overview: sample[0].overview,
										tags: sample[0].tags,
										img: `data:image/jpeg;base64,${Buffer.from(sample[0].image).toString(
											"base64"
										)}`,
									}}
									type="plan"
								/>
								<List
									props={{
										id: sample[1].id,
										name: sample[1].name,
										overview: sample[1].overview,
										tags: sample[1].tags,
										img: `data:image/jpeg;base64,${Buffer.from(sample[1].image).toString(
											"base64"
										)}`,
									}}
									type="plan"
								/>
							</div>
							<GoLists type="plan" context="一覧へ" />
						</div>
					);
				})}
			<Footer />
		</>
	);
};

export default Index;
