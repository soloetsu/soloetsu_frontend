import React from "react";
import SPACING from "@/utils/spacing";
import FONT_SIZE from "@/utils/fontSize";
import Title from "@/components/general/Title";
import { ReactComponent as Plan } from "@/assets/svg/plan.svg";
import Button from "@/components/general/Button";

const DEFAULT_CARD = {
	display: "flex",
	flexDirection: "row",
	width: "100%",
	padding: "20px",
	backgroundColor: "white",
	boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)",
	borderRadius: "0px 20px 0px",
};

const DEFAULT_IMG = {
	display: "flex",
	width: "35%",
	// height: "20vw",
	aspectRatio: "4 / 3",
	objectFit: "cover", // アス比保つ
	borderRadius: "0px 20px 0px",
	filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
};

const DEFAULT_CONTENT = {
	display: "flex",
	flexDirection: "column",
	margin: "20px 10px 20px 50px ",
	whiteSpace: "nowrap", // 改行されない
	overflow: "hidden",
	textOverflow: "ellipsis",
	width: "100%",
	justifyContent: "space-between",
};

const List = ({ props, tag = true }) => {
	return (
		<div style={DEFAULT_CARD}>
			<img src={props.img} alt="画像" style={DEFAULT_IMG} />
			<div style={DEFAULT_CONTENT}>
				<div style={{ width: "100%" }}>
					<div style={{ display: "flex" }}>
						<Title icon={<Plan />} context={props.name} />
					</div>
					{tag && (
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
					)}
					<p
						style={{
							fontSize: FONT_SIZE["SMALL"],
							marginTop: SPACING["LARGE"],
							whiteSpace: "pre-line", // 改行するようにしたい
						}}
						dangerouslySetInnerHTML={{ __html: props.overview }}
						className="line-height"
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "flex-end",
						// marginTop: SPACING["SMALL"],
						// marginRight: "12px",
					}}
				>
					<Button url={props.url} context="詳細" />
				</div>
			</div>
		</div>
	);
};

export default List;
