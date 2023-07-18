import React from "react";
import Header from "@/components/Header";
import AboutArea from "@/components/AboutArea";
import PickupArea from "@/components/PickupArea";
import Footer from "@/components/Footer";

const Index = () => {
	return (
		<>
			<Header />
			{/* TODO Headerの付いてくるやつ */}
			<AboutArea />
			<PickupArea />
			<Footer />
		</>
	);
};

export default Index;
