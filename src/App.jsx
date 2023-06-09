import React from "react";
import "./App.css";
import "./reset.css";
import Home from "./pages/Home";
import CardTest from "./pages/CardTest";
import SubVisualTest from "./pages/SubVisualTest";
import SliderTest from "./pages/SliderTest";
import TagAreaTest from "./pages/TagAreaTest";
import PaginationTest from "./pages/PaginationTest";
import PickupAreaTest from "./pages/PickupAreaTest";
import BreadCrumbTest from "./pages/BreadcrumbTest";
import AboutAreaTest from "./pages/AboutAreaTest";
import ImageTileTest from "./pages/ImageTileTest";
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
				<Route path="/paginationTest" element={<PaginationTest />} />
				<Route path="/pickupAreaTest" element={<PickupAreaTest />} />
				<Route path="/breadCrumbTest" element={<BreadCrumbTest />} />
				<Route path="/aboutAreaTest" element={<AboutAreaTest />} />
				<Route path="/imageTileTest" element={<ImageTileTest />} />
			</Routes>
		</Router>
	);
}

export default App;
