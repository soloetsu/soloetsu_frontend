import React from "react";
import PlanSpot from "@/components/PlanSpot";
import PlanTraffic from "../components/PlanTraffic";
const PlanTest = () => {
	return (
		<>
			<PlanSpot
				title="○○を見ながら美味しいご飯！"
				name="スポット名"
				outline="test"
				src="https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg"
			/>
			<PlanTraffic title="○○駅から～まで" link="test" type="train" />
			<PlanSpot
				title="○○を見ながら美味しいご飯！"
				name="スポット名"
				outline="test"
				src="https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg"
			/>
			<PlanTraffic title="○○バス停から～まで" link="test" type="bus" />
			<PlanTraffic title="○○から～まで" link="test" type="foot" />
		</>
	);
};

export default PlanTest;
