import React from "react";
import FONT_SIZE from "@/utils/fontSize";
import Title from "@/components/general/Title";
import { ReactComponent as Plan } from "@/assets/svg/plan.svg";

const DEFAULT_AREA = {
	width: "80%",
	margin: "auto",
	marginTop: "30px",
};

const OVERVIEW = {
	fontSize: FONT_SIZE["MEDIUM"],
	marginTop: "20px",
	marginBottom: "30px",
};

const DEFAULT_RIGHT = {
	width: "24%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
};

const BIG_IMG = {
	borderRadius: "0 0 0 50px",
	width: "100%",
	height: "100%",
};

const SMALL_IMG = {
	width: "100%",
	height: "100%",
};

const SMALL_IMG_A = {
	height: "48.5%",
};

const ImageTile = ({ props }) => {
	return (
		<>
			<div style={DEFAULT_AREA}>
				<Title icon={<Plan />} context={props.title} fontSize="LARGE" />
				<div style={OVERVIEW}>{props.overview}</div>
				<div style={{ display: "flex", justifyContent: "space-between", height: "26vw" }}>
					<a href={props.spots[0].url} style={{ width: "50%" }}>
						<img src={props.spots[0].image} alt="大画像" style={BIG_IMG} />
					</a>
					<div style={DEFAULT_RIGHT}>
						<a href={props.spots[1].url} style={SMALL_IMG_A}>
							<img style={SMALL_IMG} src={props.spots[1].image} alt="小画像1" />
						</a>
						<a href={props.spots[2].url} style={SMALL_IMG_A}>
							<img style={SMALL_IMG} src={props.spots[2].image} alt="小画像2" />
						</a>
					</div>
					<div style={DEFAULT_RIGHT}>
						<a href={props.spots[3].url} style={SMALL_IMG_A}>
							<img
								style={{ ...SMALL_IMG, borderRadius: "0 50px 0 0" }}
								src={props.spots[3].image}
								alt="小画像3"
							/>
						</a>
						<a href={props.spots[4].url} style={SMALL_IMG_A}>
							<img style={SMALL_IMG} src={props.spots[4].image} alt="小画像4" />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageTile;
