import React from "react";
import allow from "@/images/AboutArea_yajirusi.png";
import Heading from "@/components/Heading";

const AboutArea = () => {
	return (
		<div style={{ display: "flex", alignItems: "center", width: "800px", margin: "0 auto" }}>
			<div style={{ flex: "1", display: "flex", flexDirection: "row" }}>
				<div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
					<h2
						style={{
							fontSize: "70px",
							color: "#778da9",
							fontFamily: "",
							transform: "rotate(-90deg)",
							transformOrigin: "left bottom",
							whiteSpace: "nowrap",
							margin: "100px 0 0 0",
						}}
					>
						ABOUT
					</h2>
				</div>
				<div style={{ flex: "1", marginLeft: "-200px" }}>
					<Heading context="上越とソロ旅" />
					<p style={{ whiteSpace: "pre-wrap", marginTop: "70px", marginBottom: "70px", textSize: "" }}>
						上越市と~~~~~~~~~~~~~~~~~~~~~~~~~~~~
						<br />
						~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
						<br />
						~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
					</p>
					<div>
						<img src={allow} alt="yajirusi" />
					</div>
				</div>
			</div>
			<div style={{ position: "relative", width: "350px", height: "600px" }}>
				<img
					src="https://picsum.photos/300/300"
					alt="Image01"
					style={{
						position: "absolute",
						width: "360px",
						height: "360px",
						left: "200px",
						bottom: "100px",
						zIndex: "1",
					}}
				/>
				<img
					src="https://picsum.photos/200/250"
					alt="Image02"
					style={{
						position: "absolute",
						width: "240px",
						height: "300px",
						left: "100px",
						bottom: "0",
						zIndex: "2",
					}}
				/>
			</div>
		</div>
	);
};

export default AboutArea;
