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
				<div style={OVERVIEW}>
					<p dangerouslySetInnerHTML={{ __html: props.overview }} />
				</div>
				<div style={{ display: "flex", justifyContent: "space-between", height: "26vw" }}>
					<div style={{ width: "50%" }}>
						<img src={props.images[0]} alt="大画像" style={BIG_IMG} />
					</div>
					<div style={DEFAULT_RIGHT}>
						<div style={SMALL_IMG_A}>
							<img style={SMALL_IMG} src={props.images[1]} alt="小画像1" />
						</div>
						<div style={SMALL_IMG_A}>
							<img style={SMALL_IMG} src={props.images[2]} alt="小画像2" />
						</div>
					</div>
					<div style={DEFAULT_RIGHT}>
						<div style={SMALL_IMG_A}>
							<img
								style={{ ...SMALL_IMG, borderRadius: "0 50px 0 0" }}
								src={props.images[3]}
								alt="小画像3"
							/>
						</div>
						<div style={SMALL_IMG_A}>
							<img style={SMALL_IMG} src={props.images[4]} alt="小画像4" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageTile;
