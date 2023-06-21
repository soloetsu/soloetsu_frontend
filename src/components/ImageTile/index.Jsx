import React from "react";

const PLANNAME = {
	position: "absolute",
	width: "480px",
	height: "35px",
	left: "274px",
	top: "332px",

	fontFamily: "Kiwi Maru",
	fontStyle: "normal",
	fontWeight: 300,
	fontSize: "24px",
	lineHeight: "35px",

	display: "flex",
	alignItems: "center",

	color: "#000000",
};

const OVERVIEW = {
	position: "absolute",
	width: "600px",
	height: "29px",
	left: "232px",
	top: "396px",

	fontFamily: "Yomogi",
	fontStyle: "normal",
	fontWeight: 400,
	fontSize: "20px",
	lineHeight: "29px",

	color: "#000000",
};

const LIMG = {
	position: "absolute",
	width: "726px",
	height: "541px",
	left: "230px",
	top: "510px",
	borderRadius: "0px 0px 0px 50px",
};

const RIMG1 = {
	position: "absolute",
	width: "346px",
	height: "258px",
	top: "510px",
	left: "976px",
};

const RIMG2 = {
	position: "absolute",
	width: "346px",
	height: "258px",
	top: "510px",
	left: "1344px",
	borderRadius: "0px 50px 0px 0px",
};

const RIMG3 = {
	position: "absolute",
	width: "346px",
	height: "257px",
	top: "794px",
	left: "976px",
};

const RIMG4 = {
	position: "absolute",
	width: "346px",
	height: "257px",
	top: "794px",
	left: "1344px",
};

const ImageTile = () => {
	return (
		<>
			<div style={PLANNAME}>プラン名</div>
			<div style={OVERVIEW}>プラン概要～～～～～～～～～～～～～～</div>
			<a href="https://cdn.pixabay.com/photo/2023/06/08/22/35/foxtail-grass-8050497_1280.jpg">
				<img
					src="https://cdn.pixabay.com/photo/2023/06/08/22/35/foxtail-grass-8050497_1280.jpg"
					alt="大画像"
					style={LIMG}
				/>
			</a>
			<div style={RIMG1}>
				<a href="https://cdn.pixabay.com/photo/2023/06/03/16/05/spotted-laughingtrush-8037974__340.png">
					<img
						src="https://cdn.pixabay.com/photo/2023/06/03/16/05/spotted-laughingtrush-8037974__340.png"
						alt="小画像1"
					/>
				</a>
			</div>
			<div style={RIMG2}>
				<a href="https://cdn.pixabay.com/photo/2023/06/03/16/05/spotted-laughingtrush-8037974__340.png">
					<img
						src="https://cdn.pixabay.com/photo/2023/06/03/16/05/spotted-laughingtrush-8037974__340.png"
						alt="小画像2"
					/>
				</a>
			</div>
			<div style={RIMG3}>
				<a href="https://cdn.pixabay.com/photo/2023/06/03/16/05/spotted-laughingtrush-8037974__340.png">
					<img
						src="https://cdn.pixabay.com/photo/2023/06/03/16/05/spotted-laughingtrush-8037974__340.png"
						alt="小画像3"
					/>
				</a>
			</div>
			<div style={RIMG4}>
				<a href="https://cdn.pixabay.com/photo/2023/06/03/16/05/spotted-laughingtrush-8037974__340.png">
					<img
						src="https://cdn.pixabay.com/photo/2023/06/03/16/05/spotted-laughingtrush-8037974__340.png"
						alt="小画像4"
					/>
				</a>
			</div>
		</>
	);
};

export default ImageTile;
