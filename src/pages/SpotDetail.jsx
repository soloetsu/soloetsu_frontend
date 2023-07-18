import React, { useState, useEffect } from "react";
import Title from "@/components/general/Title";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";
import Header from "@/components/Header";
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
			<div style={{ width: "80%", margin: "auto" }}>
				<Breadcrumb pages={["TOP", "スポット一覧", "スポット詳細"]} />
				<div style={{ display: "flex" }}>
					{spot.images ? <Slider img={images} /> : ""}
					<div>
						<Title icon={<SpotIcon />} context={spot.name} fontSize="MEDIUM" />
						<p>{spot.overview}</p>
						<Title icon={<LinkIcon />} context="リンク" fontSize="MEDIUM" />
						<p>
							<a href={spot.link}>ここをクリック</a>
						</p>
						<Title icon={<TagIcon />} context="タグ" fontSize="MEDIUM" />
						<div style={{ display: "flex" }}>
							<p>{spot.tags}</p>
						</div>
					</div>
				</div>
				<Heading context="詳細情報" />
				<p dangerouslySetInnerHTML={{ __html: spot.detail }} />

				<Heading context="アクセス" />
				<p dangerouslySetInnerHTML={{ __html: spot.access }} />

				<Heading context="マップ" />
				<div dangerouslySetInnerHTML={{ __html: spot.map }} />
			</div>
		</>
	);
};

export default SpotDetail;
