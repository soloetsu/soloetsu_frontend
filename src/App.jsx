import React from "react";
import Button from "./components/Button";
import Text from "./components/Text";
import "./App.css";
import "./reset.css";
import Card from "./components/Card";

function App() {
	return (
		<>
			<Button url="https://www.google.com/" context="Google" style={{ backgroundColor: "red" }} />
			<Button url="https://www.youtube.com/" context="YouTube" style={{ backgroundColor: "blue" }} />
			<Button url="https://www.twitter.com/" context="Twitter" style={{ backgroundColor: "green" }} />
			<Text context="こんにちは" />
			<Card
				url="https://www.google.com/"
				img="https://fujifilmsquare.jp/assets/img/column/column_24_01.jpg"
				context="カード"
			/>
		</>
	);
}

export default App;
