import React from "react";
import { ReactComponent as Plan } from "@/assets/svg/plan.svg";
import { ReactComponent as Spot } from "@/assets/svg/spot.svg";
import { ReactComponent as Safety } from "@/assets/svg/safety.svg";
import { ReactComponent as Traffic } from "@/assets/svg/traffic.svg";

const DEFAULT_STYLE = {
	height: "100px",
	display: "flex",
	// justifyContent: "space-between",
	backgroundColor: "#F8F8F8",
	padding: "0 3%",
};

// const DEFAULT_CIRCLE = {
// 	width: "400px",
// 	height: "400px",
// 	borderRadius: "50%",
// 	backgroundColor: "#00ffff",
// 	position: "absolute",
// 	top: "30px",
// 	right: "35%",
// 	transform: "translateY(-180px)",
// };

// const DEFAULT_LOGO = {
// 	position: "absolute",
// 	top: "140px",
// };

const DEFAULT_NAVIGATION = {
	display: "flex",
	width: "85%",
	justifyContent: "space-between",
	margin: "0 auto",
};

const DEFAULT_SVG = {
	margin: "0 auto",
	width: "35px",
	marginBottom: "3px",
};

const LEFT = {
	width: "40%",
	height: "100%",
};

const DEFAULT_CIRCLE = {
	position: "absolute",
	width: "300px",
	height: "300px",
	borderRadius: "50%",
	backgroundColor: "#f8f8f8",
	top: "50px",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

const ADJUSTMENT = {
	width: "300px",
	height: "100%",
};

const RIGHT = {
	width: "40%",
	height: "100%",
	display: "flex",
	alignItems: "center",
};

const LOGO = {
	position: "absolute",
	top: "61%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "83%",
};

const Header = () => {
	return (
		<div style={DEFAULT_STYLE}>
			<div style={LEFT}></div>
			<div style={DEFAULT_CIRCLE}>
				<a href="" style={LOGO}>
					<img src="/png/logo.png" />
				</a>
			</div>
			<div style={ADJUSTMENT}></div>
			<div style={RIGHT}>
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
		</div>
	);
};

// const Header = () => {
// 	return (
// 		<div style={DEFAULT_STYLE}>
// 			<div style={LEFT}></div>
// 			<div style={DEFAULT_CIRCLE}>
// 				<a style={DEFAULT_LOGO} href="">
// 					<img src="/png/logo.png" />
// 				</a>
// 			</div>
// 			<div style={RIGHT}>
// 				<div style={DEFAULT_NAVIGATION}>
// 					<div>
// 						<a href="">
// 							<Plan style={DEFAULT_SVG} />
// 						</a>
// 						<p>プラン</p>
// 					</div>
// 					<div>
// 						<a href="">
// 							<Spot style={DEFAULT_SVG} />
// 						</a>
// 						<p>スポット</p>
// 					</div>
// 					<div>
// 						<a href="">
// 							<Safety style={DEFAULT_SVG} />
// 						</a>
// 						<p>セーフティ</p>
// 					</div>
// 					<div>
// 						<a href="">
// 							<Traffic style={DEFAULT_SVG} />
// 						</a>
// 						<p>交通情報</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export default Header;
