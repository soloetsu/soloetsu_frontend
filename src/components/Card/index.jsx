import React from "react";
import SPACING from "@/utils/spacing";
import FONT_SIZE from "@/utils/fontSize";
import { Link } from "react-router-dom";

const DEFAULT_CARD = {
	display: "flex",
	flexDirection: "column",
	width: "100%",
};

const DEFAULT_IMG = {
	display: "flex",
	width: "100%",
	aspectRatio: "4 / 3",
	// height: "23vw",
	borderRadius: "0px 20px 0px",
	filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
};

const Card = ({ type, id, img, context, tags }) => {
	const path = type === "plan" ? "/planDetail" : "/spotDetail";
	return (
		<>
			<div style={DEFAULT_CARD} className="hover">
				<Link to={{ pathname: path, search: `?id=${id}` }}>
					<img src={img} alt="画像" style={DEFAULT_IMG} />
				</Link>
				<div style={{ width: "max-content", marginTop: SPACING["MEDIUM"] }}>
					<Link to={{ pathname: path, search: `?id=${id}` }}>
						<p style={{ fontSize: FONT_SIZE["MEDIUM"] }}>{context}</p>
					</Link>
				</div>
				<div style={{ display: "flex", flexWrap: "wrap", marginTop: SPACING["SMALL"] }}>
					<p>
						{tags.map((tag, index) => (
							<span style={{ fontSize: FONT_SIZE["SMALL"], marginRight: SPACING["MEDIUM"] }} key={index}>
								{tag}
							</span>
						))}
					</p>
				</div>
			</div>
		</>
	);
};

export default Card;
