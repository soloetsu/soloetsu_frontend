import React from "react";
import SPACING from "@/utils/spacing";
import FONT_SIZE from "@/utils/fontSize";

const DEFAULT_CARD = {
	display: "flex",
	flexDirection: "column",
	width: "30%",
};

const DEFAULT_IMG = {
	display: "flex",
	width: "100%",
	height: "23vw",
	borderRadius: "0px 20px 0px",
	filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
};

const Card = ({ url, img, context, tags }) => {
	return (
		<>
			<div style={DEFAULT_CARD}>
				<a href={url}>
					<img src={img} alt="画像" style={DEFAULT_IMG} />
				</a>
				<div style={{ width: "max-content", marginTop: SPACING["MEDIUM"] }}>
					<a href={url}>
						<p style={{ fontSize: FONT_SIZE["MEDIUM"] }}>{context}</p>
					</a>
				</div>
				<div style={{ display: "flex", marginTop: SPACING["SMALL"] }}>
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
