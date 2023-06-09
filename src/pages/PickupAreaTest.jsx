import React from "react";
import PickupArea from "@/components/PickupArea";

const PickupAreaTest = () => {
	return (
		<PickupArea
			props={[
				{
					title: "酒巡りの旅",
					url: "https://www.google.com/",
					img: "https://i.pinimg.com/originals/a7/7e/54/a77e544dd066bacc948763aafd94a056.png",
				},
				{
					title: "酒巡りの旅",
					url: "https://www.google.com/",
					img: "https://i.pinimg.com/originals/a7/7e/54/a77e544dd066bacc948763aafd94a056.png",
				},
				{
					title: "酒巡りの旅",
					url: "https://www.google.com/",
					img: "https://i.pinimg.com/originals/a7/7e/54/a77e544dd066bacc948763aafd94a056.png",
				},
			]}
		/>
	);
};

export default PickupAreaTest;
