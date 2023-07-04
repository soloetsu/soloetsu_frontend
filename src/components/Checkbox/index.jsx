import React, { useState, useEffect } from "react";

const CHILD_STYLE = {
	margin: "5px",
};

const BUTTON_STYLE = {
	border: "none",
	borderRadius: "5px",
	boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
	padding: "5px 10px",
};

const ON_STYLE = {
	background: "linear-gradient(135deg, #FFA800 0%, #FFD600 100%)",
	color: "white",
};

const OFF_STYLE = {
	background: "white",
	color: "black",
};

// onClickでCheckboxのcheckを変更する
// checkがtrueならonClickでfalseに、falseならtrueにする

const Checkbox = ({ context, check = false }) => {
	const [isChecked, setIsChecked] = useState(check);

	useEffect(() => {
		setIsChecked(check);
	}, [check]);

	return (
		<div style={CHILD_STYLE}>
			<button
				style={isChecked ? { ...BUTTON_STYLE, ...ON_STYLE } : { ...BUTTON_STYLE, ...OFF_STYLE }}
				onClick={() => setIsChecked(!isChecked)}
			>
				{context}
			</button>
		</div>
	);
};

export default Checkbox;
