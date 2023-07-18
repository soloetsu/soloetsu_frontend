import React from "react";
import Header from "@/components/Header";
import AboutArea from "@/components/AboutArea";
import PickupArea from "@/components/PickupArea";
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

	return (
		<>
			<Header unique={true} />
			<div style={MV}>
				<img src="/jpg/MainVisual.jpg" alt="top" style={MV_IMG} />
			</div>
			<AboutArea />
			<PickupArea />
			<Footer />
		</>
	);
};

export default Index;
