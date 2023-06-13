import React from "react";

const PickupArea = ({ url, img, context }) => {
	return (
		<>
			<div style={{ marginBottom: "27px", overflow: "hidden" }}>
				<a>
					<h1 style={{ margin: 0, textAlign: "center", textDecoration: "underline" }}>{context}</h1>
				</a>
			</div>

			<div>
				<div style={{ display: "flex" }}>
					<div style={{ marginRight: "38px" }}>
						<a href={url} style={{ textDecoration: "none" }}>
							<img
								src={img}
								alt="画像1"
								style={{ maxWidth: "100%", height: "auto", marginBottom: "27px" }}
							/>
						</a>
						<a href={url} style={{ textDecoration: "none" }}>
							<h3
								style={{
									margin: 0,
									textAlign: "center",
									overflow: "hidden",
									textDecoration: "none",
								}}
							>
								カテゴリ名1
							</h3>
						</a>
					</div>

					<div style={{ marginRight: "38px" }}>
						<a href={url} style={{ textDecoration: "none" }}>
							<img
								src={img}
								alt="画像2"
								style={{ maxWidth: "100%", height: "auto", marginBottom: "27px" }}
							/>
						</a>
						<a href={url} style={{ textDecoration: "none" }}>
							<h3
								style={{
									textDecoration: "none",
									margin: 0,
									textAlign: "center",
									overflow: "hidden",
								}}
							>
								カテゴリ名2
							</h3>
						</a>
					</div>

					<div>
						<a href={url} style={{ textDecoration: "none" }}>
							<img
								src={img}
								alt="画像3"
								style={{ maxWidth: "100%", height: "auto", marginBottom: "27px" }}
							/>
						</a>
						<a href={url} style={{ textDecoration: "none" }}>
							<h3
								style={{
									textDecoration: "none",
									margin: 0,
									textAlign: "center",
									overflow: "hidden",
								}}
							>
								カテゴリ名3
							</h3>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default PickupArea;
