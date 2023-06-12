import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const DEFAULT_STYLE = {
	width: "50%",
};

const IMG_STYLE = {
	display: "block",
	width: "100%",
	height: "100%",
	objectFit: "cover",
};

const Slider = ({ img }) => {
	return (
		<>
			<div style={DEFAULT_STYLE}>
				<Splide
					aria-label="私のお気に入りの画像集"
					options={{
						type: "loop", //画像のループ
						autoplay: true, // 自動再生を有効
						interval: 3000, // 自動再生の間隔を3秒に設定
						/*
                            マウスが画面にフォーカスした場合スライド停止。
                            画像の矢印等をクリックした際にマウスのフォーカスが維持されるため、
                            スライド外をクリックしないと自動再生が再開しない。
                            以下の設定で解除可能
                            pauseOnHover: false
                            pauseOnFocus: false
                        */
					}}
				>
					{img.map((url) => {
						return (
							<SplideSlide>
								<img src={url} alt={url} style={IMG_STYLE} />
							</SplideSlide>
						);
					})}
				</Splide>
			</div>
		</>
	);
};

export default Slider;
