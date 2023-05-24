import React from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
	return (
		<>
			<Button url="https://www.google.com/" context="Google" />
			<Button url="https://www.youtube.com/" context="YouTube" />
			<Button url="https://www.twitter.com/" context="Twitter" />
		</>
	);
}

export default App;
