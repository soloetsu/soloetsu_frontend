import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const IMG_STYLE = {
	display: "block",
	width: "100%",
	height: "100%",
	objectFit: "cover",
};

const Slider = ({ img }) => {
	const syncSliders = (primary, secondary) => {
		primary.sync(secondary.splide);
	};

	const primaryRef = useRef(null);
	const secondaryRef = useRef(null);

	useEffect(() => {
		if (primaryRef.current && secondaryRef.current) {
			syncSliders(primaryRef.current, secondaryRef.current);
		}
	}, [primaryRef, secondaryRef]);

	return (
		<div>
			<Splide
				ref={primaryRef}
				options={{
					type: "fade",
				}}
			>
				{img.map((url, index) => {
					return (
						<SplideSlide key={index}>
							<img src={url} alt={url} style={IMG_STYLE} />
						</SplideSlide>
					);
				})}
			</Splide>
			<Splide
				ref={secondaryRef}
				options={{
					type: "slide",
					pagination: false,
					isNavigation: true,
					perPage: 6,
				}}
			>
				{img.map((url, index) => {
					return (
						<SplideSlide key={index}>
							<img src={url} alt={url} style={IMG_STYLE} />
						</SplideSlide>
					);
				})}
			</Splide>
		</div>
	);
};

export default Slider;
