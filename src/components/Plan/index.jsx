import React from "react";
import PlanSpot from "./PlanSpot";
import PlanTraffic from "./PlanTraffic";

const Plan = ({ roots }) => {
	return (
		<>
			<div style={{ margin: "80px auto 150px", width: "70%" }}>
				{roots.map((root, index) => {
					if (root.spot_id) {
						return <PlanSpot root={root} key={index} last={index === roots.length - 1} />;
					} else {
						return <PlanTraffic root={root} key={index} />;
					}
				})}
			</div>
		</>
	);
};

export default Plan;
