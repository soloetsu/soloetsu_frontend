import React from "react";
import Header from "@/components/Header";
import AboutArea from "@/components/AboutArea";
import PickupArea from "@/components/PickupArea";
import Footer from "@/components/Footer";

const Index = () => {
	return (
		<>
			<Header unique={true} />
			<img src="/jpg/MainVisual.jpg" alt="top" />
			<AboutArea />
			<PickupArea />
			<Footer />
		</>
	);
};

export default Index;
