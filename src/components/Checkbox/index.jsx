import React, { useState, useEffect } from "react";

const CHILD_STYLE = {
	margin: "5px",
};

const BUTTON_STYLE = {
	border: "none",
	borderRadius: "5px",
	boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
	padding: "3px",
};

const ON_STYLE = {
	background: "linear-gradient(135deg, #FFA800 0%, #FFD600 100%)",
};

const OFF_STYLE = {
	background: "white",
};

const INNER = {
	background: "white",
	width: "100%",
	height: "100%",
	padding: "5px 10px",
	borderRadius: "3px",
};

// onClickでCheckboxのcheckを変更する
// checkがtrueならonClickでfalseに、falseならtrueにする

const Checkbox = ({ context, check = false, useTags }) => {
	const [isChecked, setIsChecked] = useState(check);

	useEffect(() => {
		setIsChecked(check);
	}, [check]);

	return (
		<div style={CHILD_STYLE} className="tagarea">
			<button
				style={isChecked ? { ...BUTTON_STYLE, ...ON_STYLE } : { ...BUTTON_STYLE, ...OFF_STYLE }}
				onClick={() => {
					setIsChecked(!isChecked);
					// contextがuseTagsにあれば削除、なければ追加
					useTags((prev) => {
						if (prev.includes(context)) {
							return prev.filter((tag) => tag !== context);
						} else {
							return [...prev, context];
						}
					});
				}}
				className="hover"
			>
				<div style={INNER}>{context}</div>
			</button>
		</div>
	);
};

export default Checkbox;
