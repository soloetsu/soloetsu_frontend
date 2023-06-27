import React from "react";

const DEFAULT_STYLE = {
	display: "inline-block",
	padding: "0.5rem 1rem",
	border: "1px solid #ccc",
	borderRadius: "0.25rem",
	backgroundColor: "#fff",
	fontSize: "1rem",
	fontWeight: "400",
	lineHeight: "1.5",
	color: "#212529",
	textAlign: "center",
	whiteSpace: "nowrap",
	verticalAlign: "middle",
	cursor: "pointer",
	userSelect: "none",
};

const PARENT_STYLE = {
	display: "flex",
	alignItems: "flex-start",
	flexWrap: "wrap",
	height: "100%",
}

const CHILED_STYLE = {
	margin: "10px",
}

const BUTTON_STYLE = {
	backgroundColor: "#fff",
	border: '1px solid black',
	borderRadius: "10%",
}

const BUTTON_STYLE_ONCLICK = {
	backgroundColor: "#00ff7f",
	border: '1px solid black',
	borderRadius: "10%",
}

const CHECKMARK_STYLE = {
}

const Button = ({ tag }) => {
	return (
		<div>
			<h2>タグ</h2>
					<div style={PARENT_STYLE}>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE_ONCLICK}><span style={CHECKMARK_STYLE}>&#x2713;</span>リラックス</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>アウトドア</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>体験</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>お得</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>リラックス</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>アウトドア</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>体験</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>お得</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>アウトドア</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>体験</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>お得</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>リラックス</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>アウトドア</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>体験</button></div>
  					<div style={CHILED_STYLE}><button style={BUTTON_STYLE}>お得</button></div>
				</div>
		</div>
	);
};
  
export default Button;
