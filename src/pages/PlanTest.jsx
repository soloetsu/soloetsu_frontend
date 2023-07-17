import React from "react";
import Plan from "@/components/Plan";

const roots = [
	{
		title: "○○を見ながら美味しいご飯！",
		name: "スポット名",
		overview: "test",
		spot_id: 1,
	},
	{
		title: "○○駅から～まで",
		link: "test",
		spot_id: null,
	},
	{
		title: "○○を見ながら美味しいご飯！",
		name: "スポット名",
		overview: "test",
		spot_id: 2,
	},
	{
		title: "○○バス停から～まで",
		link: "test",
		spot_id: null,
	},
	{
		title: "○○から～まで",
		link: "test",
		spot_id: null,
	},
	{
		title: "○○を見ながら美味しいご飯！",
		name: "スポット名",
		overview: "test",
		spot_id: 3,
	},
];

const PlanTest = () => {
	return (
		<>
			<Plan roots={roots} />
		</>
	);
};

export default PlanTest;
