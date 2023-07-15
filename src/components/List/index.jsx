import React from "react";
import SPACING from "@/utils/spacing";
import FONT_SIZE from "@/utils/fontSize";
import { ReactComponent as Plan } from "@/assets/svg/plan.svg";

const DEFAULT_CARD = {
	display: "flex",
	flexDirection: "row",
};

const DEFAULT_IMG = {
	display: "flex",
	width: "100%",
	objectFit: "cover", // アス比保つ
	borderRadius: "0px 20px 0px",
	filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
};

const DEFAULT_CONTENT = {
	display: "flex",
	flexDirection: "column",
	marginLeft: "50px",
	marginTop: SPACING["MEDIUM"],
	whiteSpace: "nowrap", // 改行されない
	overflow: "hidden",
	textOverflow: "ellipsis",
	width: "100%",
	justifyContent: "center",
};

const DEFAULT_BUTTON = {
	display: "inline-block",
	marginLeft: "400px",
	padding: `${SPACING["SMALL"]} ${SPACING["MEDIUM"]}`, // パディングを調整
	fontSize: FONT_SIZE["MEDIUM"],
	backgroundColor: "#ff9f1c",
	color: "white",
	borderRadius: "5px", // 角丸にする
	border: "none",
	cursor: "pointer",
	width: "150px",
	height: "50px",
};

const List = ({ props }) => {
	return (
		<div style={DEFAULT_CARD}>
			<a href="">
				<img src={props.img} alt="画像" style={DEFAULT_IMG} />
			</a>
			<div style={DEFAULT_CONTENT}>
				<div style={{ width: "100%" }}>
					<div style={{ display: "flex" }}>
						<Plan />
						<p style={{ fontSize: FONT_SIZE["MEDIUM"], overflow: "hidden", textOverflow: "ellipsis" }}>
							{props.name}
						</p>
					</div>
					<div style={{ display: "flex", marginTop: SPACING["SMALL"] }}>
						<p>
							{props.tags.map((tag, index) => (
								<span
									style={{ fontSize: FONT_SIZE["SMALL"], marginRight: SPACING["MEDIUM"] }}
									key={index}
								>
									{tag}
								</span>
							))}
						</p>
					</div>
					<p
						style={{
							fontSize: FONT_SIZE["MEDIUM"],
							marginTop: SPACING["LARGE"],
							whiteSpace: "pre-line", // 改行するようにしたい
						}}
					>
						{props.description}
					</p>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
							marginTop: SPACING["SMALL"],
							marginRight: "12px",
						}}
					>
						<button style={DEFAULT_BUTTON}>詳細</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
