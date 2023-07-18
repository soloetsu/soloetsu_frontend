import React, { useState, useEffect } from "react";
import Heading from "@/components/general/Heading";
import FONT_SIZE from "@/utils/fontSize";
import "./hover.css";
import axios from "axios";
import { Buffer } from "buffer";
import { Link } from "react-router-dom";

const DEFAULT_AREA = {
	width: "80%",
	margin: "auto",
	height: "100vh",
	position: "relative",
};

const DEFAULT_BOX_AREA = {
	display: "flex",
	position: "relative",
	marginTop: "130px",
};

const DEFAULT_BOX = {
	display: "flex",
	width: "25%",
	position: "relative",
	marginRight: "6%",
};

const DEFAULT_TITLE = {
	MsWritingMode: "tb-rl",
	writingMode: "vertical-rl",
	fontSize: FONT_SIZE["MEDIUM"],
	marginTop: "65px",
	marginRight: "15px",
};

const DEFAULT_IMG = {
	width: "100%",
	height: "25vw",
	objectFit: "cover",
	boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)",
};

const DEFAULT_NUM_AREA = {
	position: "absolute",
	color: "rgba(132, 169, 183, 0.85)",
	top: "-70px",
	left: "20px",
};

const DEFAULT_NUM_TITLE = {
	fontSize: FONT_SIZE["MEDIUM"],
};

const DEFAULT_NUM = {
	fontSize: "85px",
	fontFamily: "'Cardo', serif",
	textShadow: "2px 2px 0px rgba(255, 255, 255, 0.80)",
	lineHeight: "0.8",
};

const DEFAULT_NUM_ALIGN = {
	position: "absolute",
	width: "3px",
	height: "100%",
	backgroundColor: "rgba(132, 169, 183, 0.85)",
	top: "0",
	left: "-20px",
};

const DEFAULT_BACK = {
	position: "absolute",
	width: "90vw",
	height: "15vw",
	zIndex: "-1",
	top: "30%",
	left: "-13%",
	backgroundImage:
		"linear-gradient(168deg, rgba(125, 221, 228, 1) 15%, rgba(255, 240, 162, 0.42) 80%, rgba(193, 235, 237, 0) 95%)",
};

const DEFAULT_BIGTEXT = {
	position: "absolute",
	fontSize: "80px",
	fontFamily: "'playfair display', serif",
	color: "#B1C7CF",
	letterSpacing: "20px",
	right: "-1%",
	bottom: "40px",
};

const PickupArea = () => {
	const [name, useName] = useState("");
	const [imageData, useImageData] = useState(null);
	useEffect(() => {
		getPickup();
	}, []);

	const getPickup = async () => {
		const res = await axios.get("http://soloetsu.haltokyo.live/api/plans/pickup");
		useName(res.data[0].name);
		useImageData(res.data[0].image);
	};

	return (
		<div style={DEFAULT_AREA}>
			<Heading context="定番のプラン" fontSize="LARGE" />
			<div style={DEFAULT_BOX_AREA}>
				<div style={DEFAULT_BOX} className="hover">
					<p style={DEFAULT_TITLE}>{name}</p>
					<Link to="/plan" style={{ textDecoration: "none" }}>
						{imageData ? (
							<img
								src={`data:image/jpeg;base64,${Buffer.from(imageData).toString("base64")}`}
								alt="画像1"
								style={DEFAULT_IMG}
							/>
						) : (
							<div>Loading...</div>
						)}
					</Link>
					<div style={DEFAULT_NUM_AREA} className="hover_child">
						<div style={DEFAULT_NUM_TITLE}>PICKUP</div>
						<p style={DEFAULT_NUM}>01</p>
						<div style={DEFAULT_NUM_ALIGN}></div>
					</div>
				</div>
				<div style={DEFAULT_BOX} className="hover">
					<p style={DEFAULT_TITLE}>{name}</p>
					<Link to="/plan" style={{ textDecoration: "none" }}>
						{imageData ? (
							<img
								src={`data:image/jpeg;base64,${Buffer.from(imageData).toString("base64")}`}
								alt="画像1"
								style={DEFAULT_IMG}
							/>
						) : (
							<div>Loading...</div>
						)}
					</Link>
					<div style={DEFAULT_NUM_AREA} className="hover_child">
						<div style={DEFAULT_NUM_TITLE}>PICKUP</div>
						<p style={DEFAULT_NUM}>02</p>
						<div style={DEFAULT_NUM_ALIGN}></div>
					</div>
				</div>
				<div style={DEFAULT_BOX} className="hover">
					<p style={DEFAULT_TITLE}>{name}</p>
					<Link to="/plan" style={{ textDecoration: "none" }}>
						{imageData ? (
							<img
								src={`data:image/jpeg;base64,${Buffer.from(imageData).toString("base64")}`}
								alt="画像1"
								style={DEFAULT_IMG}
							/>
						) : (
							<div>Loading...</div>
						)}
					</Link>
					<div style={DEFAULT_NUM_AREA} className="hover_child">
						<div style={DEFAULT_NUM_TITLE}>PICKUP</div>
						<p style={DEFAULT_NUM}>03</p>
						<div style={DEFAULT_NUM_ALIGN}></div>
					</div>
				</div>
				<div style={DEFAULT_BACK}></div>
			</div>
			<div style={DEFAULT_BIGTEXT}>PICKUP</div>
		</div>
	);
};

export default PickupArea;
