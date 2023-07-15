import React from "react";
import { ReactComponent as Plan } from "@/assets/svg/plan.svg";
import { ReactComponent as Spot } from "@/assets/svg/spot.svg";
import { ReactComponent as Safety } from "@/assets/svg/safety.svg";
import { ReactComponent as Traffic } from "@/assets/svg/traffic.svg";

const DEFAULT_STYLE = {
	height: "150px",
	display: "flex",
	justifyContent: "flex-end",
};

const DEFAULT_CIRCLE = {
	width: "400px",
	height: "400px",
	borderRadius: "50%",
	backgroundColor: "#00ffff",
	position: "absolute",
	top: "30px",
	right: "35%",
	transform: "translateY(-180px)",
};

const DEFAULT_LOGO = {
	position: "absolute",
	top: "140px",
};

const DEFAULT_NAVIGATION = {
	display: "flex",
	alignItems: "flex-start",
	flexWrap: "wrap",
	width: "30%",
	justifyContent: "space-between",
};

const DEFAULT_SVG = {
	margin: "0 auto",
};

const Header = () => {
	return (
		<div style={DEFAULT_STYLE}>
			<div style={DEFAULT_CIRCLE}>
				<a style={DEFAULT_LOGO} href="">
					<img src="/png/logo.png" />
				</a>
			</div>
			<div style={DEFAULT_NAVIGATION}>
				<div>
					<a href="">
						<Plan style={DEFAULT_SVG} />
					</a>
					<p>プラン</p>
				</div>
				<div>
					<a href="">
						<Spot style={DEFAULT_SVG} />
					</a>
					<p>スポット</p>
				</div>
				<div>
					<a href="">
						<Safety style={DEFAULT_SVG} />
					</a>
					<p>セーフティ</p>
				</div>
				<div>
					<a href="">
						<Traffic style={DEFAULT_SVG} />
					</a>
					<p>交通情報</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
