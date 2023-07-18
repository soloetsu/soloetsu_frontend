import React, { useState, useEffect } from "react";
import Title from "@/components/general/Title";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Slider from "@/components/Slider";
import Heading from "@/components/general/Heading";
import { ReactComponent as SpotIcon } from "@/assets/svg/spot.svg";
import { ReactComponent as TagIcon } from "@/assets/svg/tag.svg";
import { ReactComponent as LinkIcon } from "@/assets/svg/link.svg";

const SpotDetail = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const spotId = searchParams.get("id");

	const [spot, useSpot] = useState({});
	const [images, useImages] = useState([]);

	const getSpot = async () => {
		const res = await axios.get(`http://soloetsu.haltokyo.live/api/spots/detail/${spotId}`);
		useSpot(res.data);
		console.log(res.data);
	};

	const convertImage = (images) => {
		const convertedImages = [];
		images.forEach((image) => {
			convertedImages.push(`data:image/jpeg;base64,${Buffer.from(image).toString("base64")}`);
		});
		useImages(convertedImages);
	};

	useEffect(() => {
		getSpot();
	}, []);

	useEffect(() => {
		if (spot.images) {
			convertImage(spot.images);
		}
	}, [spot]);

	return (
		<>
			<Header />
			<div style={{ width: "80%", margin: "60px auto 150px" }}>
				<Breadcrumb pages={["TOP", "スポット一覧"]} />
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						margin: "30px 0 80px 0",
						height: "70vh",
					}}
				>
					<div style={{ width: "60%" }}>{spot.images ? <Slider img={images} /> : ""}</div>
					<div
						style={{
							width: "35%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<div style={{ overflowY: "auto" }}>
							<Title icon={<SpotIcon />} context={spot.name} />
							<p className="line-height">{spot.overview}</p>
						</div>
						<div>
							<Title icon={<LinkIcon />} context="リンク" />
							<p>
								<a href={spot.link}>ここをクリック</a>
							</p>
							<Title icon={<TagIcon />} context="タグ" />
							<div style={{ display: "flex" }}>
								{spot.tags
									? spot.tags.map((tag, index) => {
										return <p key={index}>#{tag}</p>;
									})
									: ""}
							</div>
						</div>
					</div>
				</div>
				<div style={{ marginBottom: "60px" }}>
					<Heading context="詳細情報" fontSize="LARGE" />
					<p dangerouslySetInnerHTML={{ __html: spot.detail }} className="line-height" />
				</div>

				<div style={{ marginBottom: "60px" }}>
					<Heading context="アクセス" fontSize="LARGE" />
					<p dangerouslySetInnerHTML={{ __html: spot.access }} className="line-height" />
				</div>

				<Heading context="マップ" fontSize="LARGE" />
				<div dangerouslySetInnerHTML={{ __html: spot.map }} />
			</div>
			<Footer />
		</>
	);
};

export default SpotDetail;
