import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Heading from "@/components/Heading";
import "@splidejs/react-splide/css";

const DEFAULT_STYLE = {
	width: "100%",
};

const DEFAULT_HEAD = {
	margin: "0 0 0 80px",
};

const IMG_STYLE = {
	display: "block",
	width: "100%",
	height: "100%",
	objectFit: "cover",
};

const DEFAULT_NAME = {
	margin: "24px 0 0 0",
	fontSize: "18px",
};

const TAG_AREA = {
	margin: "24px 0 0 0",
	display: "flex",
};

const DEFAULT_TAG = {
	textDecoration: "none",
	color: "#333333",
	margin: "0 24px 0 0",
};

const ConnectSlider = ({ img, context }) => {
	return (
		<>
			<div style={DEFAULT_STYLE}>
				<div style={DEFAULT_HEAD}>
					<Heading fontSize="LARGE" context={context} />
				</div>
				<Splide
					options={{
						perPage: 3,
						perMove: 1,
						rewind: true,
						padding: "5rem",
						gap: "5rem",
						pagination: false,
					}}
				>
					{img.map((url) => {
						return (
							<SplideSlide>
								<div>
									<img src={url} alt={url} style={IMG_STYLE} />
									<h2 style={DEFAULT_NAME}>スポット名</h2>
									<div style={TAG_AREA}>
										<a href="https://www.google.com" style={DEFAULT_TAG}>
											#タグ1
										</a>
										<a href="https://www.google.com" style={DEFAULT_TAG}>
											#タグ2
										</a>
										<a href="https://www.google.com" style={DEFAULT_TAG}>
											なんとか区
										</a>
									</div>
								</div>
							</SplideSlide>
						);
					})}
				</Splide>
			</div>
		</>
	);
};

export default ConnectSlider;
