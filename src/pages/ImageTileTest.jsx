import React from "react";
import ImageTile from "@/components/ImageTile";

const ImageTileTest = () => {
	return (
		<ImageTile
			props={{
				title: "プラン名",
				overview: "プラン概要",
				spots: [
					{
						image: "https://cdn.pixabay.com/photo/2023/06/08/22/35/foxtail-grass-8050497_1280.jpg",
						link: "https://www.google.com/",
					},
					{
						image: "https://cdn.pixabay.com/photo/2023/06/03/16/05/spotted-laughingtrush-8037974__340.png",
						link: "https://www.google.com/",
					},
					{
						image: "https://cdn.pixabay.com/photo/2023/06/03/16/05/spotted-laughingtrush-8037974__340.png",
						link: "https://www.google.com/",
					},
					{
						image: "https://cdn.pixabay.com/photo/2023/06/03/16/05/spotted-laughingtrush-8037974__340.png",
						link: "https://www.google.com/",
					},
					{
						image: "https://cdn.pixabay.com/photo/2023/06/03/16/05/spotted-laughingtrush-8037974__340.png",
						link: "https://www.google.com/",
					},
				],
			}}
		/>
	);
};

export default ImageTileTest;
