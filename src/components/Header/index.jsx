import React from "react";
import { ReactComponent as Plan } from "@/assets/svg/plan.svg";
import { ReactComponent as Spot } from "@/assets/svg/spot.svg";
import { ReactComponent as Safety } from "@/assets/svg/safety.svg";
import { ReactComponent as Traffic } from "@/assets/svg/traffic.svg";
import { Link } from "react-router-dom";

const DEFAULT_STYLE = {
	height: "100px",
	display: "flex",
	backgroundColor: "#F8F8F8",
	padding: "0 5%",
};

const DEFAULT_NAVIGATION = {
	display: "flex",
	width: "90%",
	justifyContent: "space-between",
	margin: "0px 0px 0px auto",
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

const DEFAULT_CIRCLE_UNIQUE = {
	position: "absolute",
	width: "300px",
	height: "300px",
	borderRadius: "50%",
	backgroundColor: "#f8f8f8",
	top: "50px",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

const DEFAULT_CIRCLE = {
	position: "absolute",
	width: "240px",
	height: "auto",
	borderRadius: "50%",
	top: "47px",
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

const Header = ({ unique = false }) => {
	return (
		<div
			style={unique ? DEFAULT_STYLE : { ...DEFAULT_STYLE, boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.1)" }}
			className="header"
		>
			<div style={LEFT}></div>
			<div style={unique ? DEFAULT_CIRCLE_UNIQUE : DEFAULT_CIRCLE}>
				<Link to="/" style={LOGO} className="hover">
					<img src="/png/logo.png" />
				</Link>
			</div>
			<div style={ADJUSTMENT}></div>
			<div style={RIGHT}>
				<div style={DEFAULT_NAVIGATION}>
					<div>
						<Link to="/planList" className="hover">
							<Plan style={DEFAULT_SVG} />
							<p>プラン</p>
						</Link>
					</div>
					<div>
						<Link to="/spotList" className="hover">
							<Spot style={DEFAULT_SVG} />
							<p>スポット</p>
						</Link>
					</div>
					<div>
						<Link to="/" className="hover">
							<Safety style={DEFAULT_SVG} />
							<p>セーフティ</p>
						</Link>
					</div>
					<div>
						<Link to="/" className="hover">
							<Traffic style={DEFAULT_SVG} />
							<p>交通情報</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
