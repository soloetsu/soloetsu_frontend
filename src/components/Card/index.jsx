import React from "react";

const DEFAULT_IMG = {
	display: "flex",
	// padding: "0 38px 0 0",
	width: "450px",
	height: "350px",
	borderRadius: "0px 20px 0px 20px",
};

const DEFAULT_TEXT = {
	fontSize: "1rem",
};

const Card = ({ url, img, context }) => {
	return (
		<>
			<div style={{ display: "flex", flexDirection: "column", width: "450px" }}>
				<a href={url} style={{ textDecoration: "none" }}>
					<img src={img} alt="画像" style={DEFAULT_IMG} />
				</a>
				<div style={{ paddingTop: "23px", width: "max-content" }}>
					<a href={url} style={{ textDecoration: "none" }}>
						<p style={DEFAULT_TEXT}>{context}</p>
					</a>
				</div>
				<div style={{ display: "flex", paddingTop: "10px", width: "max-content" }}>
					<p style={DEFAULT_TEXT}>#タグ</p>
					<p style={{ DEFAULT_TEXT, paddingLeft: "23px" }}>#タグ</p>
				</div>
			</div>
		</>
	);
};

export default Card;
