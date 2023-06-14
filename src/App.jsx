import React from "react";
import Button from "./components/Button";
import Text from "./components/Text";
import "./App.css";
import "./reset.css";

function App() {
	return (
		<>
			<Button url="https://www.google.com/" context="Google" style={{ backgroundColor: "red" }} />
			<Button url="https://www.youtube.com/" context="YouTube" style={{ backgroundColor: "blue" }} />
			<Button url="https://www.twitter.com/" context="Twitter" style={{ backgroundColor: "green" }} />
			<Text context="こんにちは" />
		</>
	);
}

export default App;
