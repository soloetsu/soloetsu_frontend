import React from "react";
import Button from "./components/Button";
import Text from "./components/Text";
import Category34 from "./components/Category34";
import "./App.css";

function App() {
	return (
		<>
			<Button url="https://www.google.com/" context="Google" style={{ backgroundColor: "red" }} />
			<Button url="https://www.youtube.com/" context="YouTube" style={{ backgroundColor: "blue" }} />
			<Button url="https://www.twitter.com/" context="Twitter" style={{ backgroundColor: "green" }} />
			<Text context="こんにちは" />
			<Category34
				url="https://www.google.com/"
				img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEb_5w5xWgfWYLqmd5ZFxo4M_U4REgn-sQQ&usqp=CAU"
				context="カテゴリー"
			></Category34>
		</>
	);
}

export default App;
