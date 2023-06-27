import React from "react";
import "./App.css";
import "./reset.css";
import Home from "./pages/Home";
import CardTest from "./pages/CardTest";
import SubVisualTest from "./pages/SubVisualTest";
import SliderTest from "./pages/SliderTest";
import TagAreaTest from "./pages/TagAreaTest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cardTest" element={<CardTest />} />
				<Route path="/subVisualTest" element={<SubVisualTest />} />
				<Route path="/sliderTest" element={<SliderTest />} />
				<Route path="/tagAreaTest" element={<TagAreaTest />} />
			</Routes>
		</Router>
	);
}

export default App;
