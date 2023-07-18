import React from "react";
import PlanSpot from "./PlanSpot";
import PlanTraffic from "./PlanTraffic";

const Plan = ({ roots }) => {
	return (
		<>
			{roots.map((root, index) => {
				if (root.spot_id) {
					return <PlanSpot root={root} key={index} last={index === roots.length - 1} />;
				} else {
					return <PlanTraffic root={root} key={index} />;
				}
			})}
		</>
	);
};

export default Plan;
