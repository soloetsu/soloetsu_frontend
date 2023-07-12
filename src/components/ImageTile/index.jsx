import React from "react";
import FONT_SIZE from "@/utils/fontSize";
import Title from "@/components/general/Title";
import { ReactComponent as Plan } from "@/assets/svg/plan.svg";

const OVERVIEW = {
	fontSize: FONT_SIZE["SMALL"],
};

const DEFAULT_RIGHT = {
	width: "23%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
};

const SMALL_IMG = {
	width: "350px",
	height: "260px",
};

const ImageTile = ({ props }) => {
	return (
		<>
			<Title icon={<Plan />} context={props.title} />
			<div style={OVERVIEW}>{props.overview}</div>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<a href={props.spots[0].url} style={{ width: "50%" }}>
					<img src={props.spots[0].image} alt="大画像" style={{ borderRadius: "0 0 0 50px" }} />
				</a>
				<div style={DEFAULT_RIGHT}>
					<a href={props.spots[1].url}>
						<img style={SMALL_IMG} src={props.spots[1].image} alt="小画像1" />
					</a>
					<a href={props.spots[2].url}>
						<img style={SMALL_IMG} src={props.spots[2].image} alt="小画像2" />
					</a>
				</div>
				<div style={DEFAULT_RIGHT}>
					<a href={props.spots[3].url}>
						<img
							style={{ ...SMALL_IMG, borderRadius: "0 50px 0 0" }}
							src={props.spots[3].image}
							alt="小画像3"
						/>
					</a>
					<a href={props.spots[4].url}>
						<img style={SMALL_IMG} src={props.spots[4].image} alt="小画像4" />
					</a>
				</div>
			</div>
		</>
	);
};

export default ImageTile;
